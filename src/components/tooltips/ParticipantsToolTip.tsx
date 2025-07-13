import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { propsWithClassName } from "@/lib/utils/uiUtils"
import { Users } from "lucide-react"

type Props = propsWithClassName<{participantsCount : number}>

const ParticipantsToolTip = ({participantsCount,className} : Props) => {
  return (
    <TooltipProvider>
        <Tooltip>

            <TooltipTrigger>

                <div className="inline-flex gap-x-2 p-2 rounded-lg items-center text-xs cursor-pointer hover:bg-slate-200 lg:text-sm">
                    <Users className="w-5 h-5 lg:w-6 lg:h-6"/>
                    <span className="lining-nums">{participantsCount}</span>
                </div>

            </TooltipTrigger>
            <TooltipContent className="p-2 rounded-lg ">
                <p>{participantsCount} people have joined the event </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default ParticipantsToolTip
