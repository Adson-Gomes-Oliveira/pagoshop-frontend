import React from 'react';
// import MainHeader from '../components/header/MainHeader';
import MainHero from '../components/header/MainHero';
import HomepageCategoryPreview from '../components/homepage/HomepageCategoryPreview';
import HomepageInfoSeeMore from '../components/homepage/HomepageInfoSeeMore';

function Homepage() {
  return (
    <>
      <MainHero />
      <HomepageCategoryPreview />
      <HomepageInfoSeeMore />
    </>
  );
}

export default Homepage;
