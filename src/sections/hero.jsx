import { motion } from "framer-motion";
import { slideTransition } from "../transitions/globalTransitions";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideTransition}
            className="copy"
          >
            <TypeAnimation
              sequence={[
                "Intel meets protection",
                3000,
                "Attack surface surveillance",
                3000,
                "Dive deeper the darkweb.",
                3000,
                "Remove vendor risk",
                3000,
                "Continuous pentest",
                3000,
                "Unveil your shadow IT",
                3000,
                "Quieter become, able to hear",
              ]}
              wrapper="h1"
              speed={70}
              style={{
                display: "inline-block",
                fontSize: "40px",
              }}
              repeat={Infinity}
            />
            <p>
              We provide <b>advanced information security services</b> to
              prevent business continuity disruption, reputational and monetary
              loss. To make this possible we employ a multifaceted approach that
              encompasses custom software and hardware, proactive threat
              monitoring, and a team of skilled experts, including researchers
              and informants.
            </p>
            <Link className="btn" to="/calculator">
              Request a pentest now!
            </Link>
          </motion.div>
          <div className="image"></div>
        </div>
        <div className="features">
          <ul>
            <li>Unique tools</li>
            <li>Cid spoofing</li>
            <li>SS7 interception</li>
            <li>Web3 drainers</li>
            <li>Web security</li>
            <li>Unlimited free scans</li>
            <li>Crackmapexecute</li>
            <li>Impact & cobalt strike</li>
            <li>Brute ratel</li>
            <li>Private leaks</li>
            <li>The onion router</li>
            <li>Invisible Internet Project</li>
          </ul>
          <ul>
            <li>Unique tools</li>
            <li>Cid spoofing</li>
            <li>SS7 interception</li>
            <li>Web3 drainers</li>
            <li>Web security</li>
            <li>Unlimited free scans</li>
            <li>Crackmapexecute</li>
            <li>Impact & cobalt strike</li>
            <li>Brute ratel</li>
            <li>Private leaks</li>
            <li>The onion router</li>
            <li>Invisible Internet Project</li>
          </ul>
        </div>
      </div>
      <div className="bkg-2"></div>
    </section>
  );
};

export default Hero;
