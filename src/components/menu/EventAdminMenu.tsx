"use client"
import { EventDetail } from "@/lib/prisma/validators/event-validator"
import { cn, propsWithClassName } from "@/lib/utils/uiUtils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { Edit, Settings, Trash } from "lucide-react"
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs"
import { useState } from "react"
import DeleteEventDialog from "../dialogs/DeleteEventDialog"
import { useIsParticipantView } from "@/hooks/useIsparticipantView"


type Props = propsWithClassName<{
    event : EventDetail
}>

const EventAdminMenu = ({event,className} : Props) => {

    const [openUpdateDialog,setOpenUpdateDialog] = useState(false);
    const [openDeleteDialog,setOpenDeleteDialog] = useState(false);

    const {user} = useKindeBrowserClient();

    const isAdmin = user?.id === event.ownerId;
    const isParticipantView = useIsParticipantView();

    if (!isAdmin  || isParticipantView) return null;

  return (
    <>
    <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
            <Button className="rounded-full text-black" variant={"outline"}>
                <Settings className={cn("w-4 h-4",className)}/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Edit className="w-4 h-4 mr-2"/>
                <span>Edit Event</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-sm text-destructive" onSelect={() => setOpenDeleteDialog(true)}>
                <Trash className="w-4 h-4 mr-2 text-destructive"/>
                <span>Delete Event</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

    {/* dialogs */}
    <DeleteEventDialog open={openDeleteDialog} onOpenChange={setOpenDeleteDialog} eventId={event.id}/>
    </>
  )
}

export default EventAdminMenu
