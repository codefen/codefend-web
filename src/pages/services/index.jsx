import React from "react";
import DocumentMetadata from "../../components/DocumentMetadata";
import { pageServicesMetaData } from "../../data/metaData";
import ServiceSlidesSection from "../../sections/ServiceSlidesSection";
import ServiceHero from "../../sections/ServiceHero";

const Services = () => {
  return (
    <>
      <DocumentMetadata meta={pageServicesMetaData} />
      <ServiceHero />
      <ServiceSlidesSection />
    </>
  );
};

export default Services;
