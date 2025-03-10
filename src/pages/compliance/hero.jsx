import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const HeroCompliance = ({ t }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const allData = [
    ...t.complianceData[0],
    ...t.complianceData[1],
    ...t.complianceData[2],
  ];

  // Filtra las tarjetas basándose en el título y el término de búsqueda
  const filteredData =
    searchTerm.length >= 3
      ? allData.filter((data) =>
          data.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : allData;

  return (
    <section className="herocompliance">
      <div className="container">
        <div className="subtitle">
          <h2>{t.title}</h2>
          <p>{t.description}</p>
        </div>
      </div>
      <div className="container tarjetas">
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="cards">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="30px">
              {filteredData.map((data) => (
                <div key={data.title} className="card">
                  <h3>
                    <b>{data.title}</b>
                  </h3>
                  <p>
                    {data.description1}
                    <br />
                    <br />
                    {data.description2}
                  </p>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export default HeroCompliance;
