import { useRoutes } from 'react-router-dom';

const Index = lazy(() => import('@/pages/Index'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const ROUTE_CONFIG = [
  { path: '/', element: <Index /> },
  { path: '*', element: <NotFound /> },
];

function routes() {
  const elements = useRoutes(ROUTE_CONFIG);

  return elements;
}

export default routes;
