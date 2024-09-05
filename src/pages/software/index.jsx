import React from "react";
import Features from "./features";
import Capabilities from "./capabilities";
import OurSoftware from "../../sections/ourSoftware";
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
