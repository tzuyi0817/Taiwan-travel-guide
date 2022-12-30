import { useState } from 'react';
import GuideSelect from '@/components/GuideSelect';
import GuideDatePicker from '@/components/GuideDatePicker';
import { CITY_OPTIONS } from '@/config/city';
import { MENU_PLACEHOLDER } from '@/config/menu';
import type { MenuKey } from '@/types/menu';

interface Props {
  type: MenuKey;
}

function GuideSearch({ type }: Props) {
  const [selectedOption, setSelectedOption] = useState(CITY_OPTIONS[0]);

  return (
    <div className="flex flex-col items-center gap-2">
      <GuideSelect
        defaultValue={selectedOption}
        onChange={(select: { value: string; label: string; }) => setSelectedOption(select)}
        options={CITY_OPTIONS}
      />
      <GuideDatePicker />
      <input type="text" className="input" placeholder={MENU_PLACEHOLDER[type]} />
      <button className="btn">
        <img src="/src/assets/icon/search.png" alt="" /> 搜尋
      </button>
    </div>
  )
}

export default GuideSearch;
