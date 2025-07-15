'use client'
import { eventPageQueryParams } from "@/config/queryparams";
import { useSearchParams } from "next/navigation"


export const useIsParticipantView = () => {
    const params = useSearchParams();

    return params.get(eventPageQueryParams.asParticipant) === "true";
}