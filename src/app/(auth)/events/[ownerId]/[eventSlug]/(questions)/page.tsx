import { Loader } from "@/components/AuthLoader";
import ClearSearchParams from "@/components/buttons/ClearSearchParams";
import RefreshButton from "@/components/buttons/RefreshButton";
import QuestionsTabNavigation from "@/components/layout/QuestionsTabNavigation";
import { OpenQuestionsList, ResolvedQuestionsList } from "@/components/QuestionsList";
import QuestionSortSelectBy from "@/components/selects/QuestionSortSelectBy";
import { getEventOpenQuestions } from "@/lib/server/getEventOpenQuestions";
import { getEventResolvedQuestions } from "@/lib/server/getEventResolvedQuestion";
import { QuestionOrderBy } from "@/lib/utils/question-utils";
import { Suspense } from "react";

type PathParams = {
  eventSlug : string;
  ownerId : string;
}

type SearchParams = {
  sortBy : QuestionOrderBy;
  questionId : string;
  resolved : string;
}

const EventQuestionsPage = async ({
  params ,
  searchParams
} : {params : PathParams,searchParams ?: SearchParams}) => {

  const {ownerId,eventSlug} = await params;
  const sortBy = (await searchParams)?.sortBy ?? "newest";
  const showResolved = (await searchParams)?.resolved === "true"
  const questionId = (await searchParams)?.questionId;

  const hasFilters = !!questionId;

  return (
    <>
    <div className="flex justify-between">
      {/* open or resolved */}
      <QuestionsTabNavigation ownerId={ownerId} eventSlug={eventSlug}/>

      <div className="inline-flex items-center lg:gap-x-5">
        <RefreshButton/> 
        <div className="inline-flex items-center p-0.5 lg:gap-x-2">
          <span className="hidden lg:inline-block text-nowrap text-sm text-gray-500">Sort by:</span>
          <QuestionSortSelectBy sortBy={sortBy}/>
        </div>
      </div>

    </div>

    {/* filters */}
    {
      hasFilters && (
        <div className="flex mt-4 items-center gap-x-2">
          <p>You have active filters</p>
          <ClearSearchParams/>
        </div>
      )
    }

    {/* List of questions */}
    <Suspense key={Date.now()} fallback={<Loader/>}>
      <Questions showResolved={showResolved} ownerId={ownerId} eventSlug={eventSlug} questionId={questionId} orderBy={sortBy}/>
    </Suspense>

    </>
  )
}

const Questions = async ({
  showResolved,
  ownerId,
  eventSlug,
  questionId,
  orderBy
} : {
  showResolved : boolean;
  ownerId : string;
  eventSlug : string;
  questionId ?: string;
  orderBy : QuestionOrderBy
}) => {

  const fetchQuestions = showResolved ? getEventResolvedQuestions : getEventOpenQuestions ;

  const questions = await fetchQuestions({
    ownerId,
    eventSlug,
    orderBy: orderBy,
    ...(questionId ? {filters : {questionId}} : {})
  });



  return showResolved ? <ResolvedQuestionsList
    initialQuestions={questions}
    ownerId={ownerId}
    eventSlug={eventSlug}
    orderBy={orderBy}
    questionId={questionId}
    className={"mt-5"}
  /> : <OpenQuestionsList
  initialQuestions={questions}
    ownerId={ownerId}
    eventSlug={eventSlug}
    orderBy={orderBy}
    questionId={questionId}
    className={"mt-5"}
    />

}


export default EventQuestionsPage
