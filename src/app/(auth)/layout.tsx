import Navbar from "@/components/layout/Navbar";
import { PropsWithChildren } from "react";

export const dynamic = "force-dynamic";

const AuthLayout = ({children} : PropsWithChildren) => {

    return <>
    <Navbar/>
    <main className="calcHeight ">{children}</main>
    </>

    
}

export default AuthLayout;