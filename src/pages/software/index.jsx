import React from "react";
import Features from "./features";
import Capabilities from "./capabilities";
import OurSoftware from "../../sections/ourSoftware/ourSoftware";
import DocumentMetadata from "../../components/DocumentMetadata";
import { pageSoftwareMetaData } from "../../data/metaData";
import { useLocales } from "../../store/useLocales";

const Software = () => {
  const { t } = useLocales();
  return (
    <>
      {/* <HeroSoftware /> */}
      <DocumentMetadata meta={pageSoftwareMetaData} />
      <OurSoftware t={t("home.ourSoftware")} />
      <Features />
      <Capabilities />
    </>
  );
};

export default Software;
