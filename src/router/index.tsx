import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import Loading from '@/components/common/Loading';

const Index = lazy(() => import('@/pages/Index'));
const ScenicSpot = lazy(() => import('@/pages/ScenicSpot'));
const Activity = lazy(() => import('@/pages/Activity'));
const Restaurant = lazy(() => import('@/pages/Restaurant'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const ROUTE_CONFIG = [
  { path: '/', element: <Index /> },
  { path: '/scenicSpot', element: <ScenicSpot /> },
  { path: '/activity', element: <Activity /> },
  { path: '/restaurant', element: <Restaurant /> },
  { path: '*', element: <NotFound /> },
];

function Routes() {
  const elements = useRoutes(ROUTE_CONFIG);

  return (
    <Suspense fallback={<Loading />}>
      {elements}
    </Suspense>
  )
}

export default Routes;
