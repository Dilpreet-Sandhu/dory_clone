"use client"
import { useIsParticipantView } from "@/hooks/useIsparticipantView";
import { PollDetail } from "@/lib/prisma/validators/poll-validator"
import { cn, propsWithClassName } from "@/lib/utils/uiUtils"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Circle, CircleCheckBig, Dot, OctagonPause, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { PollOption } from "@/generated/prisma";
import { getOptionWithPercentage } from "@/lib/utils/poll-utils";
import { PollVoterToolTip } from "./tooltips/PollVoterToolTip";
import { PollOptioinMenu } from "./menu/PollOptionMenu";
import { ClosePollDialog } from "./dialogs/ClosePollDialog";
import { useLivePoll } from "@/hooks/usePoll";


type Props = propsWithClassName<{
    poll : PollDetail
}>

export const LivePoll = ({poll : initialPoll,className} : Props) => {

    const {user} = useKindeBrowserClient();

    const [openCloseDialog,setOpenCloseDialog] = useState(false);

    const {poll,voteOption,votedOptionIndex} = useLivePoll({
        poll : initialPoll
    });

    console.log("voted index",votedOptionIndex);

    const {isLive,options} = poll;

    const totalVotes = poll._count.votes;

    const voters = poll.votes.map((vote) => vote.author);

    const isParticipantView = useIsParticipantView();

    const isAuthor = poll.event.ownerId === user?.id;

    const showEndButton = isAuthor && !isParticipantView;

    return <>
    <div className={cn("border rounded-lg p-4",className)}>

        <div className="flex items-center gap-x-5">
            <div className="inline-flex items-center px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">
            <Dot className="w-4 h-4 animate-pulse fill-green-500"/>
            <span className="font-medium">Live</span>
            </div>

            {
                showEndButton && (
                    <Button size="sm" variant={"destructive"} onClick={() => setOpenCloseDialog(true)}>
                        <OctagonPause className="w-4 h-4 mr-2"/>
                        <span>End</span>
                    </Button>
                )
            }

            {/* voters avatar list */}
            <div className="inline-flex items-center gap-x-3 ml-auto">
                {/* todo */}
                <PollVoterToolTip voters={voters} pollTotalVotes={totalVotes}/>

                <PollOptioinMenu poll={poll}/>

            </div>

        </div>
            {/* poll body */}
            <p className="font-bold mt-4">
                {poll.body}
            </p>

        {/* //poll options */}
        <div role="list" className="mt-4 space-y-3"> 
            {
                options.map((option) => (
                    <PollOptionItem
                    key={option.id}
                    option={option}
                    isVoted={option.index === votedOptionIndex}
                    totalPollVotes={totalVotes}
                    isPollClosed={false}
                    onVoteChange={() => voteOption(option.index)}
                    />
                ))
            }
        </div>

        {/* total votes */}
        <p className="text-slate-400 text-sm mt-5 ml-3">
            <Users className="inline-block mr-1"/>
            {totalVotes} total votes
            </p>
    </div>
    {/* dialogs */}
    <ClosePollDialog pollId={poll.id} open={openCloseDialog} onOpenChange={setOpenCloseDialog} onSuccess={() => setOpenCloseDialog(false)}/>
    </>

};


export const ClosedPoll = ({poll,className} : Props) => {

    const {user} = useKindeBrowserClient();

    const {options} = poll;
    const totalVotes = poll._count.votes;
    const voters = poll.votes.map((vote) => vote.author);

    const votedOptionIndex = poll.options.find((option) => option.votes.some((vote) => vote.authorId === user?.id))?.index;

    return <>
        <div className={cn("border rounded-lg p-4",className)}>

            <div className="flex items-center gap-x-5">
                
                <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    Closed
                </span>

                {/* voters avatar list */}
                <div className="inline-flex items-center gap-x-3 ml-auto">
                    {/* todo */}
                    <PollVoterToolTip voters={voters} pollTotalVotes={totalVotes}/>

                    <PollOptioinMenu poll={poll}/>

                </div>

            </div>
                {/* poll body */}
                <p className="font-bold mt-4">
                    {poll.body}
                </p>

            {/* //poll options */}
            <div role="list" className="mt-4 space-y-3"> 
                {
                    options.map((option) => (
                        <PollOptionItem
                        key={option.id}
                        option={option}
                        isVoted={option.index === votedOptionIndex}
                        totalPollVotes={totalVotes}
                        isPollClosed={false}
                        />
                    ))
                }
            </div>

            {/* total votes */}
            <p className="text-slate-400 text-sm mt-5 ml-3">
                <Users className="inline-block mr-1"/>
                {totalVotes} total votes
                </p>
        </div>
    </>

}


const PollOptionItem = ({
    option,
    isVoted,
    totalPollVotes,
    isPollClosed,
    onVoteChange : handleVoteChange
} : {
    option : PollDetail["options"][number];
    isVoted : boolean;
    totalPollVotes : number;
    isPollClosed : boolean;
    onVoteChange ?: (optionId : PollOption["id"]) => void
}) => {

    const percentage = getOptionWithPercentage({
        optionVotes : option._count.votes,
        totalVotes : totalPollVotes
    })


    return (
        <button
        role="listitem"
        onClick={() => handleVoteChange?.(option.id)}
        disabled={isPollClosed}
        className={cn("relative cursor-pointer text-sm flex w-full justify-between border p-4 rounded-sm disabled:cursor-not-allowed disabled:opacity-70",isVoted && " ring-2 ring-blue-300")}
        >
            <div className="inline-flex items-center gap-x-2">
                {isVoted ? <CircleCheckBig className=" stroke-blue-700" size={20}/> : <Circle className="stroke-gray-100" size={20}/>}
                <p className="font-medium">{option.body}</p>
            </div>
            <p>{option._count.votes} votes</p>

            <div style={{width : `${percentage}%`}} aria-hidden className="absolute inset-0 bg-blue-300/30 rounded-sm transition-all duration-300 "/>
        </button>
    )


}