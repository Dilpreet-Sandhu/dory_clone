"use client";

import { PollDetail } from "@/lib/prisma/validators/poll-validator";
import { cn, propsWithClassName } from "@/lib/utils/uiUtils";
import { useState } from "react";
import { NoContent } from "./NotFound";
import { ClosedPoll } from "./Poll";


type Props = propsWithClassName<{
    initialPolls : PollDetail[];
    ownerId : string;
    eventSlug : string;
    pollId ?: string
}>

const ClosedPollsList = ({
    initialPolls,
    ownerId,
    eventSlug,
    pollId,
    className
} : Props) => {

    const [closedPolls,setClosedPolls] = useState(initialPolls);


  return (
    <div className={cn("space-y-8 pb-10",className)}>
      {
        closedPolls.length === 0 ? (
            <NoContent>
                <span className="tracking-tight font-light mt-3">
                    No polls has been closed yet
                </span>
            </NoContent>
        ) : (
            closedPolls.map((closedPoll) => (
                <ClosedPoll poll={closedPoll} key={closedPoll.id}/>
            ))
        )
      }
    </div>
  )
}

export default ClosedPollsList
