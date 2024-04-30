'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../home-hero';
import PlayerView from '../player-view';
import MarketingLandingAbout from '../marketing-landing-about';
import MarketingLandingServices from '../marketing-landing-services';
import MarketingServicesBenefits from '../marketing-services-benefits';


// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <MarketingServicesBenefits />

      <PlayerView />

      <MarketingLandingServices />

      <MarketingLandingAbout />
    </>
  );
}
