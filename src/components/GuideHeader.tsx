import { useState } from 'react';
import tw from 'tailwind-styled-components';

const Header = tw.header`
  fixed
  top-0
  right-0
  h-16
  w-full
  flex
  px-8
  items-center
  bg-white
  transition-all
  md:px-12
  md:h-20
`;

const HeaderBtn = tw.button`
  absolute
  top-2
  right-2
  w-[50px]
  h-[50px]
  rounded-xl
  bg-primary
  flex
  justify-center
  items-center
  md:hidden
`;

const Menu = tw.ul`absolute top-16 right-0 text-lg w-[275px] bg-white rounded-bl-[30px] md:relative md:flex md:top-0 md:gap-5 md:w-fit`;
const MenuItem = tw.p`
  text-center
  mx-2
  py-6
  border-b-[1px]
  cursor-pointer
  transition-all
  md:hover:text-secondary
  md:py-1
  md:border-transparent
  md:border-b-2
  md:hover:border-[#E0DA48]
`;

function GuideHeader() {
  const [isOpenMenu, toggleMenu] = useState(false);

  return (
    <>
      {isOpenMenu && <div className="mask md:hidden"></div>}
      <Header className={ `${isOpenMenu ? 'w-[275px] justify-start' : 'w-full justify-center' } md:w-full justify-between` }>
        <img
          src="" 
          alt="" 
          className="content-[url(/src/assets/icon/Logo-mobile.png)] md:content-[url(/src/assets/icon/Logo-desktop.png)]"
        />
        <HeaderBtn onClick={() => toggleMenu(!isOpenMenu)}>
          <img src={isOpenMenu ? '/src/assets/icon/close.png' : '/src/assets/icon/menu.png'} alt="" />
        </HeaderBtn>

        <Menu className={isOpenMenu ? 'block' : 'hidden md:relative' }>
          <li><MenuItem>探索景點</MenuItem></li>
          <li><MenuItem>節慶活動</MenuItem></li>
          <li><MenuItem>品嚐美食</MenuItem></li>
        </Menu>
      </Header>
    </>
  )
}

export default GuideHeader;