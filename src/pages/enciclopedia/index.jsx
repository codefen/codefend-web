import { useLocales } from "../../store/useLocales";

const Enciclopedia = () => {
    const {t} = useLocales()
    const tt = t("encyclopedia")
    return (
        <>
            {/* <DocumentMetadata
              meta={pageComplianceMetaData({
                title: tt("encyclopedia.metadata.title"),
                description: tt("encyclopedia.metadata.description"),
              })}
            /> */}
            <section className="enciclopedia">
      <div className="container">
        <div className="sidebar">
          <div>
            <h2>{tt.sidebar.application_bugs.title}</h2>
            <ul>
              {tt.sidebar.application_bugs.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{tt.sidebar.hacker_techniques.title}</h2>
            <ul>
              {tt.sidebar.hacker_techniques.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="enciclopedia_card">
          <div className="card_content">
            {tt.encyclopedia_card.sections.map((section, index) => (
              <div key={index}>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
            ))}
            <button className="btn">{tt.encyclopedia_card.button}</button>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Enciclopedia;