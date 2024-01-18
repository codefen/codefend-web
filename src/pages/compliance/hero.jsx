import React, { useState } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { complianceData } from "../../data";

const HeroCompliance = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const allData = [...complianceData[0], ...complianceData[1], ...complianceData[2]];

    // Filtra las tarjetas basándose en el título y el término de búsqueda
    const filteredData = searchTerm.length >= 3 
        ? allData.filter(data => data.title.toLowerCase().includes(searchTerm.toLowerCase()))
        : allData;

    return (
        <section className="herocompliance">
            <div className="container">
                <div className="subtitle">
                    <h2>Compliance and industry standars</h2>
                    <p>
                        Codefend offers cybersecurity intel, research, and security
                        services, all unified in a unique platform. Allowing you to monitor
                        your assets, infrastructure and your organization's security, while
                        establishing direct communication between our professionals and your
                        security team.
                    </p>
                </div>
            </div>
            <div className="container tarjetas">
                <input
                    type="text"
                    placeholder="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className='cards'>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                    >
                        <Masonry gutter="30px">
                            {filteredData.map((data) => (
                                <div key={data.title} className="card">
                                    <h3><b>{data.title}</b></h3>
                                    <p>{data.description1}<br /><br />{data.description2}</p>
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