import { complianceData } from "../../data"

const Compliance1 = () =>{
    return (
        <section className='compliance1'>
            <div className="container">
                <div className="card_container">
                    {
                        complianceData.map((data)=>{
                            return(
                                <div key={data.title} className="card">
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Compliance1