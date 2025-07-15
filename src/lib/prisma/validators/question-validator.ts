import { Prisma } from "@/generated/prisma";
import { QuestionOrderBy } from "@/lib/utils/question-utils";
import { match } from "ts-pattern";

export const questionDetail = Prisma.validator<Prisma.QuestionDefaultArgs>()({
    include : {
        event : {
            select : {
                id : true,
                ownerId : true,
                slug : true
            }
        },
        author : {

            select : {
                id : true,
                displayName : true,
                color : true
            }

        },
        _count : {
            select : {
                upvotes : true
            }
        },
        upvotes : true
    }
});

export const questionOrderBy = (orderBy : QuestionOrderBy) : Prisma.QuestionOrderByWithRelationInput => {

    return match(orderBy)
    .with("most-popular",() => ({
        upvotes : {
            _count : "desc"
        }as const
    }))
    .with("newest",() => ({
        createdAt : "desc" as const,
    }))
    .with("oldest",() => ({
        createdAt : "asc" as const
    }))
    .exhaustive()
}



export type QuestionDetail = Prisma.QuestionGetPayload<typeof questionDetail>;