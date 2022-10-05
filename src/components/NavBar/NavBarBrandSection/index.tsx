import styles from '@styles/NavBar.module.css'
import { NavLink } from '../NavLink'

export const NavBarBrandSection = () => {
  return (
    <NavLink href='' className='flex items-center'>
      <span className={styles['nav-bar-section__company-name']}>Company Name</span>
    </NavLink>
  )
}
