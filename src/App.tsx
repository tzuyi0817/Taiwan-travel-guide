import Routes from '@/router';
import GuideHeader from '@/components/GuideHeader';
import GuideFooter from '@/components/GuideFooter';

function App() {
  return (
    <>
      <GuideHeader />
      <div className="container">
        <Routes />
      </div>
      <GuideFooter />
    </>
  )
}

export default App;
