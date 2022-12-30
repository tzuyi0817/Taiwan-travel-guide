import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Index = lazy(() => import('@/pages/Index'));
const ScenicSpot = lazy(() => import('@/pages/ScenicSpot'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const ROUTE_CONFIG = [
  { path: '/', element: <Index /> },
  { path: '/scenicSpot', element: <ScenicSpot /> },
  { path: '*', element: <NotFound /> },
];

function Routes() {
  const elements = useRoutes(ROUTE_CONFIG);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {elements}
    </Suspense>
  )
}

export default Routes;
