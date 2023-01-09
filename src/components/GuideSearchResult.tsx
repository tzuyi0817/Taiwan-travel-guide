import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/useRedux';
import { guideActions } from '@/store/guide';
import ajax from '@/utils/ajax';
import generateParams from '@/utils/generateParams';
import { MENU_ID, MENU_NAME } from '@/config/menu';
import LazyImage from '@/components/common/LazyImage';
import Loading from '@/components/common/Loading';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { onImageInView } from '@/utils/images';
import type { MenuKey } from '@/types/menu';
import type { ScenicSpot } from '@/types/scenicSpot';
import type { Restaurant } from '@/types/restaurant';
import type { Activity } from '@/types/activity';

interface Props {
  filter: string;
  type: MenuKey;
}

function GuideSearchResult({ filter, type }: Props) {
  const [searchList, setSearchList] = useState<Array<ScenicSpot & Restaurant & Activity>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef(false);
  const observer = useIntersectionObserver(onImageInView, {});
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const id = MENU_ID[type];
  const name = MENU_NAME[type];

  function goDetailPage(item: ScenicSpot & Restaurant & Activity) {
    dispatch(guideActions.updateGuide(item));
    navigate(`/${type}/${item[name]}`);
  }

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    async function getSearchList() {
      setIsLoading(true);
      const params = generateParams({
        $filter: filter,
      });
      const searchType = type.replace(/^./, type[0].toUpperCase());
      const result = await ajax.get(`/v2/Tourism/${searchType}?${params}`);
  
      setSearchList(result);
      setIsLoading(false);
    }

    getSearchList();
  }, [filter]);

  return (
    <div className="my-6">
      <div className="flex mb-4 items-end gap-2">
        <h2>搜尋結果</h2>
        <p className="text-sm text-[#646464]">
          共有 <span className="text-[#BEA363] leading-6">{searchList.length}</span> 筆
        </p>
      </div>
      <ul>
        {isLoading 
          ? <Loading />
          : searchList.length
            ? searchList.map(item => {
              const { Picture, City } = item;
  
              return (
                <li key={item[id]} className="picture_scale flex flex-col gap-1 mb-5" onClick={() => goDetailPage(item)}>
                  <div className="picture h-[160px] rounded-[20px] flex items-center justify-center bg-secondary/40">
                    {Picture.PictureUrl1 
                      ? <LazyImage src={Picture.PictureUrl1} alt={Picture.PictureDescription1} observer={observer} />
                      : <img src="/src/assets/icon/image.png" alt="" className="icon" />
                    }
                  </div>
                  <p className="text-lg font-bold ellipsis">{item[name]}</p>
                  <div className="text-[#646464] flex items-center gap-1">
                    <img src="/src/assets/icon/location-base.png" alt="" />{City ?? '未提供城市'}
                  </div>
                </li>
              )
            })
            : <li className="flex flex-col justify-center items-center mt-16">
                <img src="/src/assets/icon/nofound.png" alt="" className="mb-4" />
                <p className="text-secondary text-xl font-bold mb-1">目前查無資料</p>
                <p className="text-secondary text-xl font-bold">請重新搜尋</p>
              </li>
        }
      </ul>
    </div>
  )
}

export default GuideSearchResult;
