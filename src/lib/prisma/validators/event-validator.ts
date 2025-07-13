import { Prisma } from "@/generated/prisma";



export const eventDetails = Prisma.validator<Prisma.EventDefaultArgs>()({
    include : {
        owner : {
            select : {
                id : true,
                displayName : true,
                color : true
            }
        },
        bookMarkedBy : true,
        _count : {
            select : {
                polls : true,
                questions : true,
                participants : true
            }
        }
    }
});

export type EventDetail = Prisma.EventGetPayload<typeof eventDetails>