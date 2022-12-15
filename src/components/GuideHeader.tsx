import tw from 'tailwind-styled-components';
import { createImageSrc } from '@/utils/images';

const Header = tw.header`
  fixed
  top-0
  left-0
  h-16
  w-full
  flex
  justify-center
  items-center
  bg-white
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
`;

function GuideHeader() {
  return (
    <Header>
      <img src={createImageSrc('icon/Logo-mobile.png')} alt="" />
      <HeaderBtn>
        <img src="/src/assets/icon/Vector.png" alt="" />
      </HeaderBtn>
    </Header>
  )
}

export default GuideHeader;