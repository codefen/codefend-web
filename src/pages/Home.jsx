import Hero from "../sections/hero";
import Highlights from "../sections/highlights";
import MainDiferences from "../sections/mainDiferences";
import OurServices from "../sections/ourServices";
import OurSoftware from "../sections/ourSoftware";
import React, { useEffect } from 'react';
import lozad from "lozad";

function Home() {

  useEffect(() => {
    const observer = lozad();

    observer.observe();
    
    const dynamicImages = document.querySelectorAll('.lozad');
    dynamicImages.forEach((img) => {
      observer.observe(img);
    });
  }, []);


  return (
    <>
      <Hero/>
      <Highlights/>
      <MainDiferences/>
      <OurSoftware/>  
      <OurServices/>   
    </>
  );
}

export default Home;
