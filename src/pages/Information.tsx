import GuideCrumbs from '@/components/GuideCrumbs';
import InformationCarousel from '@/components/information/InformationCarousel';
import InformationDescription from '@/components/information/InformationDescription';
import InformationLocation from '@/components/information/InformationLocation';
import InformationMore from '@/components/information/InformationMore';

function Information() {
  return (
    <>
      <GuideCrumbs />
      <InformationCarousel />
      <InformationDescription />
      <InformationLocation />
      <InformationMore />
    </>
  )
}

export default Information;
