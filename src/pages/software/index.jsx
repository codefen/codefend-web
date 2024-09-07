import React from "react";
import Capabilities from "./capabilities";
import OurSoftware from "../../sections/ourSoftware/ourSoftware";
import Features from "../../sections/softwareFeatures/features";
import DocumentMetadata from "../../components/DocumentMetadata";
import { pageSoftwareMetaData } from "../../data/metaData";
const Software = () => {
  return (
    <>
      {/* <HeroSoftware /> */}
      <DocumentMetadata meta={pageSoftwareMetaData} />
      <OurSoftware />
      <Features />
      <Capabilities />
    </>
  );
};

export default Software;
