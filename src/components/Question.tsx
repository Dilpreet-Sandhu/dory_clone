"use client"

import { QuestionDetail } from "@/lib/prisma/validators/question-validator"
import { cn } from "@/lib/utils/uiUtils"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { useState } from "react"
import UserAvatar from "./UserAvatar"
import { defaultDateFormatter } from "@/lib/utils/date-utils"
import { CheckCircle, EllipsisVertical, Pin } from "lucide-react"
import QuestionVoteButton from "./buttons/QuestionVoteButton"

type Props = {
    question : QuestionDetail
}

const Question = ({question} : Props) => {

    const {user} = useKindeBrowserClient();

    const [isEditing,setIsEditing] = useState(false);

    const {author,createdAt} = question;
    const isAuthor = author.id === user?.id;
    const isAdmin = question.event.ownerId === user?.id;

    //todo needs update
    const {isPinned,isResolved,body} = question;



  return (
    <div className={cn("border rounded-xl drop-shadow-md bg-white p-4 lg:p-6",isResolved && "border-green-400 bg-green-50")}>
      <div className="flex items-center gap-x-5">
        {
          !isEditing && (
           <QuestionVoteButton
            eventSlug={question.event.slug}
            ownerId={question.event.ownerId}
            upvotes={question.upvotes}
            questionId={question.id}
            totalVotes={question._count.upvotes}
            isResolved={isResolved}
           />

          )
        }

        <div className="flex-1 grow-1">

          {/* headers */}
          <div className="flex items-center gap-x-2">
            <span className="inline-flex items-center gap-x-2 ">
              <UserAvatar
                className="w-4 h-4"
                displayName={author.displayName}
                color={author.color}
              />
            <span className="text-sm text-slate-600">{author.displayName}</span>
            </span>
            <time className="text-slate-400 text-xs">{defaultDateFormatter.format(createdAt)}</time>

            {
              isPinned && (
                <Pin size={20 } className="inline-flex ml-2 fill-yellow-300 -rotate-45"/>
              )
            }

            {
              isResolved && (
                <CheckCircle size={20} className="stroke-green-500"/>
              )
            }

            {
              !isResolved && (
                //todo 
                <EllipsisVertical size={16} className="ml-auto"/>
              )

            }

          </div>

          {/* body */}

          {
            !isEditing && (
              <p className="mt-5 ml-3 whitespace-pre-wrap text-sm">{body}</p>
            )
          }

          {
            isEditing && (
              <form>
                {/* todo */}
              </form>
            )
          }

        </div>
      </div>
    </div>
  )
}

export default Question
