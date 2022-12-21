import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Props {
  onClickItem?: ((index: number, item: React.ReactNode) => void) | undefined;
  children: React.ReactChild[] | undefined;
  className: string;
}

function GuideCarousel({ onClickItem, children, className }: Props) {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      showStatus={false}
      onClickItem={onClickItem}
      className={`carousel ${className}`}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button type="button" onClick={onClickHandler} title={label}>〈</button>
        )
      }
    >
      {children}
    </Carousel>
  )
}

export default GuideCarousel;
