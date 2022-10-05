import styles from '@styles/NavBar.module.css'
import { NavBarBrandSection } from './NavBarBrandSection'
import { NavBarOption } from './NavBarOption'

export const NavBar = () => {
  const options = [
    { label: 'Home', path: '/home' },
    { label: 'Venue', path: '/venue' },
    { label: 'Suppliers', path: '/suppliers' },
    { label: 'About', path: '/about' },
    { label: 'Media', path: '/media' },
    { label: 'ContactUs', path: '/contact-us' }
  ]

  return (
    <nav>
      <div className='flex flex-wrap justify-end items-center mx-12'>
        <div className='mt-3'>
          <button className={styles['login-section__login-button']}>Login</button>
          <button className={styles['login-section__sup-button']}>Signup</button>
        </div>
      </div>
      <div className='flex flex-wrap justify-between items-center mx-12'>
        <NavBarBrandSection />
        <>
          <ul className='flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white'>
            {options.map((option, idx) => {
              return (
                <li key={`nav-bar-main-opt-${idx}`}>
                  <NavBarOption path={option.path} label={option.label} />
                </li>
              )
            })}
            <li>
              <div className='rounded-full bg-slate-400 w-7 h-7 flex items-center justify-center'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
            </li>
          </ul>
        </>
      </div>
    </nav>
  )
}
