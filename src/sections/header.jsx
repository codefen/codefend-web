import { Link, NavLink } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { NAVIGATE_LINKS } from "../data/header";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { useState, useCallback, useRef } from "react";

// Se verifica el soport para backdrop-filter
const supportBackdrop = CSS.supports("backdrop-filter", "blur(1px)");

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    [
      "rgba(0, 0, 0, 0.4)",
      supportBackdrop ? "rgba(0, 0, 0, 0.83)" : "rgba(0, 0, 0, 1)",
    ]
  );
  const padding = useTransform(scrollY, [0, 100], ["1rem", "0"]);
  const top = useTransform(scrollY, [0, 100], ["35px", "0px"]);
  const blurFilter = useTransform(scrollY, [0, 100], ["0px", "7px"]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenuOnLinkClick = useCallback(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, []);

  return (
    <motion.header
      className="header"
      style={{
        "--header-bg": backgroundColor,
        "--header-padding": padding,
        "--header-top": top,
        "--header-blur": blurFilter,
      }}
    >
      <div className="header-wrapper">
        <div className="container">
          <motion.div
            initial={{
              opacity: 0,
              transform: "scale(0.8)",
            }}
            animate={{
              opacity: 1,
              transform: "scale(1)",
            }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            className="brand"
          >
            <a href="/#hero">
              <img src="/images/logo-light.svg" alt="logo" />
            </a>
          </motion.div>

          <button onClick={toggleMenu} className="toggle">
            {!isMenuOpen ? (
              <FaBars color="#fff" size={30} />
            ) : (
              <FaX color="#fff" size={30} />
            )}
          </button>

          <div
            className="navigate-container"
            style={{ "--menu-width": !isMenuOpen ? "0%" : "100dvw" }}
          >
            <ul ref={menuRef} className="navigate">
              {NAVIGATE_LINKS.map((path) => (
                <li key={path}>
                  <NavLink
                    to={`/${path}`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={closeMenuOnLinkClick}
                  >
                    {path.replace("-", " ")}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu">
            <Link
              className="btn alt"
              to={{ pathname: "/", hash: "#contact" }}
              state={{ scrollToContact: true }}
            >
              contact
            </Link>
            <a
              href="https://panel.codefend.com/auth/signup"
              target="_blank"
              className="btn main"
            >
              try codefend for free
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
