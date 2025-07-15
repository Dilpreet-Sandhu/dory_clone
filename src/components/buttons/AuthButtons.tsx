import { getUser } from '@/lib/server/getUser';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'
import {Bell} from 'lucide-react';
import Link from 'next/link';
import routes from '@/config/routes';
import UserAvatar from '../UserAvatar';
import { cn, propsWithClassName } from '@/lib/utils/uiUtils';
import PublicAuthButtons from './PublicAuthButtons';

const AuthButtons = async ({className} : propsWithClassName) => {

    const kindeUser = await getKindeServerSession().getUser();

    const user = kindeUser && (await getUser(kindeUser.id));

  

  return user ? (
    <div className={cn("inline-flex gap-x-7 items-center",className)}>

      <Bell className="w-5 h-5"/>
      
      <Link href={routes.dashboard} prefetch={false}>
        <UserAvatar displayName={user.displayName} color={user.color} className="ring-2 ring-white"/>
      </Link>
      
    </div>
  ) : <PublicAuthButtons className={className}/>
}

export default AuthButtons
