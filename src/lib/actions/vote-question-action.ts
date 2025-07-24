import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getQuestionSchema } from "../validations/question-schema";
import { actionClient } from "./safe-action";
import { prisma } from "../prisma/client";


export const voteQuestionAction = actionClient
.inputSchema(getQuestionSchema)
.action(async ({parsedInput : {questionId}}) => {

    console.log("voting question");

    const user = await getKindeServerSession().getUser();


    if (!user) {
        throw new Error("not authenticated");
    }

    const question = await prisma.question.findUnique({
        where : {
            id : questionId,
        },
        include : {
            upvotes : {
                where : {
                    authorId : user.id,
                    questionId: questionId
                }
            },
            event : {
                select: {
                    slug : true,
                    ownerId : true
                }
            }
        }
    });

    if (!question) {
        throw new Error("question not found");
    }


    if (question.isResolved) {
        console.log("is resolved");
        return;
    } 

    const wasUpvotedByUser = question.upvotes.length > 0;

    if (wasUpvotedByUser) {

        await prisma.questionUpvote.delete({
            where : {
                questionId_authorId : {
                    questionId,
                    authorId : user.id
                }
            }
        })
        return true
    }

    await prisma.$transaction([
        prisma.questionUpvote.create({
            data : {
                questionId,
                authorId : user.id
            }
        }),
        prisma.eventParticipant.upsert({
            where : {
                eventId_userId : {
                    eventId : question.eventId,
                    userId : user.id
                }
            },
            create  : {
                eventId : question.eventId,
                userId : user.id
            },
            update : {}
        }),

        //send a notification to the user
    ])

    console.log("voting ended");


    return true;
})