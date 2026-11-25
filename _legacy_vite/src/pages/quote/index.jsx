import DocumentMetadata from "../../components/DocumentMetadata";
import { pageCalculatorMetaData } from "../../data/metaData";
import { ResourceQuote } from "../../sections/quote/ResourceQuote";
import { useLocales } from "../../store/useLocales";

export const QuotePage = () => {
  const { t, locale } = useLocales();
  return (
    <>
      <DocumentMetadata
        meta={pageCalculatorMetaData({
          title: t("calculator.metadata.title"),
          description: t("calculator.metadata.description"),
          locale,
        })}
      />
      <ResourceQuote t={t("calculator.quote")} />
    </>
  );
};

export default QuotePage;
