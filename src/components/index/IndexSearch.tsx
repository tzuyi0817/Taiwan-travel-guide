import { useState } from 'react';
import GuideSelect from '@/components/GuideSelect';

const options = [
  { value: 'scenicSpot', label: '探索景點' },
  { value: 'festival', label: '節慶活動' },
  { value: 'food', label: '品嚐美食' },
];

function IndexSearch() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="flex flex-col items-center gap-2">
      <GuideSelect
        defaultValue={selectedOption}
        onChange={(select: { value: string; label: string; }) => setSelectedOption(select)}
        options={options}
      />
      <input type="text" className="input" placeholder="你想去哪裡？請輸入關鍵字" />
      <button className="btn">
        <img src="/src/assets/icon/search.png" alt="" /> 搜尋
      </button>
    </div>
  )
}

export default IndexSearch;
