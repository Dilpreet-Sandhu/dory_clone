import { Poll } from "@/generated/prisma"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../ui/alert-dialog"
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils/uiUtils";
import { buttonVariants } from "../ui/button";

type Props = {
    pollId : Poll["id"];
    onSuccess ?: () => void;
} & AlertDialogProps;

export const DeletPollDialog = ({
    pollId,
    onSuccess,
    ...dialogProps
} : Props) => {

    const isFieldDisabled = false;
    const isExecuting = isFieldDisabled;

    const handleDelete = (event : React.MouseEvent) => {
        event.preventDefault();

        //todo add server action
        console.log(pollId);
        onSuccess?.();
    }


    return <AlertDialog {...dialogProps}>
          <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone . This action will permanently delete your poll and all it&apos; s votes from the event
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel disabled={isExecuting} className={cn(buttonVariants({variant : "ghost"}))}>
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete} disabled={isFieldDisabled} className={cn(buttonVariants({variant : "destructive"}))}>
                    {isFieldDisabled ? "Deleting..." : "Continue"}
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
}