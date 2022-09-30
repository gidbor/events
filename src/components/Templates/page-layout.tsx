import Head from 'next/head';
import Link from 'next/link';

import { TPageLayout } from '@helpers/types';
import styles from './styles/layout.module.css';

const PageLayout = ({ children, title = 'Events' }: TPageLayout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name='description' content='Events - the best app to create sporting events' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.container}>
        {/* TODO sacar en un componente aparte */}
        <div>
          <div>
            <div>Usuario</div>
            <Link href='/'>LOGIN</Link>
            <Link href='/'>SIGNUP</Link>
          </div>
          <div>
            <div>Company name</div>
            <div>
              <nav>
                <ul>
                  <li>Home</li>
                  <li>Venue</li>
                  <li>Supplies</li>
                  <li>About</li>
                  <li>Media</li>
                  <li>Contact Us</li>
                </ul>
              </nav>
              <div>(🔎)</div>
            </div>
          </div>
        </div>
        {/* Fin TODO */}
      </header>
      <main>{children}</main>
    </>
  )
}

export default PageLayout;
