'use client'

import { cn, propsWithClassName } from "@/lib/utils/uiUtils"
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import routes from "@/app/config/routes";

type Props = propsWithClassName<{
    ownerId : string;
    eventSlug : string;
}>

const EventTabNavigation = ({ownerId,eventSlug,className} : Props) => {

    const pathname = usePathname();
    const router = useRouter();

    const isQATab = pathname === routes.event({ownerId,slug : eventSlug});
    const isPollsTab = pathname === routes.eventPolls({ownerId,slug : eventSlug});

  return (
    <div className={cn("flex",className)}>

        {
            ["Q&A","Polls"].map((tab) => (
                <Button
                 key={tab}
                  variant="outline" 
                  className={cn("basis-1/2 bg-gray-100 rounded-t-lg rounded-b-none",
                  {"bg-white" : tab == 'Q&A' ? isQATab : isPollsTab})}
                  onClick={() => {
                    router.replace(
                        tab == 'Q&A' ? routes.event({ownerId,slug : eventSlug}) : routes.eventPolls({ownerId,slug : eventSlug})
                    )
                  }}
                  >
                    {tab}
                </Button>
            ))
        }
      
    </div>
  )
}

export default EventTabNavigation
