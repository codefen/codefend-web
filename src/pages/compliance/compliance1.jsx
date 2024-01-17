import { complianceData } from "../../data"

const Compliance1 = () => {
    return (
        <section className='compliance1'>
            <div className="container">
                <input type="text" placeholder="search" />
                <div className="cards">
                    <div className="card_container">
                        {
                            complianceData[0].map((data) => {
                                return (
                                    <div key={data.title} className="card">
                                        <h3><b>{data.title}</b></h3>
                                        <p>{data.description1}
                                            <br />
                                            <br />
                                            {data.description2}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="card_container">
                        {
                            complianceData[1].map((data) => {
                                return (
                                    <div key={data.title} className="card">
                                        <h3><b>{data.title}</b></h3>
                                        <p>{data.description1}
                                            <br />
                                            <br />
                                            {data.description2}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div><div className="card_container">
                        {
                            complianceData[2].map((data) => {
                                return (
                                    <div key={data.title} className="card">
                                        <h3><b>{data.title}</b></h3>
                                        <p>{data.description1}
                                            <br />
                                            <br />
                                            {data.description2}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Compliance1