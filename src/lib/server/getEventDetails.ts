import "server-only";

import { cache } from "react";
import { prisma } from "../prisma/client";
import { eventDetails } from "../prisma/validators/event-validator";

type Params = {
    ownerId : string;
    slug : string
}

export const getEventDetails = cache(async ({ownerId,slug} : Params) => {

    return await prisma.event.findUnique({
        where : {
            slug_ownerId : {
                ownerId,
                slug : slug
            }
        },
        ...eventDetails

    })

})