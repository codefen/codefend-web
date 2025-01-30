import DocumentMetadata from "../../components/DocumentMetadata";
import { pagePlansMetaData } from "../../data/metaData";
import Plans from "../../sections/prices/plans";
import { useLocales } from "../../store/useLocales";

export default function PlansPage() {
  const { t, locale } = useLocales();
  return (
    <>
      <DocumentMetadata
        meta={pagePlansMetaData({
          title: t("plans.metadata.title"),
          description: t("plans.metadata.description"),
          locale,
        })}
      />
      <Plans t={t("plans.content")} />
    </>
  );
}
