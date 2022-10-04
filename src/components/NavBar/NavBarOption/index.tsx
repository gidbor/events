import styles from '@styles/NavBar.module.css'
import Link from 'next/link'
export const NavBarOption = (props: any) => {
  const { path, label } = props
  return (
    <Link href={path}>
      <a className={styles['nav-bar-section__option-label']}>{label}</a>
    </Link>
  )
}
