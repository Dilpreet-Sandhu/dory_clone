"use client"
import { Question } from "@/generated/prisma"
import { updateQuestionAction } from "@/lib/actions/update-question-action"
import { voteQuestionAction } from "@/lib/actions/vote-question-action"
import { QuestionDetail } from "@/lib/prisma/validators/question-validator"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import debounce from "lodash.debounce"
import { useAction } from "next-safe-action/hooks"
import { useCallback, useEffect, useRef, useState } from "react"
import { toast } from "sonner"


export const useTogglePin = ({
    questionId,
    isPinned : initialIsPinned
} : {
    questionId : Question["id"]
    isPinned : boolean
}) => {

    const [isPinned,setIsPinned] = useState(initialIsPinned);

    const {execute,isExecuting} = useAction(updateQuestionAction,{
        onSuccess : () => console.log("pinned succesfully"),
        onError : (err) => {
            console.log(err);

            toast.error("something went wrong",{
                description : "failed to pin the question"  
            })
            setIsPinned((prev) => !prev);
        }
    })


    const togglePin = () => {
        //optimistic update
        setIsPinned(prev => !prev);

        //todo implement server action api call
        execute({questionId,isPinned : !isPinned})

    }

    return {isPinned,togglePin,isExecuting};
}

export const useToggleResolve = ({
    questionId,
    isResolved : initialIsResolved
} : {
    questionId : Question["id"]
    isResolved : boolean
}) => {

    const [isResolved,setIsResolved] = useState(initialIsResolved);

     const {execute,isExecuting} = useAction(updateQuestionAction,{
        onSuccess : () => console.log("resolved succesfully"),
        onError : (err) => {
            console.log(err);

            toast.error("something went wrong",{
                description : "failed to resolve the question"  
            })
            setIsResolved((prev) => !prev);
        }
    })

    const toggleResolved = () => {
        //optimistic update
        setIsResolved(prev => !prev);

        //todo implement server action api call
        execute({questionId,isResolved : !isResolved})

    }

    return {isResolved,toggleResolved,isExecuting};
}


export const useVote = ({
    questionId,
    upvotes,
    totalVotes : initialVotes
}: {
    questionId : Question["id"]
    upvotes : QuestionDetail["upvotes"];
    totalVotes : number
}) => {


    const {user} = useKindeBrowserClient();

    const [{isVoted,totalVotes},setClientState] = useState({
        isVoted : upvotes.some((upvote) => upvote.authorId === user?.id),
        totalVotes : initialVotes
    });

    const {execute,isExecuting} = useAction(voteQuestionAction,{

        onError : (err) => {

            console.log(err);

            toggleClientVote()

        },
        onSuccess : () => console.log("succesfully upvoted")

    })

    //to avoid stale client state
    useEffect(() => {
        setClientState((prev) => ({
            ...prev,
             isVoted : upvotes.some((upvote) => upvote.authorId === user?.id),
            totalVotes : initialVotes
        }))
    },[user,upvotes])

    const toggleClientVote = () => {

        setClientState((prev) => ({
            isVoted : !prev.isVoted,
            totalVotes : prev.isVoted ? prev.totalVotes - 1 : prev.totalVotes + 1
        }));

    };

    const performVote = useCallback(debounce(() => {
            execute({ questionId });
        }, 1000),[questionId]);
      


    const handleVote = () => {
        //optimistic update
        toggleClientVote();

        performVote();
    }


    return {isVoted,totalVotes,handleVote,isExecuting};

};

export const useUpdateQuestionBody = ({
    body : initalBody,
    questionId
} : {
    body : Question["body"];
    questionId : Question["id"]
}) => {

    const lastValidBody = useRef(initalBody);
    const [body,setBody] = useState(initalBody);

     const {execute,isExecuting} = useAction(updateQuestionAction,{
        onSuccess : ({input}) => {
            console.log("question body updated succesfully");
        },
        onError : (err) => {
            console.log(err);

            toast.error("something went wrong",{
                description : "failed to pin the question" ,
                richColors : true,
                unstyled : false,
                closeButton : true
            });

            //revert the optimistic update
            setBody(lastValidBody.current);
            
        }
    })

    const updateBody = (text : string) => {
        setBody(text);

        execute({questionId,body : text});

    }

    return {body,updateBody,isExecuting}
}