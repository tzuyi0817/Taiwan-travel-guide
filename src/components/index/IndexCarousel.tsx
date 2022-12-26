import { useState, useEffect } from 'react';
import GuideCarousel from '@/components/GuideCarousel';
import ajax from '@/utils/ajax';
import generateParams from '@/utils/generateParams';
import type { ScenicSpot } from '@/types/scenicSpot';

function IndexCarousel() {
  const [scenicSpot, setScenicSpot] = useState<ScenicSpot[]>([]);

  async function getScenicSpot() {
    const parameters = generateParams({
      $top: 6,
      $filter: 'Picture/PictureUrl1 ne null',
      $skip: Math.random() * 3280 | 0,
    });
    const result = await ajax.get(`/v2/Tourism/ScenicSpot?${parameters}`);

    setScenicSpot(result);
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
            const { ScenicSpotID, Picture, City, ScenicSpotName, Address } = attraction;
            return (
              <div key={ScenicSpotID} className="carousel_item">
                {Picture.PictureUrl1 
                  ? <img src={Picture.PictureUrl1} alt={Picture.PictureDescription1} className="carousel_image brightness-[0.8]" />
                  : <div className="carousel_image bg-secondary/40"><img src="/src/assets/icon/image.png" alt="" /></div>
                }
                <p className="middle text-white drop-shadow-2xl md:text-[28px]">{`${City ?? Address.slice(0, 3)} | ${ScenicSpotName}`}</p>
              </div>
            )
          })}
        </GuideCarousel>
      )
      : <></>
  )
}

export default IndexCarousel;