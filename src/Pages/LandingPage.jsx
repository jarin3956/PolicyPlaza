import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import BannerCard from '../Components/BannerCard/BannerCard';
import Footer from '../Components/Footer/Footer';
import PartnerCard from '../Components/PartnersCard/PartnerCard';
import AdvantageCard from '../Components/AdvantageCard/AdvantageCard';
import AchievementCard from '../Components/AchievementCard/AchievementCard';
import ServiceCard from '../Components/ServiceCard/ServiceCard';
import OffersCard from '../Components/OffersCard/OffersCard';
import CautionCard from '../Components/CautionCard/CautionCard';

function LandingPage() {
  return (
    <>
    <Navbar/>
    <BannerCard/>
    <ServiceCard/>
    <OffersCard/>
    <AchievementCard/>
    <CautionCard/>
    <AdvantageCard/>
    <PartnerCard/>
    <Footer/>
    </>
  )
}

export default LandingPage