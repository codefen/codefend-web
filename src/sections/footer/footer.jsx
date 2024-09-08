import css from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footerSection}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.footerLogo}>
            <a href="/#hero">
              <img
                src="/images/logo-light.svg"
                loading="lazy"
                alt="Codefend logo"
                width={400}
                height={140}
              />
            </a>
            <small>Copyright © 2024 Codefend LLC</small>
          </div>
          <div className={css.footerlinks}>
            <ul>
              <li>Solutions</li>
              <li>
                <a href="/services">services</a>
              </li>
              <li>
                <a href="/compliance">compliance</a>
              </li>
              <li>
                <a href="/industries">industries</a>
              </li>
            </ul>
            <ul>
              <li>Product</li>
              <li>
                <a href="/software">our software</a>
              </li>
              <li>
                <a
                  href="https://panel.codefend.com/auth/signup"
                  target="_blank"
                >
                  create account
                </a>
              </li>
              <li>
                <a
                  href="https://panel.codefend.com/auth/signin"
                  target="_blank"
                >
                  sign in
                </a>
              </li>
            </ul>
            <ul>
              <li>Company</li>
              <li>
                <a href="mailto:hello@codefend.com">contact us</a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1KZRrfHR4hIy2YyKkQmPK7Azp-zkbk7mYhCM6xKlVsoE/edit#heading=h.otbipzz762sq"
                  target="_blank"
                >
                  terms of use
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1e0Th-KsMRn_DO8uJ14WZkAqJK7DiUFvrLkQ2yol6E_o/edit?usp=sharing"
                  target="_blank"
                >
                  privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
