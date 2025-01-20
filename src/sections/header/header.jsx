import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { NAVIGATE_LINKS } from "../../data/header";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { useState, useCallback, useRef } from "react";
import css from "./header.module.scss";

// Se verifica el soport para backdrop-filter
const supportBackdrop = CSS.supports("backdrop-filter", "blur(1px)");

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef();
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    [
      "rgba(0, 0, 0, 0.4)",
      supportBackdrop ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 1)",
    ]
  );
  const padding = useTransform(scrollY, [0, 100], ["1rem", "0"]);
  const top = useTransform(scrollY, [0, 100], ["25px", "0px"]);
  const blurFilter = useTransform(scrollY, [0, 100], ["0px", "7px"]);

  const toggleMenu = useCallback(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setIsMenuOpen((prev) => !prev);
  }, [isMenuOpen]);

  const closeMenuOnLinkClick = useCallback(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, []);

  return (
    <motion.header
      className={css.header}
      style={{
        "--header-bg": backgroundColor,
        "--header-padding": padding,
        "--header-top": top,
        "--header-blur": blurFilter,
      }}
    >
      <div className={css.wrapper}>
        <div className={`container ${css.container}`}>
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
            className={css.brand}
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
            className={css.navigateContainer}
            style={{ "--menu-width": !isMenuOpen ? "0%" : "100dvw" }}
          >
            <div className={css.navigateWrapper}>
              <ul ref={menuRef} className={css.navigate}>
                {NAVIGATE_LINKS.map((path) => (
                  <li key={path}>
                    <NavLink
                      to={`/${path}`}
                      className={(obj) => {
                        if (
                          path === "partners" &&
                          location.pathname === "/" &&
                          location.hash === "#contact"
                        )
                          return css.active;
                        return obj.isActive ? css.active : "";
                      }}
                      onClick={closeMenuOnLinkClick}
                    >
                      {path.replace("-", " ")}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={css.menu}>
            <Link
              className="btn alt"
              to={{ pathname: "/about-us", hash: "#contact" }}
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
