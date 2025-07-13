"use client"

import { Event } from "@/generated/prisma"
import { AlertDialogProps } from "@radix-ui/react-alert-dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../ui/alert-dialog";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils/uiUtils";

type Props = {
    eventId : Event["id"]
} & AlertDialogProps;

const DeleteEventDialog = ({eventId,...props} : Props) => {
  return (
    <AlertDialog {...props}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone . This action will delete all your event's questions , polls and related data
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel disabled={false} className={cn(buttonVariants({variant : "ghost"}))}>
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction disabled={false} className={cn(buttonVariants({variant : "destructive"}))}>
                    Continue
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteEventDialog
