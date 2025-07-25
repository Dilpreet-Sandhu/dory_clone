import routes, { baseUrl } from "@/config/routes";
import { Poll, PollOption, User } from "@/generated/prisma";
import { votePollAction } from "@/lib/actions/vote-poll-action";
import { PollDetail } from "@/lib/prisma/validators/poll-validator";
import { supabaseClient } from "@/lib/supabase/client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import debounce from "lodash.debounce";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import {  useEffect, useState } from "react";
import { match } from "ts-pattern";

type VoteEvent = {
  authorId: User["id"];
  pollId: Poll["id"];
  pollOptionId: PollOption["id"];
};

export const useLivePoll = ({ poll: initialPoll }: { poll: PollDetail }) => {
  const { user } = useKindeBrowserClient();

  const router = useRouter();

  const [poll, setPoll] = useState<PollDetail>(initialPoll);
  const [votedOptionIndex, setVotedOptionIndex] = useState<
    number | undefined
  >();

  const { execute: executeVote } = useAction(votePollAction, {
    onSuccess: () => console.log("succefully voted"),
    onError: (err) => {
      console.error("unsuccesfull " + err.error.serverError);
    },
  });

  //listening to real time updates
  useEffect(() => {
    const channel = supabaseClient
      .channel("live-votes")
      .on<VoteEvent>(
        "postgres_changes",
        { event: "*", schema: "public", table: "PollVote" },
        (payload : RealtimePostgresChangesPayload<VoteEvent>) => {

            const {eventType,new : newVote} = payload;

          match(eventType)
            .with("INSERT", () => {
              const { authorId, pollId, pollOptionId } = newVote as VoteEvent;

              console.log("newVote" + authorId);

              if (authorId === user?.id) {
                console.log("same user so return");
                return;
              }

              setPoll((prev) => ({
                ...prev,
                _count: {
                  votes: prev._count.votes + 1,
                },
                options: prev.options.map((option) => {
                  if (option.id === pollOptionId) {
                    return {
                      ...option,
                      votes: [
                        ...option.votes,
                        {
                          authorId,
                          pollId,
                          pollOptionId,
                        },
                      ],
                      _count: {
                        votes: option._count.votes + 1,
                      },
                    };
                  }

                  return option;
                }),
              }));
            })
            .with("DELETE", () => {
              const { authorId } = newVote as VoteEvent;

              if (authorId === user?.id) {
                console.log('same user so reutrn');
                return;
              }

              console.log("deleted vote");

              setPoll((prev) => ({
                ...prev,
                _count: {
                  votes: prev._count.votes - 1,
                },
                options: prev.options.map((option) => {
                  const wasVotedByUser = option.votes.some(
                    (vote) => vote.authorId === authorId
                  );

                  if (wasVotedByUser) {
                    return {
                      ...option,
                      votes: option.votes.filter(
                        (vote) => vote.authorId !== authorId
                      ),
                      _count: {
                        votes: option._count.votes - 1,
                      },
                    };
                  }

                  return option;
                }),
              }));
            });
        }
      )
      .subscribe((status, error) => {
        console.log(`statys ${status} : ${error}`);
      });

    return () => {
      supabaseClient.removeChannel(channel);
    };
  }, [user?.id]);

  useEffect(() => {
    const oldVotedOptionIndex = initialPoll.options.find((option) =>
      option.votes.some((vote) => vote.authorId === user?.id)
    )?.index;

    setVotedOptionIndex(oldVotedOptionIndex);
  }, [user?.id, initialPoll.options]);

  const voteOption = (newOptionIndex: number) => {
    if (!user) {
      return router.replace(
        `${
          routes.register
        }?post_login_redirect_url=${baseUrl}${routes.eventPolls({
          ownerId: poll.event.ownerId,
          slug: poll.event.slug,
        })}`
      );
    }

    const hasVoted = votedOptionIndex !== null;
    const oldVotedOptionIndex = votedOptionIndex;

    if (oldVotedOptionIndex === newOptionIndex) {
      return;
    }

    const updatedPoll: PollDetail = {
      ...poll,
      _count: {
        votes: hasVoted ? poll._count.votes : poll._count.votes + 1,
      },
      options: poll.options.map((option) => {
        if (option.index === newOptionIndex) {
          return {
            ...option,
            _count: {
              votes: option._count.votes + 1,
            },
          };
        }

        if (option.index === oldVotedOptionIndex) {
          return {
            ...option,
            _count: {
              votes: option._count.votes - 1,
            },
          };
        }

        return option;
      }),
    };

    setPoll(updatedPoll);
    setVotedOptionIndex(newOptionIndex);

    //perform server action
    performVote(newOptionIndex);
  };

  const performVote =
    debounce(
      (newOptionIndex: number) => {
        executeVote({
          pollId: poll.id,
          optionIndex: newOptionIndex,
        });
      },
      1000,
      { leading: false, trailing: true }
    );

  return { poll, voteOption, votedOptionIndex };
};
