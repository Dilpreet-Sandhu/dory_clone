import { Event, Poll, User } from "@/generated/prisma";
import { cache } from "react";
import { prisma } from "../prisma/client";
import { pollDetail } from "../prisma/validators/poll-validator";

type Props = {
    eventSlug : Event["slug"];
    ownerId : User["id"];
    cursor ?: Poll["id"];
    filters ?: {
        pollId ?: Poll["id"]
    }
}


export const getEventClosedPolls = cache(async ({
    eventSlug,
    ownerId,
    cursor,
    filters
} : Props) => {


    return prisma.poll.findMany({
        where : {
            event : {
                ownerId,
                slug : eventSlug
            },
            isLive :false,
            ...(filters?.pollId ? {id : filters.pollId} : {})
        },
        ...pollDetail,
        orderBy : {
            createdAt : "desc"
        },
        take : 10,
        skip : cursor ? 1 : 0,
        ...(cursor ? {cursor : {id : cursor}} : {})
    })

})