"use client"

import { cn, propsWithClassName } from '@/lib/utils/uiUtils'
import Image from 'next/image';
import React, { ReactNode } from 'react'


type Props = propsWithClassName<{
    width ?: number;
    height ?: number;
    children ?: ReactNode
}>

const NotFound = ({width = 180,height = 180,children,className} : Props) => {
  return (
    <div className={cn("flex flex-col items-center",className)}>
      <Image src="/empty.svg" alt="empty" width={width} height={height}/>
      {children}
    </div>
  )
}


export const NoContent = ({width = 180,height = 180,children,className} : Props) => {
  return (
    <div className={cn("flex flex-col items-center",className)}>
      <Image src="/create.svg" alt="empty" width={width} height={height}/>
      {children}
    </div>
  )
}

export default NotFound
