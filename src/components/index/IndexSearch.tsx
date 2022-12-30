import { useState } from 'react';
import GuideSelect from '@/components/GuideSelect';
import { MENU_OPTIONS, MENU_PLACEHOLDER } from '@/config/menu';
import type { MenuOption } from '@/types/menu';

function IndexSearch() {
  const [selectedOption, setSelectedOption] = useState(MENU_OPTIONS[0]);

  return (
    <div className="flex flex-col items-center gap-2">
      <GuideSelect
        defaultValue={selectedOption}
        onChange={(select: MenuOption) => setSelectedOption(select)}
        options={MENU_OPTIONS}
      />
      <input type="text" className="input" placeholder={MENU_PLACEHOLDER[selectedOption.value]} />
      <button className="btn">
        <img src="/src/assets/icon/search.png" alt="" /> 搜尋
      </button>
    </div>
  )
}

export default IndexSearch;
