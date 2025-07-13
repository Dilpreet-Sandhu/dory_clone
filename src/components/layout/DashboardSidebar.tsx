"use client"
import routes from "@/app/config/routes";
import { cn, propsWithClassName } from "@/lib/utils/uiUtils";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { BookMarked, Component, LogOut, Menu, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import SidebarItem from "./SidebarItem";
import { buttonVariants } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useEffect, useState } from "react";



const sidebarItems = [
    {
        name : "Your Events",
        route : routes.dashboard,
        Icon : Component
    },
    {
        name : "BookMarked",
        route : routes.bookmarks,
        Icon : BookMarked
    },
    {
        name : "Account",
        route : routes.account,
        Icon : User
    }
] as const;


export const DesktopDashboardSideBar = ({className} : propsWithClassName) => {

    return <aside className={cn("border-r-blue-500/30 h-full shrink-0 grow-0 bg-white border-r hidden lg:block lg:basis-[250px]",className)}>
        <DashboardSidebarContent/>
    </aside>

}

const DashboardSidebarContent = () => {

    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className={"flex flex-col calcHeight py-8  px-3"}>
            <nav className="flex flex-col gap-y-2">
                {
                    sidebarItems.map((item) => {
                        const isActive = item.route === pathname;
                        return <button key={item.name} onClick={() => router.replace(item.route)}>
                            <SidebarItem icon={item.Icon} isActive={isActive} text={item.name}/>
                        </button>
})
                }
            </nav>

            <div className="mt-auto flex items-center justify-center w-full">
                <LogoutLink className={cn(buttonVariants({variant : "outline"}))}>
                    <LogOut className="w-4 h-4"/>
                    <span className="ml-2">Logout</span>
                </LogoutLink>

            </div>

        </div>
    )
}

export const MobileDashboardSidebar = () => {

    const [open,setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {

        setOpen(false);

    },[pathname]);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="pl-4 pt-4 lg:hidden">
                <div className={cn(buttonVariants({variant : "outline",size : "sm"}))}>
                    <Menu className="w-4 h-4"/>
                    <span>Menu</span>
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <DashboardSidebarContent/>
            </SheetContent>
        </Sheet>
    )
}