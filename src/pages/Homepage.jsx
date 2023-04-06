import React from 'react';
// import MainHeader from '../components/header/MainHeader';
import MainHero from '../components/header/MainHero';
import HomepageCategoryPreview from '../components/homepage/HomepageCategoryPreview';
import HomepageInfoSeeMore from '../components/homepage/HomepageInfoSeeMore';
import HomepageBestSeller from '../components/homepage/HomepageBestSeller';

function Homepage() {
  return (
    <>
      <MainHero />
      <HomepageCategoryPreview />
      <HomepageInfoSeeMore />
      <HomepageBestSeller />
    </>
  );
}

export default Homepage;
