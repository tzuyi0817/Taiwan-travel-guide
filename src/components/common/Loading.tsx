import { createImageSrc } from '@/utils/images';

function Loading() {
  return (
    <div className="flex justify-center my-10 animate-pulse">
      <img src={createImageSrc('icon/Logo-desktop.png')} alt="" className="animate-bounce" />
    </div>
  )
}

export default Loading;
