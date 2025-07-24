"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { updateQuestionSchema } from "../validations/question-schema";
import { actionClient } from "./safe-action";
import { prisma } from "../prisma/client";


export const updateQuestionAction = actionClient
.inputSchema(updateQuestionSchema)
.action(async ({parsedInput : {questionId,...fields}}) => {

    
    const user = await getKindeServerSession().getUser();

    if (!user) {
        throw new Error("Not authenticated!");
    }

  
    //find the question we want to update

    const question = await prisma.question.findUnique({
        where : {
            id : questionId
        },
        select : {
            event : {
                select : {
                    id : true,
                    ownerId : true,
                    slug : true
                }
            },
            userId : true
        }
    });

    if (!question) {
        throw new Error("no questioin found");
    }

    if (question.event.ownerId != user.id && question.userId != user.id) {
        throw new Error("you donot have the permissioin to update the question")
    }


    //update the question and notifiy the author of the question
    await prisma.$transaction([
         prisma.question.update({
            where : {
                id : questionId
            },
            data : fields
         })

         //todo notification
    ]);

    return {
        questionId,
        ...fields
    }

})