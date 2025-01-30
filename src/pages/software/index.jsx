import React from "react";
import Features from "./features";
import Capabilities from "./capabilities";
import OurSoftware from "../../sections/ourSoftware/ourSoftware";
import DocumentMetadata from "../../components/DocumentMetadata";
import { pageSoftwareMetaData } from "../../data/metaData";
import { useLocales } from "../../store/useLocales";

const Software = () => {
  const { t, locale } = useLocales();
  return (
    <>
      {/* <HeroSoftware /> */}
      <DocumentMetadata
        meta={pageSoftwareMetaData({
          title: t("software.metadata.title"),
          description: t("software.metadata.description"),
          locale,
        })}
      />
      <OurSoftware t={t("home.ourSoftware")} />
      <Features t={t("software.features")} />
      <Capabilities t={t("software.capabilities")} />
    </>
  );
};

export default Software;
