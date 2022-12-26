import IndexTitle from '@/components/index/IndexTitle';
import IndexSearch from '@/components/index/IndexSearch';
import IndexCarousel from '@/components/index/IndexCarousel';
import IndexActivity from '@/components/index/IndexActivity';

function Index() {
  return (
    <>
      <IndexTitle />
      <IndexSearch />
      <IndexCarousel />
      <IndexActivity />
    </>
  )
}

export default Index;