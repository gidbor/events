import Head from 'next/head'
import { GoogleFonts } from 'next-google-fonts'
import { TPageLayout } from '@helpers/types'

export const PageLayout = ({ children, title = 'Events' }: TPageLayout) => {
  return (
    <>
      <GoogleFonts href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap' />
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='description' content='Events - the best app to create sporting events' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main>{children}</main>
    </>
  )
}
