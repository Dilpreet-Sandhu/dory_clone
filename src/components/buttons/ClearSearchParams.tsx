"use client"

import { X } from "lucide-react"
import { Button } from "../ui/button"
import { usePathname, useRouter } from "next/navigation"

const ClearSearchParams = () => {

    const router = useRouter();
    const pathname = usePathname();

    const handleClear = () => {
        router.replace(`${pathname}`);
    }

  return (
    <Button variant={"outline"} size="sm" onClick={handleClear}>
        <X/>
        <span>Clear</span>
    </Button>
  )
}

export default ClearSearchParams
