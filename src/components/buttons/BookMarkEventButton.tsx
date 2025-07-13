"use client"
import { EventDetail } from "@/lib/prisma/validators/event-validator"
import { RegisterLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { Button } from "../ui/button"
import { Bookmark, BookmarkCheck } from "lucide-react"
import routes, { baseUrl } from "@/app/config/routes"
import { useCallback, useEffect, useState } from "react"
import { Tooltip, TooltipContent, TooltipTrigger,TooltipProvider } from "../ui/tooltip"
import { toast } from "sonner"
import debounce from "lodash.debounce"
import { NodeNextRequest } from "next/dist/server/base-http/node"


type Props = {
    event : EventDetail
}

const BookMarkEventButton = ({event} : Props) => {

    const {user} = useKindeBrowserClient();

    const isParticipantView = false;

    const [isBookMarked,setIsBookMarked] = useState(false);

    if (isParticipantView) {
        return null;
    }


    useEffect(() => {
        setIsBookMarked(event.bookMarkedBy.some((bookMarkUser) => bookMarkUser.id === user?.id));
    },[]);


    const handleBookMarkEvent = () => {

        //optimistic update

        toggleClientBookMark();

        performBookMark();

    }

    const toggleClientBookMark = () => {

        const wasBookMarked = isBookMarked;

        setIsBookMarked(prev => !prev);

        toast(wasBookMarked ? "Event Removed from bookMark" : "Event added to bookmark");

    }

    const performBookMark = useCallback(
        debounce(
            () => {
                console.log("book marked");
            },
            1000,
            {
                leading : false,trailing : true
            }
        ),
        [event.id]
    )
 
    if (!user) {
        return <RegisterLink postLoginRedirectURL={`${baseUrl}${routes.event({ownerId : event.ownerId,slug : event.slug})}`}>
            <Button className="rounded-full" variant="outline">
                <Bookmark className="w-4 h-4"/>
            </Button>
        </RegisterLink>
    }

  return (
    <TooltipProvider>
    <Tooltip>
        <TooltipTrigger asChild>
            <Button variant={"default"} className="rounded-full bg-white text-black hover:bg-white/60" onClick={handleBookMarkEvent}> 
                {isBookMarked ? <BookmarkCheck className="w-4 h-4"/> : <Bookmark className="w-4 h-4"/>}
            </Button>
        </TooltipTrigger>
        <TooltipContent className="">
            {isBookMarked ? "Remove from Bookmarked" : "Add to Bookmarked"}
        </TooltipContent>
    </Tooltip>
    </TooltipProvider>
  )
}

export default BookMarkEventButton
