import IndexTitle from '@/components/index/IndexTitle';
import IndexSearch from '@/components/index/IndexSearch';
import IndexCarousel from '@/components/index/IndexCarousel';
import IndexActivity from '@/components/index/IndexActivity';
import IndexScenicSpot from '@/components/index/IndexScenicSpot';
import IndexRestaurant from '@/components/index/IndexRestaurant';

function Index() {
  return (
    <>
      <div className="md:flex md:justify-evenly">
        <IndexTitle />
        <IndexSearch />
      </div>
      <IndexCarousel />
      <IndexActivity />
      <IndexScenicSpot />
      <IndexRestaurant />
    </>
  )
}

export default Index;