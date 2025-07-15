

import Link from 'next/link'
import React from 'react'
import { Card, CardHeader } from './ui/card'
import { cn, propsWithClassName } from '@/lib/utils/uiUtils'
import { EventDetail } from '@/lib/prisma/validators/event-validator'
import { User } from 'lucide-react'
import routes from '@/config/routes'

type Props = propsWithClassName<{
    event : EventDetail
}>

const EventCard = ({event,className} : Props) => {
  return (
    <Link href={routes.event({ownerId : event.ownerId,slug : event.slug})} prefetch={false}>
        <Card className={cn("rounded-none border-l-[4px] border-r-0 border-t-0 border-b-0 border-gray-400/80",className)}>
            <CardHeader>
                <div className="flex justify-between">
                    <h4 className="text-base font-semibold line-clamp-2">{event.displayName}</h4>
                </div>

                <div className="flex justify-between text-[12px] text-gray-400 font-medium">
                    <span>
                        <span>Q&A : {event._count.questions} </span>
                        <span className="mx-2">&bull;</span>
                        <span>Polls : {event._count.polls}</span>
                    </span>

                    <span className="inline-flex gap-x-1 items-center font-bold">
                        <User className="w-3 h-3" />
                        <span>{event._count.participants} Participants</span>
                    </span>
                </div>

            </CardHeader>
        </Card>
    </Link>
  )
}

export default EventCard
