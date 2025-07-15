"use client"

import { cn, propsWithClassName } from "@/lib/utils/uiUtils"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs"
import { buttonVariants } from "../ui/button"
import { usePathname } from "next/navigation"
import { baseUrl } from "@/config/routes"

const PublicAuthButtons = ({className} : propsWithClassName) => {

    const pathName = usePathname();

  return (
    <div className={cn("inline-flex items-center gap-x-3",className)}>
      <LoginLink postLoginRedirectURL={`${baseUrl}${pathName}`} className={buttonVariants({variant : "secondary"})}>Sign In</LoginLink>
      <RegisterLink postLoginRedirectURL={`${baseUrl}${pathName}`} className={cn(buttonVariants({variant : "default"}),"ring-1 ring-white")}>Sign Up</RegisterLink>
    </div>
  )
}

export default PublicAuthButtons
