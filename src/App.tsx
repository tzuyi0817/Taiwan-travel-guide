import Routes from '@/router';
import GuideHeader from '@/components/GuideHeader';
import GuideFooter from '@/components/GuideFooter';

function App() {
  return (
    <>
      <GuideHeader />
      <Routes />
      <GuideFooter />
    </>
  )
}

export default App;
