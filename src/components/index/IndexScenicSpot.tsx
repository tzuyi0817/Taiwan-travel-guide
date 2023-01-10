import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/useRedux';
import { guideActions } from '@/store/guide';
import ajax from '@/utils/ajax';
import generateParams from '@/utils/generateParams';
import { createImageSrc } from '@/utils/images';
import type { ScenicSpot } from '@/types/scenicSpot';

function IndexScenicSpot() {
  const [scenicSpot, setScenicSpot] = useState<ScenicSpot[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function goDetailPage(item: ScenicSpot) {
    dispatch(guideActions.updateGuide(item));
    navigate(`/scenicSpot/${item.ScenicSpotName}`);
  }

  async function getScenicSpot() {
    const random = Math.random() * 10 | 0 + 1;
    const params = generateParams({
      $top: 4,
      $filter: `Picture/PictureUrl1 ne null and city ne null and endswith(ScenicSpotID,'0000${random}')`,
    });
    const result = await ajax.get(`/v2/Tourism/ScenicSpot?${params}`);

    setScenicSpot(result);
  }

  useEffect(() => {
    getScenicSpot();
  }, []);

  return (
    <div>
      <div className="caption">
        <h2>熱門打卡景點</h2>
        <Link to="/scenicSpot">查看更多景點</Link>
      </div>

      <ul className="exhibit">
        {scenicSpot.map(item => {
          const { ScenicSpotID, Picture , City, ScenicSpotName } = item;

          return (
            <li key={ScenicSpotID} className="picture_scale" onClick={() => goDetailPage(item)}>
              <div className="picture">
                <img src={Picture.PictureUrl1} alt={Picture.PictureDescription1} />
              </div>
              <p className="name">{ScenicSpotName}</p>
              <div className="city"><img src={createImageSrc('icon/location-base.png')} alt="" />{City}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default IndexScenicSpot;
