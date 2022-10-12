import styles from '@styles/Search.module.css'
import { styleTransformer as styled } from '@helpers/style-transformer'
import { SearchBannerForm } from './SearchBannerForm'

export const SearchBanner = () => (
  <div className={styled(styles['home-banner'], 'flex m-auto items-center flex-col lg:justify-end')}>
    <h3 className={styles['home-banner__title']}>Eventos | Torneos | Equipos</h3>
    <SearchBannerForm />
  </div>
)
