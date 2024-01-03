
import Crypto from "../../sections/crypto";
import Hero from "../../sections/hero";
import Highlights from "../../sections/highlights";
import MainDiferences from "../../sections/mainDiferences";
import Members from "../../sections/members";
import OurServices from "../../sections/ourServices";
import OurSoftware from "../../sections/ourSoftware";
import Prices from "../../sections/prices";


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
      <Crypto />
    </>
  );
}

export default Home;
