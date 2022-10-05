import React from 'react'
import { TChildren } from '@helpers/types'
import Link from 'next/link'

type Props = {
  href: string
  className: string
} & TChildren

export const NavLink: React.FC<Props> = ({ href, className, children }) => (
  <Link href={href} passHref>
    <a href='replace' className={className}>
      {children}
    </a>
  </Link>
)
