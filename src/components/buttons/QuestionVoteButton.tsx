"use client"

import routes from "@/config/routes";
import { Event, Question } from "@/generated/prisma"
import { QuestionDetail } from "@/lib/prisma/validators/question-validator";
import { cn, propsWithClassName } from "@/lib/utils/uiUtils"
import { RegisterLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { ThumbsUp } from "lucide-react";

type Props = propsWithClassName<{
    eventSlug : Event["slug"];
    ownerId : Event["ownerId"];
    upvotes : QuestionDetail["upvotes"];
    totalVotes : number;
    questionId : Question["id"];
    isResolved : boolean;
}>

const QuestionVoteButton = ({eventSlug,ownerId,upvotes,questionId,totalVotes,isResolved,className} : Props) => {


    const {user} = useKindeBrowserClient();

    const isUpvoted = false;

    if (!user) {
        return <RegisterLink postLoginRedirectURL={`${routes.event({ownerId,slug : eventSlug})}`}>
           <button className={cn("flex flex-col items-center",className)}>
                <ThumbsUp size={24}/>
                <span className="px-2 pt-1 text-sm ">
                    {totalVotes}
                </span>
            </button> 
        </RegisterLink>
    }

  return (
    <button disabled={isResolved} className={cn("flex flex-col items-center disabled:cursor-not-allowed disabled:opacity-60")}>
        <ThumbsUp className={cn(isUpvoted && "stroke-blue-400")}/>
         <span className={cn("px-2 pt-1 text-sm text-black",isUpvoted && "text-blue-400")}>
                    {totalVotes}
            </span>
    </button>
  )
}

export default QuestionVoteButton
