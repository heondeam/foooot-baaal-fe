import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>

function P({ children, className }: ParagraphProps) {
  return <p className={cn('text-lg font-light', className)}>{children}</p>
}

export default P
