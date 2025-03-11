import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useCallback, useRef } from "react";
import css from "./header.module.scss";
import { useLocales } from "../../store/useLocales";
import { LocaleSwitcher } from "../../components/LocaleSwitcher";
import { BarsIcon } from "./BarsIcon";
import { CloseIcon } from "./CloseIcon";

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
            <Link to={`/${locale}${tt.brand.link}`}>
              <img
                src={tt.brand.logo.src}
                alt={tt.brand.logo.alt}
                decoding="async"
                itemProp="image"
                width={250}
                height={40}
              />
            </Link>
          </motion.div>

          <div className={css.mobile}>
            <LocaleSwitcher
              className={css.localeSwitcher}
              openText={tt.mobile.openTranslations}
            />
            <button
              onClick={toggleMenu}
              className={"toggle"}
              aria-label={
                !isMenuOpen
                  ? tt.mobile.openBurguerMenu
                  : tt.mobile.closeBurguerMenu
              }
            >
              {!isMenuOpen ? <BarsIcon /> : <CloseIcon />}
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
                  &nbsp; &nbsp;
                  {button.icon && (
                    <span className={button.iconClass}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="25px"
                        width="25px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path>
                      </svg>
                    </span>
                  )}
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
