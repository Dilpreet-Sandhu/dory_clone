import { EventDetail } from '@/lib/prisma/validators/event-validator'
import React from 'react'
import EventCard from './EventCard'

const EventsList = ({initialEvents} : {initialEvents : EventDetail[]}) => {
  return initialEvents.map((event) => <EventCard event={event} key={event.id} className="h-36"/>)
}
export const BookMarkedEventsList = ({initialEvents} : {initialEvents : EventDetail[]}) => {
  return initialEvents.map((event) => <EventCard event={event} key={event.id} className="h-36"/>)
}

export default EventsList
