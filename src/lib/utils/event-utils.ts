import routes, { baseUrl } from "@/app/config/routes"
import { Event } from "@/generated/prisma"

type Props = {
    ownerId : Event["ownerId"]
    eventSlug : Event["slug"]
}

export const getEventLink = ({ownerId,eventSlug} : Props) => {

    return `${baseUrl}/${routes.event({ownerId,slug : eventSlug})}`;

}