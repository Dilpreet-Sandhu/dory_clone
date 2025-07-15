import { Event } from "@/generated/prisma";


export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

type EventRouteParams = {
    ownerId : Event["ownerId"],
    slug : Event["slug"]
}

export default {
    home : '/',
    register : '/api/auth/register',
    login : '/api/auth/login',
    dashboard : '/dashboard',
    bookmarks : '/dashboard/bookmarks',
    account : '/dashboard/account',
    event : ({ownerId,slug} : EventRouteParams) => `/events/${ownerId}/${slug}`,
    eventPolls : ({ownerId,slug} : EventRouteParams) => `/events/${ownerId}/${slug}/polls`
} as const;