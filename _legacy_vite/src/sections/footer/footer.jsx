import { Link } from "react-router-dom";
import { useLocales } from "../../store/useLocales";
import css from "./footer.module.css";

const Footer = () => {
  const { t, locale } = useLocales();
  const tt = t("layout.footer");

  return (
    <footer className={css.footerSection}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.footerLogo}>
            <a href={tt.logo.link}>
              <img
                src={tt.logo.src}
                loading="lazy"
                decoding="async"
                itemProp="image"
                alt={tt.logo.alt}
                width={400}
                height={140}
              />
            </a>
            <small>{tt.logo.copyright}</small>
          </div>
          <div className={css.footerlinks}>
            {tt.links.map((link) => (
              <ul key={link.section}>
                <li>{link.section}</li>
                {link.items.map((item, i) => (
                  <li key={`li-${i}`}>
                    {item?.path ? (
                      <Link
                        to={`/${locale}${item.path}`}
                        onClick={(e) => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} target={item?.target || "_self"}>
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
