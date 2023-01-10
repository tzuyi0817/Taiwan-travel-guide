import { useMemo  } from 'react';
import { useAppSelector } from '@/hooks/useRedux';
import GuideCarousel from '@/components/GuideCarousel';

type PictureUrl = 'PictureUrl1' | 'PictureUrl2' | 'PictureUrl3';

function InformationCarousel() {
  const guide = useAppSelector(({ guide }) => guide.currentSelect);
  const pictures = useMemo(() => {
    if (!guide || !guide?.Picture) return [];
    const { Picture } = guide;
    const images = (Object.keys(Picture) as PictureUrl[]).filter(key => key.includes('PictureUrl'));

    return images.map(key => Picture[key]);
  }, [guide]);

  return (
    <div className="my-4 md:my-8">
      {pictures.length 
        ? <GuideCarousel showIndicators={pictures.length > 1}>
            {pictures.map(picture => {
              return (
                <div key={picture} className="carousel_item">
                  <img src={picture} alt="" className="carousel_image" />
                </div>
              )
            })}
          </GuideCarousel>
        : <div className="bg-secondary/40 flex items-center justify-center rounded-2xl w-full h-[185px] md:h-[400px]">
            <img src="/src/assets/icon/image.png" alt="" className="icon" />
          </div>
      }
    </div>
  )
}

export default InformationCarousel;
