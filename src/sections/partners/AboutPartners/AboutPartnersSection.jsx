import css from "./aboutpartners.module.css";
import PartnerAdventagesCard from "../../../components/PartnerAdventagesCard";
import PartnerForm from "../../../components/PartnerForm/PartnerForm";

const Partners1 = () => {
  return (
    <>
      <section className={css.aboutPartnesSection}>
        <div className={css.wrapper}>
          <div className={css.aboutPartnesContainer}>
            <h2>Expand your services and earn 25% per sale</h2>

            <div className={css.contentWrapper}>
              <PartnerAdventagesCard
                title="EXPAND YOUR SERVICE CATALOG AND EARN 25% ON EACH SALE"
                percentage="25%"
              >
                <p>
                  Unlock a lucrative opportunity with Codefend by becoming one
                  of our trusted distributors.Simply fill out your information,
                  and our team will promptly reach out to you.{" "}
                  <b>Enjoy a generous 25% commission on the net sale price</b>{" "}
                  of our diverse range of plans, designed to meet all client
                  needs. You have the flexibility to choose whether you collect
                  payments directly from clients or let us handle it for you.
                </p>
                <p>
                  Don’t miss out on this chance to{" "}
                  <b>
                    {" "}
                    expand your business and increase your revenue with
                    Codefend.
                  </b>{" "}
                  Our flexible plans and seamless support make it easy for you
                  to start earning right away. Join us today and experience the
                  benefits of partnering with a leader in the industry.
                </p>
              </PartnerAdventagesCard>
              <PartnerForm />
              <PartnerAdventagesCard
                title="NEXT-GEN NETWORKS VISION"
                icon="/images/red.png"
              >
                <p>
                  At Codefend, we're looking for commercial partners to expand
                  our distribution network and bring our cybersecurity solutions
                  to more clients. We value long-term, mutually beneficial
                  relationships and are ready to tailor terms to meet your
                  specific needs. Partnering with us gives you access to
                  advanced cybersecurity products and the support of our expert
                  team, enabling us to tackle today's toughest security
                  challenges together.
                </p>
              </PartnerAdventagesCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners1;
