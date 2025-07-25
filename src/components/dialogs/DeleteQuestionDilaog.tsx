"use client"

import {  Question } from "@/generated/prisma"
import { AlertDialogProps } from "@radix-ui/react-alert-dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../ui/alert-dialog";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils/uiUtils";
import { useAction } from "next-safe-action/hooks";
import { deleteQuestionAction } from "@/lib/actions/delete-question-action";
import { toast } from "sonner";
import React from "react";

type Props = {
    questionId : Question["id"],
    onSuccess ?: () => void
} & AlertDialogProps;

const DeleteQuestionDialog = ({questionId,onSuccess : handleSuccess,...props} : Props) => {

    const {execute,isExecuting} = useAction(deleteQuestionAction,{
        onError : (err) => {

            console.log(err);

            toast.error("something went wrong",{
                description : "failed to delete the question"
            });

        },
        onSuccess : () => {
            handleSuccess?.();
            toast.success("delete question successfully");
        },
    });

    const handleDelete = async (event : React.MouseEvent) => {

        event.preventDefault();

        execute({questionId});

    }

    const isFieldDisabled = isExecuting;

  return (
    <AlertDialog {...props}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone . This action will permanently delete your question
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel disabled={isFieldDisabled} className={cn(buttonVariants({variant : "ghost"}))}>
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete} disabled={isFieldDisabled} className={cn(buttonVariants({variant : "destructive"}))}>
                    {isFieldDisabled ? "Deleting..." : "Continue"}
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteQuestionDialog
