import React from 'react'
import Head from 'next/head'
import { TPageLayout } from '@helpers/types'

const PageLayout: React.FC<TPageLayout> = ({ children, title = 'Events' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='description' content='Events - the best app to create sporting events' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='shortcut icon' href='/favicon.ico' />
    </Head>
    <main>{children}</main>
  </>
)

export { PageLayout }
