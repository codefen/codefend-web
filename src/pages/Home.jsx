import AboutUs from "../sections/aboutUs";
import Capabilities from "../sections/capabilities";
import Crypto from "../sections/crypto";
import Features from "../sections/features";
import Footer from "../sections/footer";
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
      <Features />
      <Capabilities />
      <OurServices />   
      <Prices />
      <Members />
      <Crypto />
      <AboutUs />
      <FreeTrial/>
      <Footer />
    </>
  );
}

export default Home;
