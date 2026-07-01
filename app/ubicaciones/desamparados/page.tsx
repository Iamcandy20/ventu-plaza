"use client";

import LiberiaBanner from "./components/DesamparadosBanner";
import WhyChooseUs from "./components/WhyChooseUs";
import InterestPoints from "./components/InterestPoints";
import AboutSection from "./components/AboutSection";


export default function LiberiaPage() {
  return (
    <>
      <LiberiaBanner />
      <AboutSection/>
      <WhyChooseUs />
      <InterestPoints/>
    </>
  );
}
