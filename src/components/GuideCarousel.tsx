import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import tw from 'tailwind-styled-components';

const ArrowBtn = tw.button`
  absolute
  top-1/2
  text-white
  w-10
  h-10
  z-10
  -translate-y-1/2
  rounded-full
  border-2
  border-white
  text-sm
  hidden
  hover:bg-white/20
  md:block
`;

interface Props {
  onClickItem?: ((index: number, item: React.ReactNode) => void) | undefined;
  children: React.ReactChild[] | undefined;
  className?: string;
  showIndicators?: boolean;
}

function GuideCarousel({ onClickItem, children, className = '', showIndicators }: Props) {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      showStatus={false}
      infiniteLoop={true}
      showIndicators={showIndicators}
      onClickItem={onClickItem}
      className={`carousel ${className}`}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <ArrowBtn type="button" onClick={onClickHandler} title={label} className="left-[30px]">
            <p className="-translate-x-1">〈</p>
          </ArrowBtn>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <ArrowBtn type="button" onClick={onClickHandler} title={label} className="right-[30px]">
            <p className="translate-x-1">〉</p>
          </ArrowBtn>
        )
      }
    >
      {children}
    </Carousel>
  )
}

export default GuideCarousel;
