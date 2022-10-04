import styles from '@styles/NavBar.module.css'

export const NavBarBrandSection = (props: any) => {
  return (
    <a className='flex items-center'>
      <span className={styles['nav-bar-section__company-name']}>Company Name</span>
    </a>
  )
}
