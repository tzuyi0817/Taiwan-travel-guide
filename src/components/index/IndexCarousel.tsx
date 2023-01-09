import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/useRedux';
import { guideActions } from '@/store/guide';
import GuideCarousel from '@/components/GuideCarousel';
import ajax from '@/utils/ajax';
import generateParams from '@/utils/generateParams';
import type { ScenicSpot } from '@/types/scenicSpot';

function IndexCarousel() {
  const [scenicSpot, setScenicSpot] = useState<ScenicSpot[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function goScenicSpot(index: number) {
    const select = scenicSpot[index];

    dispatch(guideActions.updateGuide(select));
    navigate(`/scenicSpot/${select.ScenicSpotName}`);
  }

  useEffect(() => { 
    async function getScenicSpot() {
      const sample = ['01', '10', '11', '12', '14', '15', '16', '27', '28', '32'];
      const random = Math.random() * 10 | 0;
      const params = generateParams({
        $top: 6,
        $filter: `Picture/PictureUrl1 ne null and city ne null and endswith(ScenicSpotID,'0000${sample[random]}')`,
      });
      const result = await ajax.get(`/v2/Tourism/ScenicSpot?${params}`);
  
      setScenicSpot(result);
    }
  
    getScenicSpot();
  }, []);

  return (
    scenicSpot.length 
      ? (
        <GuideCarousel onClickItem={goScenicSpot} className="my-6">
          {scenicSpot.map(attraction => {
            const { ScenicSpotID, Picture, City, ScenicSpotName } = attraction;

            return (
              <div key={ScenicSpotID} className="carousel_item">
                <img src={Picture.PictureUrl1} alt={Picture.PictureDescription1} className="carousel_image brightness-[0.8]" />
                <p className="middle text-white drop-shadow-2xl md:text-[28px]">{`${City} | ${ScenicSpotName}`}</p>
              </div>
            )
          })}
        </GuideCarousel>
      )
      : <></>
  )
}

export default IndexCarousel;