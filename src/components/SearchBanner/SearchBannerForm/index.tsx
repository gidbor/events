import { useState } from 'react'
import styles from '@styles/Search.module.css'
import { styleTransformer as styled } from '@helpers/style-transformer'

export const SearchBannerForm = () => {
  const [search, setSearch] = useState({ category: '', location: '' })

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearch({ ...search, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('OK ', search)
  }

  const isDisabled = !Boolean(search.category && search.location)
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={styled(
        styles['home-banner__search'],
        'flex sm:flex-col sm:gap-2 md:gap-2 md:flex-col lg:flex-row lg:justify-between items-center'
      )}
    >
      <select onChange={(e) => handleChange(e)} name='category' className={styles['home-banner__search-input']}>
        <option value=''>Select Category</option>
      </select>
      <select onChange={(e) => handleChange(e)} name='location' className={styles['home-banner__search-input']}>
        <option value=''>Select Location</option>
      </select>
      <button disabled={isDisabled} className={styles['home-banner__search-button']}>
        Search
      </button>
    </form>
  )
}
