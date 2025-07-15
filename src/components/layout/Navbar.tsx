

import routes from '@/config/routes'
import { Flame } from 'lucide-react'
import Link from 'next/link'
import React, { Suspense } from 'react'
import AuthButtons from '../buttons/AuthButtons'
import { AuthLoader } from '../AuthLoader'

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-primary-foreground h-16 flex items-center px-4 lg:px-8 shrink-0 grow-0">
        <Link className="inline-flex items-end gap-x-2" href={routes.home}>
            <Logo/>
            <span className="text-base tracking-wide font-bold">Oracus</span>
        </Link>
        <Suspense fallback={<AuthLoader className="ml-auto"/>}>
          <AuthButtons className="ml-auto"/>
        </Suspense>
    </header>
  )
}

const Logo = () => {
    return <Flame color="white" size={28}/>
}

export default Navbar
