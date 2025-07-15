"use client"

import { quetionsPageQueryParams } from "@/config/queryparams";
import routes from "@/config/routes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import NavTabButton from "../buttons/NavTabButton";

type QuestionTab = "open" | "resolved";

type Props = {
    eventSlug : string;
    ownerId : string;
}

const QuestionsTabNavigation =  ({ownerId,eventSlug} : Props) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams =  useSearchParams();

    const showResolved = searchParams.get(quetionsPageQueryParams.resolved) === "true";

    const eventQuestionRoute = routes.event({ownerId,slug : eventSlug});

    const activeTab : QuestionTab = pathname === eventQuestionRoute && !showResolved ? "open" : "resolved";
    
    const handleTabChange = (tab : QuestionTab) => {

        const newParams = new URLSearchParams();

        if (tab === "resolved") {
            newParams.set(quetionsPageQueryParams.resolved,"true");
        }

        router.replace(`${eventQuestionRoute}?${newParams.toString()}`);

    }

  return (
    <nav className="inline-flex">
        <NavTabButton onClick={() => handleTabChange("open")} isActive={activeTab === "open"}>
            Open
        </NavTabButton>
        <NavTabButton onClick={() => handleTabChange("resolved")} isActive={activeTab === "resolved"}>
            Resolved
        </NavTabButton>
    </nav>
  )
}

export default QuestionsTabNavigation
