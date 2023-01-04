import { useEffect, useState } from 'react';

function useIntersectionObserver(
  onElementInView: IntersectionObserverCallback,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
  }: IntersectionObserverInit,
): IntersectionObserver | null {
  const [observerInstance, setObserverInstance] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(onElementInView, observerParams);

    setObserverInstance(observer)
    return () => observerInstance?.disconnect();
  }, []);

  return observerInstance;
}

export default useIntersectionObserver;
