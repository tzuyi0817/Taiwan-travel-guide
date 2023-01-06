import { useState } from 'react';
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
  const isActivity = type === 'activity';

  function search() {
    const name = keyword ? `contains(${MENU_NAME[type]}, '${keyword}')`: '';
    const date = startDate.toISOString().slice(0, 10);
    const time = isActivity ? `date(StartTime) le ${date} and date(EndTime) ge ${date}` : '';
    const city = selectedOption.value ? `City eq '${selectedOption.value}'` : '';
    const filter = [name, time, city].filter(Boolean).join(' and ');

    setSearch(filter);
  }

  return (
    <div className="flex flex-col items-center">
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
        className="input mt-2"
        placeholder={MENU_PLACEHOLDER[type]}
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button className="btn mt-2" onClick={search}>
        <img src="/src/assets/icon/search.png" alt="" /> 搜尋
      </button>
    </div>
  )
}

export default GuideSearch;
