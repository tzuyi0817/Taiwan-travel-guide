import { useState, useMemo } from 'react';
import GuideCrumbs from '@/components/GuideCrumbs';
import GuideSearch from '@/components/GuideSearch';
import GuideHotTopics from '@/components/GuideHotTopics';
import GuideSearchResult from '@/components/GuideSearchResult';

function ScenicSpot() {
  const [search, setSearch] = useState('');
  const [topics, setTopics] = useState('');
  const filter = useMemo(() => { 
    return [search, topics].filter(Boolean).join(' and ');
  }, [search, topics])

  return (
    <>
      <GuideCrumbs />
      <GuideSearch type="scenicSpot" setSearch={setSearch} />
      {filter.length 
        ? <GuideSearchResult filter={filter} type="scenicSpot" /> 
        : <GuideHotTopics type="scenicSpot" setTopics={setTopics} />
      }
    </>
  )
}

export default ScenicSpot;
