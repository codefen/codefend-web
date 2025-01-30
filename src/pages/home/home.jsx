import Hero from "../../sections/hero";
import Highlights from "../../sections/highlights";
import MainDiferences from "../../sections/mainDiferences";
import OurServices from "../../sections/ourServices";
import OurSoftware from "../../sections/ourSoftware/ourSoftware";
import DocumentMetadata from "../../components/DocumentMetadata";
import { pageHomeMetaData } from "../../data/metaData";
import { useLocales } from "../../store/useLocales";

function Home() {
  const { t, locale } = useLocales();
  return (
    <>
      <DocumentMetadata
        meta={pageHomeMetaData({
          title: t("home.metadata.title"),
          description: t("home.metadata.description"),
          locale,
        })}
      />
      <Hero t={t("home.hero")} />
      <Highlights t={t("home.highlights")} />
      <MainDiferences t={t("home.mainDifferences")} locale={locale} />
      <OurSoftware t={t("home.ourSoftware")} />
      <OurServices t={t("home.ourServices")} />
      {/* <Prices /> */}
      {/* <FreeTrial /> */}
      {/* <Crypto /> */}
      {/* <Linkedin /> */}
      {/* <Members /> */}
    </>
  );
}

export default Home;
