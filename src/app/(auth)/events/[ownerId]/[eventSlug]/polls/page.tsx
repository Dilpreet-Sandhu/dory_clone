import { Loader } from "@/components/AuthLoader";
import ClearSearchParams from "@/components/buttons/ClearSearchParams";
import RefreshButton from "@/components/buttons/RefreshButton";
import ClosedPollsList from "@/components/ClosedPollsList";
import PollsNavigation from "@/components/layout/PollsNavigation";
import { NoContent } from "@/components/NotFound";
import { LivePoll } from "@/components/Poll";
import { Button } from "@/components/ui/button";
import { getEventClosedPolls } from "@/lib/server/getEventClosedPolls";
import { getEventDetails } from "@/lib/server/getEventDetails";
import { getEventLivePolls } from "@/lib/server/getEventLivePolls";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Plus } from "lucide-react";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type PathParams = {
  eventSlug : string;
  ownerId : string;
}

type SearchParams = {
  closed : string;
  asParticipant : string;
  pollId : string;
}

const PollsPage = async (
  props: {
    params : Promise<PathParams>;
    searchParams ?: Promise<{[key: string]: string | string[] | undefined}>
  }
) => {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const {ownerId,eventSlug} =  params;


  const showClosed = searchParams?.closed === "true";
  const isParticipantView = searchParams?.asParticipant === "true";
  const pollId = searchParams?.pollId;


  const event = await getEventDetails({ownerId,slug : eventSlug});

  if (!event) {
    return notFound();
  }

  const user = await getKindeServerSession().getUser();


  const isAdmin = user?.id === event.ownerId;

  const showNewPollButton = isAdmin && !isParticipantView && !showClosed;


  const hasFilters = !!pollId;

  return (
    <>
      <div className="flex justify-between">

        <PollsNavigation
        ownerId={ownerId}
        eventSlug={eventSlug}
        />

        <div className="inline-flex items-baseline gap-x-3">
          <RefreshButton/>
          {
            showNewPollButton && (
              <Button variant="ghost" className="bg-blue-100 text-primary cursor-pointer hover:bg-blue-400 hover:text-primary ">
                <Plus className="w-4 h-4 mr-2"/>
                <span>New
                    <span className="hidden lg:inline">Poll</span>
                </span>
              
              </Button>
            )
          }
        </div>

      </div>

      {hasFilters && (
        <div className="flex mt-4 items-center gap-x-4">
          <p className="text-muted-foreground text-sm ">You have active Filters:</p>
          <ClearSearchParams/>
        </div>
      )}

      {/* pools */}

      <Suspense key={Date.now()} fallback={<Loader/>}> 
        <Polls
          showClosed={showClosed}
          ownerId={ownerId}
          pollId={pollId as string}
          eventSlug={eventSlug}
        />
      </Suspense>

    </>
  )
}

const Polls = async ({
  eventSlug,
  ownerId,
  pollId,
  showClosed = false
} : {
  eventSlug : string;
  ownerId : string;
  pollId ?: string;
  showClosed ?: boolean
}) => {

  const fetchPolls = showClosed ? getEventClosedPolls : getEventLivePolls;

  const polls = await fetchPolls({
    ownerId,
    eventSlug,
    ...(pollId ? {filters : {pollId}} : {}),
  })

  if (showClosed) {
    return <ClosedPollsList
      ownerId={ownerId}
      eventSlug={eventSlug}
      pollId={pollId}
      initialPolls={polls}
    />
  }

  if (polls.length === 0) {
    return <NoContent>
      <span className="tracking-tight font-light mt-3">No active polls right now</span>
    </NoContent>
  }

  return (
    <div className="mt-8 space-y-10">
      {
        polls.map((poll) => <LivePoll key={poll.id} poll={poll}/>)
      }
    </div>
  )

}



export default PollsPage
