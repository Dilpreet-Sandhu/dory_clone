import { Poll } from "@/generated/prisma"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../ui/alert-dialog"
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils/uiUtils";
import { buttonVariants } from "../ui/button";

type Props = {
    pollId : Poll["id"];
    onSuccess ?: () => void;
} & AlertDialogProps;

export const ClosePollDialog = ({
    pollId,
    onSuccess,
    ...dialogProps
} : Props) => {

    const isFieldDisabled = false;
    const isExecuting = isFieldDisabled;



    const handleClose = (event : React.MouseEvent) => {
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
                    This action cannot be undone . The poll cannot be reopened afterwards
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel disabled={isExecuting} className={cn(buttonVariants({variant : "ghost"}))}>
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleClose} disabled={isFieldDisabled} className={cn(buttonVariants({variant : "destructive"}))}>
                    {isFieldDisabled ? "Closing..." : "Close"}
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
}