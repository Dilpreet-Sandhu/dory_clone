
"use client"

import { Link } from "lucide-react"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import copy from 'copy-to-clipboard';
import { Event } from "@/generated/prisma";
import { toast } from "sonner";
import { getEventLink } from "@/lib/utils/event-utils";


type Props = {
    ownerId : Event["ownerId"]
    eventSlug : Event["slug"]
}

const CopyEventLinkButton = ({ownerId,eventSlug} : Props) => {

    function handleCopy() {

        copy(getEventLink({ownerId,eventSlug}));

        toast("event link copied to clipboard");

    }

  return (
    <TooltipProvider>

        <Tooltip>

            <TooltipTrigger asChild>
                <Button onClick={handleCopy} variant={"outline"} className="rounded-full">
                    <Link className="w-4 h-4"/>
                </Button>
            </TooltipTrigger>

            <TooltipContent className="p-2">
                <p>Copy Content to ClipBoard</p>
            </TooltipContent>

        </Tooltip>
      
    </TooltipProvider>
  )
}

export default CopyEventLinkButton
