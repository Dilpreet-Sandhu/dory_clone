import { Event } from "@/generated/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { cache } from "react";
import { prisma } from "../prisma/client";
import { eventDetails } from "../prisma/validators/event-validator";

type Props = {
    cursor ?: Event["id"]
}

export const getUserBookmarkEvents = cache(async ({cursor} : Props = {}) => {

    const user = await getKindeServerSession().getUser();


    if (!user || !user.id) {
        throw new Error("Not authenticated");
    }


    const userWithBookMarks = await prisma.user.findUnique({
        where : {id : user.id},
        select : {
            bookMarks : {
                ...eventDetails,
                orderBy : {
                    createdAt : "desc"
                },
                take : 20,
                skip : cursor ? 1 : 0,
                ...(cursor ? {cursor : {id : cursor}} : {})
            }
        }
    });

    if (!userWithBookMarks) {
        throw new Error("user not found");
    }

    return userWithBookMarks.bookMarks;

})