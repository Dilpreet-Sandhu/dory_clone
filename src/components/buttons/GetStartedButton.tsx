"use client"
import { cn } from '@/lib/utils/uiUtils';
import Link from 'next/link'
import React from 'react';
import { buttonVariants } from '../ui/button';
import { RegisterLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import routes from '@/app/config/routes';

const btnClasses = cn(buttonVariants(),"p-6 text-sm rounded-sm lg:p-8 lg:text-xl")

const GetStartedButton = () => {

  const {isAuthenticated,user} = useKindeBrowserClient();
  console.log(user);

  if (!isAuthenticated) {
      return <RegisterLink className={btnClasses}>Get started 👉</RegisterLink>
  }
   
  return (
    <Link className={btnClasses} href={routes.dashboard}>
        Get started 👉
    </Link>
  )
}

export default GetStartedButton
