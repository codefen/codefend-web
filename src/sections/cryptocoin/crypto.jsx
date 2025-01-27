import { RenderTextBold } from "../../components/RenderTextBold";
import { useLocales } from "../../store/useLocales";
import css from "./crypto.module.css";

function Crypto() {
  const { t } = useLocales();
  const tt = t("layout.crypto.section.content.container.innerContent");
  return (
    <section className={css.cryptoSection}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.containerContent}>
            <div>
              <img
                className={tt.image.class}
                loading={tt.image.loading}
                src={tt.image.src}
                alt={tt.image.alt}
                width={tt.image.width}
                height={tt.image.height}
              />
              <h2>{tt.heading.text}</h2>
              <RenderTextBold text={tt.paragraph} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crypto;
