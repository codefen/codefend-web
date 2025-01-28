import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { useState, useCallback, useRef } from "react";
import css from "./header.module.scss";
import { useLocales } from "../../store/useLocales";
import { LocaleSwitcher } from "../../components/LocaleSwitcher";

// Se verifica el soport para backdrop-filter
const supportBackdrop = CSS.supports("backdrop-filter", "blur(1px)");

const Header = () => {
  const { t, locale } = useLocales();
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
    document.body.style.overflow = "auto";
  }, []);
  const tt = t("layout.header");

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
            <a href={tt.brand.link}>
              <img src={tt.brand.logo.src} alt={tt.brand.logo.alt} decoding="async" itemProp="image" />
            </a>
          </motion.div>

          <div className={css.mobile}>
            <LocaleSwitcher className={css.localeSwitcher} />
            <button onClick={toggleMenu} className={"toggle"}>
              {!isMenuOpen ? (
                <FaBars color="#fff" size={30} />
              ) : (
                <FaX color="#fff" size={30} />
              )}
            </button>
          </div>

          <div
            className={css.navigateContainer}
            style={{ "--menu-width": !isMenuOpen ? "0%" : "100dvw" }}
          >
            <div className={css.navigateWrapper}>
              <ul ref={menuRef} className={css.navigate}>
                {tt.navigation.links.map((link, i) => (
                  <li key={`${i}-${link.path}`}>
                    <NavLink
                      to={`/${locale}/${link.path}`}
                      className={(obj) => {
                        if (
                          link.path === "about-us" &&
                          location.pathname === "/about-us" &&
                          location.hash === "#contact"
                        )
                          return css.active;
                        return obj.isActive ? css.active : "";
                      }}
                      onClick={closeMenuOnLinkClick}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={css.menu}>
            <LocaleSwitcher className={css.localeSwitcher} />
            {tt.buttons.map((button, index) =>
              button?.path ? (
                <Link
                  key={`fb-${index}`}
                  className={button.class}
                  to={{
                    pathname: `/${locale}/${button.path}`,
                    hash: button.hash,
                  }}
                  state={button?.action ? { [button.action]: true } : undefined}
                >
                  {button.label}
                </Link>
              ) : (
                <a
                  key={`sec-${index}`}
                  className={button.class}
                  href={button.link}
                  target={button.target || "_self"}
                >
                  {button.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
