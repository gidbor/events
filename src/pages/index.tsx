import { PageLayout, SearchBanner, NavBar } from '@components/shared'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <PageLayout title='Events - Home'>
      <>
        <NavBar />
        <SearchBanner />
      </>
    </PageLayout>
  )
}

export default Home
