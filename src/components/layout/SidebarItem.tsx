import { cn, propsWithClassName } from "@/lib/utils/uiUtils";
import { ComponentProps, ComponentType, PropsWithChildren } from "react"


type Props = PropsWithChildren<{
    isActive ?: boolean;
    text ?: string;
    icon : ComponentType<propsWithClassName>
}>

const SidebarItem = ({isActive,text,icon : Icon,children} : Props) => {
  return (
    <div role="item" className={cn("p-4 cursor-pointer rounded-lg flex  text-sm gap-x-2 items-center text-gray-500 transition-colors  duration-150 select-none",isActive ? "bg-primary/10 text-primary font-semibold" : "hover:bg-primary/10")}>
      <Icon className="w-4 h-4 "/> 
      <span>{text}</span>
      {children}
    </div>
  )
}

export default SidebarItem
