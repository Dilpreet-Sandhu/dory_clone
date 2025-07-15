import { cn } from "@/lib/utils/uiUtils";
import { PropsWithChildren } from "react"


type Props = PropsWithChildren<{
    isActive : boolean;
    onClick : () => void
}>

const NavTabButton = ({isActive,onClick,children} : Props) => {
  return (
    <button
    onClick={onClick}
     className={cn("px-4 py-2 rounded-full transition-colors duration-150 text-sm lg:text-base",{
        "bg-primary text-white" : isActive,
        "text-gray-500 hover:bg-gray-100" : !isActive
    })}>
      {children}
    </button>
  )
}

export default NavTabButton
