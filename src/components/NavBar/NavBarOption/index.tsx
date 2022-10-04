import styles from '@styles/NavBar.module.css'
export const NavBarOption = (props: any) => {
  const { path, label } = props
  return (
    <a href={path} className={styles['nav-bar-section__option-label']}>
      {label}
    </a>
  )
}
