import AboutHero from "@/components/About/AboutHero";
import OurStory from "@/components/About/OurStory";
import StatsSection from "@/components/About/StatsSection";
import MissionVision from "@/components/About/MissionVision";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import ForJobSeekersEmployers from "@/components/About/ForJobSeekersEmployers";
import OurValues from "@/components/About/OurValues";
import OurCommunity from "@/components/About/OurCommunity";
import { AboutCTA } from "@/components/About/AboutCTA";
import TrustedByEmployers from "@/components/About/TrustedByEmployers";

export default function AboutUs() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <StatsSection />
      <MissionVision />
      <WhyChooseUs />
      <ForJobSeekersEmployers />
      <OurValues />
      <OurCommunity />
      <AboutCTA />
      <TrustedByEmployers />
    </>
  );
}
