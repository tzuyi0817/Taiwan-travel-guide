import { useEffect, useRef } from 'react';

interface Props {
  observer: IntersectionObserver | null;
  src?: string;
  alt?: string;
}

function LazyImage ({ observer, src, alt }: Props) {
  const imageRef = useRef(null);

  useEffect(() => {
    const { current } = imageRef;
    
    current && observer?.observe(current); 

    return () => {
      current && observer?.unobserve(current);
    }
  }, [observer]);

  return (
    <img ref={imageRef} data-src={src} alt={alt} />
  )
}

export default LazyImage;