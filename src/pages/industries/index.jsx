import DocumentMetadata from "../../components/DocumentMetadata";
import { pageIndustriesMetaData } from "../../data/metaData";
import { useLocales } from "../../store/useLocales";

const Industries = () => {
  const { t, locale } = useLocales();
  const tt = t("industries.mainContent");
  return (
    <>
      <DocumentMetadata
        meta={pageIndustriesMetaData({
          title: t("industries.metadata.title"),
          description: t("industries.metadata.description"),
          locale,
        })}
      />
      <section className="industries" id="industries-hero">
        <div className="container">
          <div className="subtitle">
            <h2>{tt.title}</h2>
            <p>{tt.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="industriesContain">
        <div className="container">
          <div>
            <div className="contain">
              {tt.items.map((data, i) => {
                return (
                  <div key={data.title} className="item">
                    <div
                      style={{
                        backgroundImage: `url(/images/item_${i + 1}.webp)`,
                      }}
                      className="image"
                      role="img"
                    ></div>
                    <div>
                      <h3>{data.title}</h3>
                      <p>{data.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
