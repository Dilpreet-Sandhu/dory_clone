"use client"

import BeatLoader from 'react-spinners/BeatLoader'
import colors from 'tailwindcss/colors'
import { Skeleton } from './ui/skeleton'
import { cn, propsWithClassName } from '@/lib/utils/uiUtils'

export const Loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        
        <BeatLoader color={colors["blue"][600]} size={16}/>
      
    </div>
  )
}

export const AuthLoader = ({className} : propsWithClassName) => {
    return <Skeleton className={cn("bg-gray-100/50 w-32 h-10",className )}/>
}
