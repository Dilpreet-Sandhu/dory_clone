import { BookMarkedEventsList } from '@/components/EventsList';
import { NoContent } from '@/components/NotFound';
import { ScrollArea } from '@/components/ui/scroll-area'
import { getUserBookmarkEvents } from '@/lib/server/getMyBooksMarkedEvents';
import React from 'react'

const MyBookMarksPage = async () => {

  const initialBookMarkedEvents = await getUserBookmarkEvents();

  return (
    <ScrollArea className="w-full h-full px-4 py-2">

      <h2 className="text-2xl font-bold mb-8 mt-4 ml-4">Bookmarked Event</h2>

      <div className="relative h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

        {
          initialBookMarkedEvents.length === 0 ? (
          <NoContent>
            You have'nt bookmarked any events yet
          </NoContent> ) : <BookMarkedEventsList initialEvents={initialBookMarkedEvents}/>
        }

      </div>

    </ScrollArea>
  )
}

export default MyBookMarksPage


