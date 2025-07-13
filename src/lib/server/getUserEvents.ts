import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { cache } from "react";
import { prisma } from "../prisma/client";
import { eventDetails } from "../prisma/validators/event-validator";
import { Event } from "@/generated/prisma";

type Params = {
    cursor ?: Event["id"]
}

export const getUserEvents = cache(async ({cursor} : Params = {}) => {

    const user = await getKindeServerSession().getUser();

    if (!user || !user.id) {
        throw new Error("not autheticated");
    }

    return await prisma.event.findMany({
        where : {
            ownerId : user.id
        },
        take : 20,
        skip : cursor ? 1 : 0,
        ...(cursor ? {cursor : {id : cursor}} : {}),
        ...eventDetails,
        orderBy : {
            createdAt : "desc"
        }
    }); 

})