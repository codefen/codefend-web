import AboutPartnesSection from "../../sections/partners/AboutPartners/AboutPartnersSection";
import DocumentMetadata from "../../components/DocumentMetadata";
import PartnersHero from "../../sections/partners/PartnersHero/PartnersHero";
import { pagePartnersMetaData } from "../../data/metaData";
import { useLocales } from "../../store/useLocales";

const Partners = () => {
  const { t, locale } = useLocales();
  return (
    <>
      <DocumentMetadata
        meta={pagePartnersMetaData({
          title: t("partners.metadata.title"),
          description: t("partners.metadata.description"),
          locale,
        })}
      />
      <PartnersHero t={t("partners.hero")} />
      {/* <PartnersSection /> */}
      <AboutPartnesSection t={t("partners.about")} />
    </>
  );
};

export default Partners;
