import { motion } from "framer-motion";
import MatrixBackground from "../../components/MatrixBackground/MatrixBackground";

const Herofriends = ({ t }) => {
  return (
    <section className="herofriends">
      <MatrixBackground />
      <div className="hero-overlay" />
      <div className="container">
        <motion.div
          className="subtitle"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>{t.title}</h2>
          <p>{t.description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Herofriends;
