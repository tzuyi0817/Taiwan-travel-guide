import GuideCrumbs from '@/components/GuideCrumbs';
import GuideSearch from '@/components/GuideSearch';
import GuideHotTopics from '@/components/GuideHotTopics';

function ScenicSpot() {
  return (
    <>
      <GuideCrumbs />
      <GuideSearch type="scenicSpot" />
      <GuideHotTopics type="scenicSpot" />
    </>
  )
}

export default ScenicSpot;
