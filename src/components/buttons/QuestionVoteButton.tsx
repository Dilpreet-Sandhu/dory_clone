"use client"

import routes from "@/config/routes";
import { Event, Question } from "@/generated/prisma"
import { QuestionDetail } from "@/lib/prisma/validators/question-validator";
import { cn, propsWithClassName } from "@/lib/utils/uiUtils"
import { RegisterLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { ThumbsUp } from "lucide-react";
import {useVote} from '@/hooks/useQuestion';

type Props = propsWithClassName<{
    eventSlug : Event["slug"];
    ownerId : Event["ownerId"];
    upvotes : QuestionDetail["upvotes"];
    totalVotes : number;
    questionId : Question["id"];
    isResolved : boolean;
}>

const QuestionVoteButton = ({eventSlug,ownerId,upvotes,questionId,totalVotes : initialTotalVotes,isResolved,className} : Props) => {


    const {user} = useKindeBrowserClient();


    const {isVoted : isUpvoted,totalVotes,handleVote} = useVote({
        questionId : questionId,
        upvotes : upvotes,
        totalVotes : initialTotalVotes
    })
    
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
    <button onClick={handleVote} disabled={isResolved} className={cn("flex cursor-pointer flex-col items-center disabled:cursor-not-allowed disabled:opacity-60")}>
        <ThumbsUp className={cn(isUpvoted && "stroke-blue-400")}/>
         <span className={cn("px-2 pt-1 text-sm text-black",isUpvoted && "text-blue-400")}>
                    {totalVotes}
            </span>
    </button>
  )
}

export default QuestionVoteButton
