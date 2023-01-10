import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GuideSelect from '@/components/GuideSelect';
import GuideDatePicker from '@/components/GuideDatePicker';
import { CITY_OPTIONS } from '@/config/city';
import { MENU_PLACEHOLDER, MENU_NAME } from '@/config/menu';
import type { MenuKey } from '@/types/menu';

interface Props {
  type: MenuKey;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function GuideSearch({ type, setSearch }: Props) {
  const [selectedOption, setSelectedOption] = useState(CITY_OPTIONS[0]);
  const [startDate, setStartDate] = useState(new Date());
  const [keyword, setKeyword] = useState('');
  const { search: query } = useLocation();
  const isActivity = type === 'activity';

  function search(query: string) {
    const name = query ? `contains(${MENU_NAME[type]}, '${query}')`: '';
    const date = startDate.toISOString().slice(0, 10);
    const time = isActivity ? `date(StartTime) le ${date} and date(EndTime) ge ${date}` : '';
    const city = selectedOption.value ? `City eq '${selectedOption.value}'` : '';
    const filter = [name, time, city].filter(Boolean).join(' and ');

    setSearch(filter);
  }

  useEffect(() => {
    if (!query) return;
    const searchQuery = decodeURIComponent(query).replace('?', '');

    setKeyword(searchQuery);
    search(searchQuery);
  }, []);

  return (
    <div className="flex flex-col items-center md:flex-row md:mt-10 md:mb-16">
      <GuideSelect
        defaultValue={selectedOption}
        onChange={(select: { value: string; label: string; }) => setSelectedOption(select)}
        options={CITY_OPTIONS}
      />
      {isActivity && <GuideDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />}
      <input
        type="text"
        className="input mt-2 md:mt-0 md:grow md:max-w-none md:mx-4"
        placeholder={MENU_PLACEHOLDER[type]}
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button className="btn mt-2 md:mt-0" onClick={() => search(keyword)}>
        <img src="/src/assets/icon/search.png" alt="" /> 搜尋
      </button>
    </div>
  )
}

export default GuideSearch;
