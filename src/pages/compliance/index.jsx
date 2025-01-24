import HeroCompliance from "./hero";
import DocumentMetadata from "../../components/DocumentMetadata";
import { pageComplianceMetaData } from "../../data/metaData";
import { useLocales } from "../../store/useLocales";

const Compliance = () => {
  const { t } = useLocales();
  return (
    <>
      <DocumentMetadata
        meta={pageComplianceMetaData({
          title: t("compilence.metadata.title"),
          description: t("compilence.metadata.description"),
        })}
      />
      <HeroCompliance t={t("compilence.hero")} />
    </>
  );
};

export default Compliance;
