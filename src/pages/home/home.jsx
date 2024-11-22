import Crypto from "../../sections/cryptocoin/crypto";
import Linkedin from "../../sections/linkedin";
import Hero from "../../sections/hero";
import Highlights from "../../sections/highlights";
import MainDiferences from "../../sections/mainDiferences";
import OurServices from "../../sections/ourServices";
import FreeTrial from "../../sections/freeTrial";
import OurSoftware from "../../sections/ourSoftware/ourSoftware";
import Contact from "../../sections/contact";
import DocumentMetadata from "../../components/DocumentMetadata";
import { pageHomeMetaData } from "../../data/metaData";

function Home() {
  return (
    <>
      <DocumentMetadata meta={pageHomeMetaData} />
      <Hero />
      <Highlights />
      <MainDiferences />
      <OurSoftware />
      <OurServices />
      {/* <Prices /> */}
      {/* <FreeTrial /> */}
      {/* <Crypto /> */}
      {/* <Linkedin /> */}
      {/* <Members /> */}
    </>
  );
}

export default Home;
