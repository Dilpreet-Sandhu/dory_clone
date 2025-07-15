"use client"

import { RefreshCcw } from "lucide-react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

const RefreshButton = () => {

    const router = useRouter();
    
  return (
    <Button variant={"ghost"} onClick={() => router.refresh()}>
        <RefreshCcw className="w-4 h-4"/>
        <span className="lg:inline-block hidden lg:ml-2">Refresh</span>
    </Button>
  )
}

export default RefreshButton
