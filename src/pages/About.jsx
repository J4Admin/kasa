import React from "react";
import Banner from "../components/Banner/Banner.jsx";
import Collapse from "../components/Collapse/Collapse.jsx";
import CollapseData from "../data/AboutRules.json";

function About() {
  return (
    <>
      <Banner
        imageSrc="../kasa/assets/images/banner-background-home.png"
        isHidden={true}
      />
      <Collapse CollapseData={CollapseData} />
    </>
  );
}

export default About;
