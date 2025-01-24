import React from "react";
import DocumentMetadata from "../../components/DocumentMetadata";
import { pageIndustriesMetaData } from "../../data/metaData";
import { useLocales } from "../../store/useLocales";

const Industries = () => {
  const { t } = useLocales();
  const tt = t("industries.mainContent");
  return (
    <>
      <DocumentMetadata
        meta={pageIndustriesMetaData({
          title: t("industries.metadata.title"),
          description: t("industries.metadata.description"),
        })}
      />
      <section className="industries">
        <div className="container">
          <div className="subtitle">
            <h2>{tt.title}</h2>
            <p>{tt.subtitle}</p>
          </div>
          <div className="contain">
            {tt.items.map((data, i) => {
              return (
                <div key={data.title} className="item">
                  <div
                    style={{
                      backgroundImage: `url(/images/item_${i + 1}.png)`,
                    }}
                    className="image"
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
      </section>
    </>
  );
};

export default Industries;
