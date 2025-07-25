"use client";

import { useIsParticipantView } from "@/hooks/useIsparticipantView";
import { PollDetail } from "@/lib/prisma/validators/poll-validator";
import { propsWithClassName } from "@/lib/utils/uiUtils";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { EllipsisVertical, Trash2 } from "lucide-react";
import { DeletPollDialog } from "../dialogs/DeletPollDialog";

type Props = propsWithClassName<{
    poll : PollDetail
}>

export const PollOptioinMenu = ({poll,className} : Props) => {

    const {user} = useKindeBrowserClient();

    const [openDeleteDialog,setOpenDeleteDialog] = useState(false);

    const isAdmin = poll.event.ownerId === user?.id;

    const isParticipantView = useIsParticipantView();

    if (isParticipantView || !isAdmin) {
        return null;
    }


    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <button className={className}>
                        <EllipsisVertical size={20}/>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2 space-y-1">
                    <DropdownMenuItem
                    onSelect={() => setOpenDeleteDialog(true)}
                     className="text-sm text-destructive">
                        <Trash2 className="text-destructive w-4 h-4 mr-2"/>
                        <span>
                            Delete Poll
                        </span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {/* dialogs */}
            <DeletPollDialog pollId={poll.id} onSuccess={() => setOpenDeleteDialog(false)} open={openDeleteDialog} onOpenChange={setOpenDeleteDialog}/>
        </>
    )


}