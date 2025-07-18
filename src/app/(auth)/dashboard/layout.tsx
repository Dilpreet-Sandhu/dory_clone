import routes from "@/config/routes";
import { DesktopDashboardSideBar, MobileDashboardSidebar } from "@/components/layout/DashboardSidebar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export const dynamic = 'force-dynamic';

const Layout = async  ({children} : PropsWithChildren) => {

    const isAuthenticated = await getKindeServerSession().isAuthenticated();

    if (!isAuthenticated) {
        redirect(routes.login);
    }

    return <div className="flex flex-row h-full">
       <DesktopDashboardSideBar/>

       <div className="flex flex-col overflow-auto w-full items-start grow-1">
            <MobileDashboardSidebar/>
            {children}
       </div>
    </div>
}

export default Layout;