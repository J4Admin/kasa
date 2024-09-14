import React from "react";
import Banner from "../components/Banner/Banner.jsx";
import Gallery from "../components/Gallery/Gallery.jsx";

function Home() {
  return (
    <>
      <Banner
        imageSrc="/src/assets/images/banner-background-home.png"
        bannerText="Chez vous, partout et ailleurs"
        isHidden={false}
      />
      <Gallery />
    </>
  );
}

export default Home;
