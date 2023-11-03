import AboutUs from "../sections/aboutUs";
import FreeTrial from "../sections/freeTrial";
import Hero from "../sections/hero";
import Highlights from "../sections/highlights";
import MainDiferences from "../sections/mainDiferences";
import Members from "../sections/members";
import OurServices from "../sections/ourServices";
import OurSoftware from "../sections/ourSoftware";
import Prices from "../sections/prices";


function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <MainDiferences />
      <OurSoftware />  
      <OurServices />   
      <Prices />
      <Members />
      <FreeTrial/>
      <AboutUs />
    </>
  );
}

export default Home;
