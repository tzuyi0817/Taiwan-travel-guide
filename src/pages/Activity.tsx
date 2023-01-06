import { useState, useMemo } from 'react';
import GuideCrumbs from '@/components/GuideCrumbs';
import GuideSearch from '@/components/GuideSearch';
import GuideHotTopics from '@/components/GuideHotTopics';
import GuideSearchResult from '@/components/GuideSearchResult';

function Activity() {
  const [search, setSearch] = useState('');
  const [topics, setTopics] = useState('');
  const filter = useMemo(() => { 
    return [search, topics].filter(Boolean).join(' and ');
  }, [search, topics]);

  function clearFilter() {
    setSearch('');
    setTopics('');
  }

  return (
    <>
      <GuideCrumbs onCrumbs={clearFilter} />
      <GuideSearch type="activity" setSearch={setSearch} />
      {filter.length 
        ? <GuideSearchResult filter={filter} type="activity" /> 
        : <GuideHotTopics type="activity" setTopics={setTopics} />
      }
    </>
  )
}

export default Activity;
