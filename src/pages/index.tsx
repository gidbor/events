import { NavBar } from '@components/NavBar'
import { PageLayout, SearchBanner } from '@components/shared'

const Home = () => {
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
