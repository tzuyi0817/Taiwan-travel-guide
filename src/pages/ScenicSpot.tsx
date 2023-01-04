import { useState } from 'react';
import GuideCrumbs from '@/components/GuideCrumbs';
import GuideSearch from '@/components/GuideSearch';
import GuideHotTopics from '@/components/GuideHotTopics';
import GuideSearchResult from '@/components/GuideSearchResult';

function ScenicSpot() {
  const [search, setSearch] = useState('');

  return (
    <>
      <GuideCrumbs />
      <GuideSearch type="scenicSpot" setSearch={setSearch} />
      {search.length 
        ? <GuideSearchResult search={search} type="scenicSpot" /> 
        : <GuideHotTopics type="scenicSpot" />
      }
    </>
  )
}

export default ScenicSpot;
