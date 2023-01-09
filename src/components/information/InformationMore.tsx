import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/hooks/useRedux';
import { guideActions } from '@/store/guide';
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
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const moreRef = useRef<HTMLUListElement | null>(null);
  const type = pathname.split('/')[1] as MenuKey;
  const id = MENU_ID[type];
  const name = MENU_NAME[type];

  function goDetailPage(item: ScenicSpot & Restaurant & Activity) {
    dispatch(guideActions.updateGuide(item));
    navigate(`/${type}/${item[name]}`);
  }

  useEffect(() => {
    async function getMore() {
      const filter = [
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
      moreRef?.current?.scrollTo({ left: 0 });
    }

    getMore();
  }, [pathname]);

  return (
    <>
      <div className="caption">
        <h2>還有這些不能錯過</h2>
        <Link to={`/${type}`}>{MENU_MORE[type]}</Link>
      </div>

      <ul className="exhibit" ref={moreRef}>
        {mores.map(item => {
          const { Picture , City } = item;

          return (
            <li key={item[id]} className="picture_scale" onClick={() => goDetailPage(item)}>
              <div className="picture flex items-center justify-center bg-secondary/40">
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
