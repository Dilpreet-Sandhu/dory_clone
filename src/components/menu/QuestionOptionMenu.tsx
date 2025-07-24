"use client"

import { useIsParticipantView } from "@/hooks/useIsparticipantView";
import { QuestionDetail } from "@/lib/prisma/validators/question-validator"
import { propsWithClassName } from "@/lib/utils/uiUtils"
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { EllipsisVerticalIcon ,CircleCheckBig, Pin, Edit, Trash} from "lucide-react";
import DeleteQuestionDialog from "../dialogs/DeleteQuestionDilaog";


type Props = propsWithClassName<{
    questionId : QuestionDetail["id"],
    isPinned : boolean;
    isResolved : boolean;
    isAdmin : boolean;
    isEditing : boolean;
    isAuthor : boolean;
    toggleEditingMode : () => void;
    onPinChange : (isPinned : boolean) => void;
    onResolveChange : (isResolved : boolean) => void;
}>

const iconClass = "w-4 h-4 mr-2"; 

const QuestionOptionMenu = ({
    questionId,
    isPinned,
    isResolved,
    isAdmin,
    isEditing,
    isAuthor,
    toggleEditingMode,
    onPinChange : handlePinChange,
    onResolveChange : handleResolveChange,
    className

} : Props) => {

    const [openDeleteDialog,setOpenDeleteDialog] = useState(false);

    const isParticipantView = useIsParticipantView();

    //permission
    const canEdit = !isEditing && isAuthor;
    const canPin = isAdmin;
    const canDelete = isAdmin || isAuthor;
    const canResolve = isAdmin;

    const permissions = [canEdit,canPin,canDelete,canResolve];

    if (isParticipantView || permissions.every((perm) => !perm)) {
        return null;
    }


  return (
    <>
    <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
            <button className={className}>
                <EllipsisVerticalIcon/>
            </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className={"space-y-1 p-2"}>

            {
                canResolve && (
                    <DropdownMenuItem 
                    onSelect={() => handleResolveChange(!isResolved)}
                    className="text-sm"> 
                        <CircleCheckBig className={iconClass}/>
                        <span>Mark as {isResolved ? "unresolved" : "resolved"}</span>
                    </DropdownMenuItem>
                )
            }
            {
                canPin && (
                    <DropdownMenuItem
                    onSelect={() => handlePinChange(!isPinned)}
                    className="text-sm"> 
                        <Pin className={iconClass}/>
                        <span>{isPinned ? "Unpin" : "Pin"}</span>
                    </DropdownMenuItem>
                )
            }
            {
                canEdit && (
                    <DropdownMenuItem 
                    onSelect={toggleEditingMode}
                    className="text-sm"> 
                        <Edit className={iconClass}/>
                        <span>Edit Question</span>
                    </DropdownMenuItem>
                )
            }
            {
                canDelete && (
                    <DropdownMenuItem 
                    onSelect={() => setOpenDeleteDialog(true)}
                    className="text-sm"> 
                        <Trash className={iconClass}/>
                        <span>Delete Question</span>
                    </DropdownMenuItem>
                )
            }

        </DropdownMenuContent>
    </DropdownMenu>
    {/* dialogs */}
    <DeleteQuestionDialog
        questionId={questionId}
        open={openDeleteDialog}
        onSuccess={() => ""}
        onOpenChange={setOpenDeleteDialog}
    />
    </>
    
  )
}

export default QuestionOptionMenu
