import { TOPICS_MAP, TOPICS_CLASS } from '@/config/hotTopics';
import type { MenuKey } from '@/types/menu';

interface Props {
  type: MenuKey;
  setTopics: React.Dispatch<React.SetStateAction<string>>;
}

function GuideHotTopics({ type, setTopics }: Props) {
  const topics = TOPICS_MAP[type];

  function selectTopics(name: string) {
    const filterClass = TOPICS_CLASS[type].map(key => `${key} eq '${name}'`).join(' or ');

    setTopics(`(${filterClass})`);
  }

  return (
    <div className="my-6">
      <h2 className="mb-4 md:mb-6">熱門主題</h2>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-[30px]">
        {topics.map(({ id, name, image }) => {
          return (
            <li key={id} className="picture_scale" onClick={() => selectTopics(name)}>
              <div className="picture rounded-2xl relative md:rounded-[38px] md:h-[200px]">
                <img src={image} alt="" className="object-cover" />
                <p className="middle text-white whitespace-nowrap">{name}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default GuideHotTopics;
