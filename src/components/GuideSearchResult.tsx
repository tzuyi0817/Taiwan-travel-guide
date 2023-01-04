import { useState, useEffect, useRef } from 'react';
import ajax from '@/utils/ajax';
import generateParams from '@/utils/generateParams';
import { MENU_ID, MENU_NAME } from '@/config/menu';
import LazyImage from '@/components/common/LazyImage';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { onImageInView } from '@/utils/images';
import type { MenuKey } from '@/types/menu';
import type { ScenicSpot } from '@/types/scenicSpot';
import type { Restaurant } from '@/types/restaurant';
import type { Activity } from '@/types/activity';

interface Props {
  search: string;
  type: MenuKey;
}

function GuideSearchResult({ search, type }: Props) {
  const [searchList, setSearchList] = useState<Array<ScenicSpot & Restaurant & Activity>>([]);
  const isMounted = useRef(false);
  const observer = useIntersectionObserver(onImageInView, {});
  const id = MENU_ID[type];
  const name = MENU_NAME[type];

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    async function getSearchList() {
      const params = generateParams({
        $filter: search,
      });
      const searchType = type.replace(/^./, type[0].toUpperCase());
      const result = await ajax.get(`/v2/Tourism/${searchType}?${params}`);
  
      setSearchList(result);
    }

    getSearchList();
  }, [search]);

  return (
    <div className="my-6">
      <div className="flex mb-4 items-end gap-2">
        <h2>搜尋結果</h2>
        <p className="text-sm text-[#646464]">
          共有 <span className="text-[#BEA363] leading-6">{searchList.length}</span> 筆
        </p>
      </div>
      <ul>
        {searchList.map(item => {
          const { Picture, City } = item;

          return (
            <li key={item[id]} className="picture_scale flex flex-col gap-1 mb-5">
              <div className="picture h-[160px] rounded-[20px] items-center justify-center bg-secondary/40">
                {Picture.PictureUrl1 
                  ? <LazyImage src={Picture.PictureUrl1} alt={Picture.PictureDescription1} observer={observer} />
                  : <img src="/src/assets/icon/image.png" alt="" />
                }
              </div>
              <p className="text-lg font-bold ellipsis">{item[name]}</p>
              <div className="text-[#646464] flex items-center gap-1">
                <img src="/src/assets/icon/location-base.png" alt="" />{City}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default GuideSearchResult;
