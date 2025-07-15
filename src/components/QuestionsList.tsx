import { Event } from "@/generated/prisma"
import { QuestionDetail } from "@/lib/prisma/validators/question-validator"
import { QuestionOrderBy } from "@/lib/utils/question-utils"
import { cn, propsWithClassName } from "@/lib/utils/uiUtils"
import { NoContent } from "./NotFound"
import Question from "./Question"


type Props = propsWithClassName<{
    initialQuestions : QuestionDetail[],
    ownerId : Event["ownerId"],
    eventSlug : Event["slug"],
    orderBy : QuestionOrderBy,
    questionId ?: string
}>
export const OpenQuestionsList = ({
    initialQuestions,
    ownerId,
    eventSlug,
    orderBy,
    questionId,
    className
} : Props) => {

    // todo infinite scrolling

    const hasFilters = !!questionId;



    return <div className={cn("space-y-8 pb-10",className)}>

        {/* todo create question form */}

        {
            initialQuestions.length === 0 ? <NoContent><span className="tracking-tight font-light mt-3">No questions has been asked</span></NoContent>
            : initialQuestions.map((question) => (
                <Question key={question.id} question={question}/>
            ))
        }

    </div>
}

export const ResolvedQuestionsList = ({
    initialQuestions,
    ownerId,
    eventSlug,
    orderBy,
    questionId,
    className
} : Props) => {

     return <div className={cn("space-y-8 pb-10",className)}>

        {/* todo create question form */}

        {
            initialQuestions.length === 0 ? <NoContent><span className="tracking-tight font-light mt-3">No questions has been asked</span></NoContent>
            : initialQuestions.map((question) => (
                <Question key={question.id} question={question}/>
            ))
        }

    </div>
}