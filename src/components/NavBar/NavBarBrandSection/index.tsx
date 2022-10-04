import styles from '@styles/NavBar.module.css'
import Link from 'next/link'

export const NavBarBrandSection = (props: any) => {
  return (
    <Link href=''>
      <a className='flex items-center'>
        <span className={styles['nav-bar-section__company-name']}>Company Name</span>
      </a>
    </Link>
  )
}
