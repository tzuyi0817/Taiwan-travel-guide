import { useState, useEffect } from 'react';
import GuideCarousel from '@/components/GuideCarousel';
import ajax from '@/utils/ajax';
import generateParams from '@/utils/generateParams';
import type { ScenicSpot } from '@/types/scenicSpot';

function IndexCarousel() {
  const [scenicSpot, setScenicSpot] = useState<ScenicSpot[]>([]);

  async function getScenicSpot() {
    const params = generateParams({
      $filter: 'Picture/PictureUrl1 ne null and city ne null',
    });
    const result = await ajax.get(`/v2/Tourism/ScenicSpot?${params}`);
    const random = Math.random() * (result.length - 6) | 0;
    const scenicSpots = result.length <= 6 ? result : result.slice(random, random + 6);

    setScenicSpot(scenicSpots);
  }

  function goScenicSpot() {

  }

  useEffect(() => { 
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
                {Picture.PictureUrl1 
                  ? <img src={Picture.PictureUrl1} alt={Picture.PictureDescription1} className="carousel_image brightness-[0.8]" />
                  : <div className="carousel_image bg-secondary/40"><img src="/src/assets/icon/image.png" alt="" /></div>
                }
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