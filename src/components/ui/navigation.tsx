import React, { HTMLAttributes } from 'react'
import P from '../typography/p'
import Link from 'next/link'

type NavigationProps = HTMLAttributes<HTMLElement>

function Navigation({ children }: NavigationProps) {
  return (
    <div className="h-16 flex items-center px-6 shadow-sm">
      <Link href="/">&larr;</Link>
      <P className="absolute -translate-x-1/2 left-1/2 text-center truncate font-semibold">
        {children}
      </P>
    </div>
  )
}

export default Navigation
