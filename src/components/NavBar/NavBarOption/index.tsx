import React from 'react'
import styles from '@styles/NavBar.module.css'
import { NavLink } from '../NavLink'

type Props = {
  path: string
  label: string
}

export const NavBarOption: React.FC<Props> = ({ path, label }) => {
  return (
    <NavLink href={path} className={styles['nav-bar-section__option-label']}>
      {label}
    </NavLink>
  )
}
