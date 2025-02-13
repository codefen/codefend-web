import Friends1 from "./friends1";
import Herofriends from "./herofriends";
import DocumentMetadata from "../../components/DocumentMetadata";
import { pageAboutUsMetaData } from "../../data/metaData";
import { useLocales } from "../../store/useLocales";
import FreeTrial from "../../sections/contact/freeTrial";

const Friends = () => {
  const { t, locale } = useLocales();
  return (
    <>
      <DocumentMetadata
        meta={pageAboutUsMetaData({
          title: t("aboutus.metadata.title"),
          description: t("aboutus.metadata.description"),
          locale,
        })}
      />
      <Herofriends t={t("aboutus.hero")} />
      <Friends1 t={t("aboutus.team")} />
      {/* <Linkedin /> */}
      <FreeTrial t={t("aboutus.contact")} locale={locale} />
    </>
  );
};

export default Friends;
