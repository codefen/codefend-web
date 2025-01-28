import { useEffect } from "react";
import { useLocales } from "../../store/useLocales";
import css from "./footer.module.css";

const Footer = () => {
  const { t, locale } = useLocales();
  const tt = t("layout.footer");
  useEffect(()=> {
    console.log('naodsasd', locale)
  })
  return (
    <footer className={css.footerSection}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.footerLogo}>
            <a href={tt.logo.link}>
              <img
                src={tt.logo.src}
                loading="lazy"
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
                  <li key={i}>
                    <a href={item.href} target={item?.target || "_self"}>
                      {item.label}
                    </a>
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
