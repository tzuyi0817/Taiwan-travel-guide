import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/hooks/useRedux';
import ajax from '@/utils/ajax';
import generateParams from '@/utils/generateParams';
import { MENU_MORE, MENU_ID, MENU_NAME } from '@/config/menu';
import type { MenuKey } from '@/types/menu';
import type { ScenicSpot } from '@/types/scenicSpot';
import type { Restaurant } from '@/types/restaurant';
import type { Activity } from '@/types/activity';

function InformationMore() {
  const [mores, setMores] = useState<Array<ScenicSpot & Restaurant & Activity>>([]);
  const guide = useAppSelector(({ guide }) => guide.currentSelect);
  const location = useLocation();
  const type = location.pathname.split('/')[1] as MenuKey;
  const id = MENU_ID[type];
  const name = MENU_NAME[type];

  useEffect(() => {
    async function getMore() {
      const filter = [
        'Picture/PictureUrl1 ne null', 
        guide?.City ? `city eq '${guide.City}'` : '', 
        `${name} ne '${guide?.[name]}'`,
      ].filter(Boolean);
      const params = generateParams({
        $top: 4,
        $filter: filter.join(' and '),
      });
      const searchType = type.replace(/^./, type[0].toUpperCase());
      const result = await ajax.get(`/v2/Tourism/${searchType}?${params}`);
  
      setMores(result);
    }

    getMore();
  }, []);

  return (
    <>
      <div className="caption">
        <h2>還有這些不能錯過</h2>
        <Link to={`/${type}`}>{MENU_MORE[type]}</Link>
      </div>

      <ul className="exhibit">
        {mores.map(item => {
          const { Picture , City } = item;

          return (
            <li key={item[id]} className="picture_scale">
              <div className="picture">
                {Picture.PictureUrl1
                  ? <img src={Picture.PictureUrl1} alt={Picture.PictureDescription1} />
                  : <img src="/src/assets/icon/image.png" alt="" className="icon" />
                }
              </div>
              <p className="name">{item[name]}</p>
              <div className="city"><img src="/src/assets/icon/location-base.png" alt="" />{City ?? '未提供城市'}</div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default InformationMore;
