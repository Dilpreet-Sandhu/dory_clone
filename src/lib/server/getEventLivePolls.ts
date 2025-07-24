import { Event, User } from "@/generated/prisma";
import "server-only";
import { prisma } from "../prisma/client";
import { pollDetail } from "../prisma/validators/poll-validator";
import {cache} from 'react';

type Params = {
    ownerId : User["id"];
    eventSlug : Event["slug"]
}


export const getEventLivePolls = cache(async ({
    eventSlug,
    ownerId
} : Params) => {

    return await prisma.poll.findMany({
        where : {
            event : {
                ownerId,
                slug : eventSlug
            },
            isLive : true
        },
        orderBy : {
            createdAt : "desc"
        },
        ...pollDetail
    })


});