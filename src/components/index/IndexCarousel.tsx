import { useState, useEffect } from 'react';
import GuideCarousel from '@/components/GuideCarousel';
import ajax from '@/utils/ajax';
import type { ScenicSpot } from '@/types/scenicSpot';

function IndexCarousel() {
  const [scenicSpot, setScenicSpot] = useState<ScenicSpot[]>([]);

  async function getScenicSpot() {
    const randomSkip = Math.random() * 5000 | 0;
    const result = await ajax.get(`/v2/Tourism/ScenicSpot?$top=6&$skip=${randomSkip}&$format=JSON`);

    setScenicSpot(result);
  }

  function goScenicSpot() {

  }

  useEffect(() => { 
    getScenicSpot();
  }, []);

  return (
    <GuideCarousel onClickItem={goScenicSpot} className="my-6">
      {scenicSpot.map(attraction => {
        const { ScenicSpotID, Picture, City, ScenicSpotName, Address } = attraction;
        return (
          <div key={ScenicSpotID} className="relative">
            {Picture.PictureUrl1 
              ? <img src={Picture.PictureUrl1} alt={Picture.PictureDescription1} />
              : <div className="bg-secondary/40"></div>
            }
            <span className="middle text-white">{`${City ?? Address.slice(0, 3)} | ${ScenicSpotName}`}</span>
          </div>
        )
      })}
    </GuideCarousel>
  )
}

export default IndexCarousel;