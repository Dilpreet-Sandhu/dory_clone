"use client"

import { QuestionOrderBy } from "@/lib/utils/question-utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { match } from "ts-pattern"
import { quetionsPageQueryParams } from "@/config/queryparams"

type Props = {
    sortBy : QuestionOrderBy
}

const QuestionSortSelectBy = ({sortBy} : Props) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleValueChange = (value : QuestionOrderBy) => {

        const newParams = new URLSearchParams(searchParams);


        const orderBy = match(value)
            .returnType<QuestionOrderBy | undefined>()
            .with("most-popular",() => "most-popular")
            .with("newest",() => "newest")
            .with("oldest",() => "oldest")
            .otherwise(() => undefined);

        orderBy ? newParams.set(quetionsPageQueryParams.sortBy,orderBy) : newParams.delete(quetionsPageQueryParams.sortBy);

        router.replace(`${pathname}?${newParams.toString()}`)

    }


  return (
    <Select key={`${pathname}${searchParams.toString()}`} defaultValue={sortBy} onValueChange={handleValueChange}>
        <SelectTrigger>
            <SelectValue/>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value={"most-popular" as QuestionOrderBy}>Most popular</SelectItem>
            <SelectItem value={"newest" as QuestionOrderBy}>Newest</SelectItem>
            <SelectItem value={"oldest" as QuestionOrderBy}>Oldest</SelectItem>
        </SelectContent>
    </Select>
  )
}

export default QuestionSortSelectBy
