import { User } from "@/generated/prisma"
import { propsWithClassName } from "@/lib/utils/uiUtils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import UserAvatar from "../UserAvatar"
import { Avatar, AvatarFallback } from "../ui/avatar"


type Props = propsWithClassName<{
    voters : Pick<User,"displayName" | "color">[],
    pollTotalVotes : number
}>

export const PollVoterToolTip = ({
    className,
    voters,
    pollTotalVotes
} : Props) => {

    const votersToDisplay = voters.slice(0,5);

    return <>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className={className}>
                    <div className="flex -space-x-4">
                        {
                            votersToDisplay.map((voter) => (
                                <UserAvatar
                                    key={voter.displayName}
                                    displayName={voter.displayName}
                                    color={voter.color}
                                    className="w-8 h-8 ring-2 ring-white"
                                />
                            ))

                            
                        } 
                        {
                            voters.length > 5 && (
                                <Avatar className="w-8 h-8 ring-2 ring-white">
                                    <AvatarFallback className="text-black bg-gray-200 text-sm ">
                                        +{voters.length - 5}
                                    </AvatarFallback>
                                </Avatar>
                            )
                        }
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                   <p>{pollTotalVotes} people have voted this poll</p> 
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </>
}