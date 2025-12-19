"use client";

import LiberiaBanner from "./components/DesamparadosBanner";
import AboutSection from "./components/AboutSection";
import InterestPoints from "./components/InterestPoints";
import CommercialSpaces from "./CommercialSpaces";

export default function LiberiaPage() {
  return (
    <>
      <LiberiaBanner />
      <InterestPoints />
      <AboutSection />
      <CommercialSpaces/>
    </>
  );
}
