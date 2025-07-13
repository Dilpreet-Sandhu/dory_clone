import routes from "@/app/config/routes";
import BookMarkEventButton from "@/components/buttons/BookMarkEventButton";
import CopyEventLinkButton from "@/components/buttons/CopyEventLinkButton";
import EventTabNavigation from "@/components/layout/EventTabNavigation";
import EventAdminMenu from "@/components/menu/EventAdminMenu";
import ParticipantsToolTip from "@/components/tooltips/ParticipantsToolTip";
import { ScrollArea } from "@/components/ui/scroll-area";
import UserAvatar from "@/components/UserAvatar";
import { getEventDetails } from "@/lib/server/getEventDetails";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";


type Props = PropsWithChildren<{
    params : {
        ownerId : string;
        eventSlug : string;
    }
}>;

export const dynamic = "force-dynamic";

const EventPageLayout =async  ({children,params} : Props) => {

    const {ownerId,eventSlug} = await params;

    const event = await getEventDetails({ownerId : ownerId,slug : eventSlug});


    if (!event) {
        return notFound();
    }

    const {owner} = event;

    return (
        <div className="flex flex-col items-start h-full pt-8 px-4 lg:px-8">

            <Link href={routes.dashboard} className="text-xs underline underline-offset-2"> 
                <ArrowLeft className="w-4 h-4 mr-1 inline-block"/>
                <span>Back to Events</span>
            </Link>

            {/* top header */}
            <div className="w-full flex flex-col mt-3 lg:flex-row lg:shrink-0 lg:justify-between">

                <div>
                    <h2 className="font-bold text-2xl lg:text-3xl">
                        {event.displayName}
                    </h2>
                <div className="inline-flex items-center gap-x-2 mt-2">
                    <span className="text-xs lg:text-sm">
                        <span className="text-slate-600">Organized By </span>
                        <span className="font-semibold">{owner.displayName}</span>
                    </span>

                    <UserAvatar className="w-6 h-6" displayName={owner.displayName} color={owner.color}/>
                </div>
                </div>

                {/* participants and event action buttons */}
                <div className="flex items-baseline justify-between lg:items-center lg:mr-8 lg:self-end">
                    <ParticipantsToolTip
                        className="mr-7"
                        participantsCount={event._count.participants}
                    />
                    <div className="inline-flex items-center gap-x-2 mt-6 lg:mt-0">
                        <CopyEventLinkButton ownerId={event.ownerId} eventSlug={event.slug}/>
                        <BookMarkEventButton event={event}/>
                        <EventAdminMenu event={event}/>
                    </div>
                </div>

            </div>
            <div className="w-full flex flex-1 flex-col lg:flex-row overflow-auto gap-x-4 pt-6">

                <EventTabNavigation
                    className="rounded-t-md lg:hidden"
                    ownerId={ownerId}
                    eventSlug={eventSlug}
                />

                <div className="w-full h-full overflow-auto pb-4">
                <ScrollArea className="relative h-full bg-white px-2.5 py-4 rounded-b-lg lg:rounded-lg lg:p-6">
                    {children}
                </ScrollArea>
                </div>
            </div>
        </div>
    )

}

export default EventPageLayout;