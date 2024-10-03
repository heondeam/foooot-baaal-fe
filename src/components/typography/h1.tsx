import { cn } from '@/lib/utils'
import React, { Children, HTMLAttributes } from 'react'

type HeadingProps = HTMLAttributes<HTMLHeadingElement>

function H1({ children, className }: HeadingProps) {
  return <h1 className={cn('text-4xl')}>{children}</h1>
}

export default H1
