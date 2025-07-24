"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { createQuestionSchema } from "../validations/question-schema"
import { actionClient } from "./safe-action"
import { prisma } from "../prisma/client"
import { questionDetail } from "../prisma/validators/question-validator"


export const createQuestionAction = actionClient
.inputSchema(createQuestionSchema)
.action(async ({parsedInput : {body,ownerId,slug}}) => {

    const user = await getKindeServerSession().getUser();

    if (!user) {
        throw new Error("not authenticated");
    }

    const event = await prisma.event.findUnique({
        where : {
            slug_ownerId : {
                ownerId,
                slug
            }
        }
    });

    if (!event) {
        throw new Error("no event found");
    }


    //create the question and add user to participant in event if it is already not a participant 

   const [newQuestion] =  await prisma.$transaction([
        prisma.question.create({
            data : {
                body,
                userId : user.id,
                eventId : event.id

                //create notification to notify the event onwer about creation of new question
            },
            ...questionDetail 
        }),
        prisma.eventParticipant.upsert({
           where : {
                eventId_userId : {
                    eventId : event.id,
                    userId : user.id
                }
           },
           create : {
            eventId :  event.id,
            userId : user.id
           },
           update : {}
        })
    ]);

    return newQuestion;

})