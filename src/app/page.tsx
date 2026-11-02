import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServiceCategories from "@/components/home/ServiceCategories";
import FeatureRow from "@/components/home/FeatureRow";
import Stats from "@/components/home/Stats";
import HowItWorks from "@/components/home/HowItWorks";
import WhyBorderless from "@/components/home/WhyBorderless";
import Audience from "@/components/home/Audience";
import Testimonial from "@/components/home/Testimonial";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCategories />
      <FeatureRow />
      <TrustBar />
      <Stats />
      <HowItWorks />
      <WhyBorderless />
      <Testimonial />
      <Audience />
      <CTA />
    </>
  );
}
