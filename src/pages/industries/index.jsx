import { motion } from "framer-motion";
import MatrixBackground from "../../components/MatrixBackground/MatrixBackground";
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
        <MatrixBackground />
        <div className="hero-overlay" />
        <div className="container">
          <motion.div
            className="subtitle"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2>{tt.title}</h2>
            <p>{tt.subtitle}</p>
          </motion.div>
        </div>
      </section>
      <section className="industriesContain">
        <div className="container">
          <div className="contain">
            {tt.items.map((data, i) => (
              <motion.div
                key={data.title}
                className="item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <div
                  style={{ backgroundImage: `url(/images/item_${i + 1}.webp)` }}
                  className="image"
                  role="img"
                  aria-label={data.title}
                />
                <div>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
