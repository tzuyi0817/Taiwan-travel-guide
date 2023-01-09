import { useAppSelector } from '@/hooks/useRedux';
import InformationContent from '@/components/information/InformationContent';


function InformationLocation() {
  const guide = useAppSelector(({ guide }) => guide.currentSelect);

  return (
    <div className="bg-[#F9F9F9] px-[15px] py-7 w-[calc(100%+30px)] -translate-x-[15px] rounded-lg">
      <InformationContent />
      <MapIframe address={guide?.Address ?? ''} />
    </div>
  )
}

function MapIframe({ address }: { address: string; }) {
  return <iframe
    width="100%"
    height="250"
    loading="lazy"
    className="mt-8 rounded-xl"
    src={`https://maps.google.com/maps?q=${address}&hl=zh-TW&z=16&output=embed`}
  ></iframe>;
}

export default InformationLocation;
