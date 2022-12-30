import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { MENU_MAP } from '@/config/menu';
import type { MenuKey } from '@/types/menu';

const Crumbs = tw.div`
  text-secondary-light
  text-xs
  mt-6
  mb-4
`;

function GuideCrumbs() {
  const { pathname } = useLocation();
  const crumbs = pathname.split('/');

  function generateUrl(index: number) {
    return crumbs.slice(0, index + 1).join('/') || '/';
  }

  function transformName(crumb: string) {
    return (MENU_MAP[crumb as MenuKey] ?? crumb) || '首頁';
  }

  return (
    <Crumbs>
      {crumbs.map((crumb, index) => {
        return (
          <Fragment key={index}>
            <Link to={generateUrl(index)} className="last:text-[#646464]">{transformName(crumb)}</Link> 
            {index !== crumbs.length - 1 && <span className="px-1">/</span>}
          </Fragment>
        )
      })}
    </Crumbs>
  )
}

export default GuideCrumbs;
