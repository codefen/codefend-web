import HeroCompliance from "./hero";
import DocumentMetadata from "../../components/DocumentMetadata";
import { pageComplianceMetaData } from "../../data/metaData";
import { useLocales } from "../../store/useLocales";

const Compliance = () => {
  const { t, locale } = useLocales();
  return (
    <>
      <DocumentMetadata
        meta={pageComplianceMetaData({
          title: t("compilence.metadata.title"),
          description: t("compilence.metadata.description"),
          locale
        })}
      />
      <HeroCompliance t={t("compilence.hero")} />
    </>
  );
};

export default Compliance;
