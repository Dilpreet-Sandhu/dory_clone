
import { Event, Question, User } from "@/generated/prisma"
import { QuestionOrderBy } from "../utils/question-utils"
import { cache } from "react"
import { prisma } from "../prisma/client"
import {questionDetail, questionOrderBy} from '@/lib/prisma/validators/question-validator'

type Props = {
    ownerId : User["id"],
    eventSlug : Event["slug"]
    orderBy : QuestionOrderBy,
    cursor ?: Question["id"],
    filters ?: {
        questionId ?: Question["id"]
    }
}

export const getEventResolvedQuestions = cache(async ({ownerId,eventSlug,orderBy = "most-popular",cursor,filters} : Props) => {

    return await prisma.question.findMany({
        where : {
            event : {
                ownerId,
                slug : eventSlug
            },
            isResolved : true,
            ...(filters?.questionId ? {id : filters.questionId} : {})
        },
        ...questionDetail,
        orderBy : [{isPinned : "desc"},{...questionOrderBy(orderBy)}],
        take : 10,
        skip : cursor ? 1 : 0,
        ...(cursor ? {cursor : {id : cursor} } : {})
    })

})