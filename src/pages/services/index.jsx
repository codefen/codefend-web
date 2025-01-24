import React from "react";
import DocumentMetadata from "../../components/DocumentMetadata";
import { pageServicesMetaData } from "../../data/metaData";
import ServiceSlidesSection from "./ServiceSlidesSection";
import ServiceHero from "./ServiceHero";
import { useLocales } from "../../store/useLocales";

const Services = () => {
  const { t } = useLocales();
  return (
    <>
      <DocumentMetadata
        meta={pageServicesMetaData({
          title: t("services.metadata.title"),
          description: t("services.metadata.description"),
        })}
      />
      <ServiceHero t={t("services.servicesHero")} />
      <ServiceSlidesSection t={t("services.serviceSlides")} />
    </>
  );
};

export default Services;
