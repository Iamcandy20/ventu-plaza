"use client";

import LiberiaBanner from "./components/DesamparadosBanner";
import CommercialSpaces from "./CommercialSpaces";
import InterestPoints from "./components/InterestPoints";
import AboutSection from "./components/AboutSection";


export default function LiberiaPage() {
  return (
    <>
      <LiberiaBanner />
      <AboutSection/>
      <CommercialSpaces/>
      <InterestPoints/>
    </>
  );
}
