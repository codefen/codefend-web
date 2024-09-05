import React from "react";
import { industriesData } from "../../data/index.js";
import DocumentMetadata from "../../components/DocumentMetadata";
import { pageIndustriesMetaData } from "../../data/metaData";
const Industries = () => {
  return (
    <>
      <DocumentMetadata meta={pageIndustriesMetaData} />
      <section className="industries">
        <div className="container">
          <div className="subtitle">
            <h2>industries</h2>
            <p>
              Codefend is your comprehensive solution for all your company's
              security needs. Our application combines a wide range of services
              designed to protect your organization from cyber threats, ensuring
              the highest level of protection for your data & infrastructure.
            </p>
          </div>
          <div className="contain">
            {industriesData.map((data, i) => {
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
