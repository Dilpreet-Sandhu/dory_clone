"use client";

import routes from "@/config/routes";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { usePathname, useRouter } from "next/navigation";
import SidebarItem from "./SidebarItem";
import { BarChartIcon, MessageCircleCode } from "lucide-react";
import EventViewModeSelect from "../selects/EventViewModeSelect";
import { useIsParticipantView } from "@/hooks/useIsparticipantView";

type Props = {
  eventSlug: string;
  ownerId: string;
  questionsCount: number;
  pollsCount: number;
};

const EventFloatingNavigation = ({
  eventSlug,
  ownerId,
  questionsCount,
  pollsCount,
}: Props) => {
  const { user } = useKindeBrowserClient();
  const router = useRouter();

  const questionRoute = routes.event({ ownerId, slug: eventSlug });
  const pollsRoute = routes.eventPolls({ownerId,slug : eventSlug});
  const isAdmin = user?.id === ownerId;
  const isParticipantView = useIsParticipantView();

  const pathname = usePathname();

  return (
    <div className="w-[220px] drop-shadow-xl h-full border rounded-xl bg-white ">
      <div className="flex flex-col h-full pt-8 px-3 pb-3">
        <nav className="flex flex-col gap-3 h-full">
          <button onClick={() => router.replace(questionRoute)}>
            <SidebarItem
              isActive={pathname === questionRoute}
              text={"Q&A"}
              icon={MessageCircleCode}
            >
              <span className="ml-auto">{questionsCount}</span>
            </SidebarItem>
          </button>

          <button onClick={() => router.replace(pollsRoute)}> 
            <SidebarItem
              isActive={pathname === pollsRoute}
              text={"Polls"}
              icon={BarChartIcon}
            >
              <span className="ml-auto">{pollsCount}</span>
            </SidebarItem>
          </button>
        </nav>

        {
            isAdmin && (
                <div className="mt-auto space-y-4 w-full">
                    <EventViewModeSelect key={String(isParticipantView)}/>
                </div>
            )
        }

      </div>
    </div>
  );
};

export default EventFloatingNavigation;
