import React, { useContext } from 'react';
import MainHero from '../components/hero/MainHero';
import HomepageCategoryPreview from '../components/homepage/HomepageCategoryPreview';
import HomepageInfoSeeMore from '../components/homepage/HomepageInfoSeeMore';
import HomepageBestSeller from '../components/homepage/HomepageBestSeller';
import HomepageAdBox from '../components/homepage/HomepageAdBox';
import HomepageSupportedBy from '../components/homepage/HomepageSupportedBy';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import TrooperContext from '../context/TrooperContext';

function Homepage() {
  const { loading } = useContext(TrooperContext);

  return (
    <>
      {loading && <Loading />}
      <MainHero />
      <HomepageCategoryPreview />
      <HomepageInfoSeeMore />
      <HomepageBestSeller />
      <HomepageAdBox />
      <HomepageSupportedBy />
      <Footer />
    </>
  );
}

export default Homepage;
