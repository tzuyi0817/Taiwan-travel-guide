import { useLocation } from 'react-router-dom';
import { useAppSelector } from '@/hooks/useRedux';
import { MENU_NAME } from '@/config/menu';
import type { MenuKey } from '@/types/menu';

function InformationDescription() {
  const guide = useAppSelector(({ guide }) => guide.currentSelect);
  const location = useLocation();
  const type = location.pathname.split('/')[1] as MenuKey;
  const classes = [guide?.Class, guide?.Class1, guide?.Class2, guide?.Class3].filter(Boolean);

  return (
    <>
      <h2 className="mb-2 md:mb-4">{guide?.[MENU_NAME[type]]}</h2>
      <ul className="flex gap-1 mb-4 md:gap-2 md:mb-8">
        {classes.map(tag => <li className="badge" key={tag}># {tag}</li>)}
      </ul>
      <p className="text-lg font-bold mb-2 md:text-xl md:mb-3">活動介紹：</p>
      <section className="mb-7 md:text-lg md:mb-16">{guide?.DescriptionDetail ?? guide?.Description}</section>
    </>
  )
}

export default InformationDescription;
