import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GuideSelect from '@/components/GuideSelect';
import { MENU_OPTIONS, MENU_PLACEHOLDER } from '@/config/menu';
import type { MenuOption } from '@/types/menu';

function IndexSearch() {
  const [selectedOption, setSelectedOption] = useState(MENU_OPTIONS[0]);
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  function search() {
    navigate(`/${selectedOption.value}?${keyword}`);
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <GuideSelect
        defaultValue={selectedOption}
        onChange={(select: MenuOption) => setSelectedOption(select)}
        options={MENU_OPTIONS}
      />
      <input
        type="text"
        className="input"
        placeholder={MENU_PLACEHOLDER[selectedOption.value]}
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button className="btn" onClick={search}>
        <img src="/src/assets/icon/search.png" alt="" /> 搜尋
      </button>
    </div>
  )
}

export default IndexSearch;
