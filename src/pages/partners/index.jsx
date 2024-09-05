import AboutPartnesSection from "../../sections/partners/AboutPartners/AboutPartnersSection";
import DocumentMetadata from "../../components/DocumentMetadata";
import PartnersHero from "../../sections/partners/PartnersHero/PartnersHero";
import { pagePartnersMetaData } from "../../data/metaData";

const Partners = () => {
  return (
    <>
      <DocumentMetadata meta={pagePartnersMetaData} />
      <PartnersHero />
      {/* <PartnersSection /> */}
      <AboutPartnesSection />
    </>
  );
};

export default Partners;
