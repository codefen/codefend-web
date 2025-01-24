import css from "./aboutpartners.module.css";
import PartnerAdventagesCard from "../../../components/PartnerAdventagesCard";
import PartnerForm from "../../../components/PartnerForm/PartnerForm";

const Partners1 = ({ t }) => {
  return (
    <>
      <section className={css.aboutPartnesSection}>
        <div className={css.wrapper}>
          <div className={css.aboutPartnesContainer}>
            <h2>{t.title}</h2>

            <div className={css.contentWrapper}>
              <PartnerAdventagesCard
                title={t.card1.cardTitle}
                percentage={t.card1.percentage}
              >
                <p dangerouslySetInnerHTML={{ __html: t.card1.paragraph1 }}></p>
                <p dangerouslySetInnerHTML={{ __html: t.card1.paragraph2 }}></p>
              </PartnerAdventagesCard>
              <PartnerForm t={t.partnerForm} />
              <PartnerAdventagesCard
                title={t.card2.cardTitle}
                icon={t.card2.icon}
              >
                <p>{t.card2.paragraph1}</p>
              </PartnerAdventagesCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners1;
