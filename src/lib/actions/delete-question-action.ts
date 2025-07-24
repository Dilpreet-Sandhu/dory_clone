"use server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getQuestionSchema } from "../validations/question-schema";
import { actionClient } from "./safe-action";
import { prisma } from "../prisma/client";
import routes from "@/config/routes";
import { revalidatePath } from "next/cache";


export const deleteQuestionAction = actionClient
.inputSchema(getQuestionSchema)
.action(async ({parsedInput : {questionId}}) => {

    const user = await getKindeServerSession().getUser();

    if (!user) {
        throw new Error("not authenticated");
    }

    const question = await prisma.question.findUnique({
        where : {
            id : questionId
        },
        select : {
            event : {
                select : {
                    ownerId : true,
                    slug : true
                }
            },
            userId : true
        }
    });


    if (!question) {
        throw new Error("Question not found");
    }

    if (question.event.ownerId !== user.id && question.userId !== user.id) {
        throw new Error("You donot have permission to delete this question");
    }

    await prisma.question.delete({
        where : {
            id : questionId
        }
    });


    revalidatePath(routes.event({
        ownerId : question.event.ownerId,
        slug : question.event.slug
    }))

})