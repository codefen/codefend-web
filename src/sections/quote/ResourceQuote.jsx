import { useState } from "react";
import css from "./quote.module.scss";
import { QuoteTab } from "../../components/QuoteTab";
import { QuoteProvider } from "../../store/QuoteContext";
import { WebTabContent } from "./QuoteTabContent/WebContent";
import { tabs } from "../../data/quote/general";
import { MobileTabContent } from "./QuoteTabContent/MobileContent";
import { CloudTabContent } from "./QuoteTabContent/CloudContent";
import { SourceCodeTabContent } from "./QuoteTabContent/SourceCodeContent";
import { SocialTabContent } from "./QuoteTabContent/SocialQuoteContent";
import { IpInternalsTabContent } from "./QuoteTabContent/IpInternalContent";
import { IpExternalTabContent } from "./QuoteTabContent/IpExternalContent";
import { SendProposalModal } from "../../components/SendProposalModal";
import { SettingsTabContent } from "./QuoteTabContent/SettingQuoteTab";
import { ProposalSentSuccessModal } from "../../components/ProposalSentSuccessModal";

export const ResourceQuote = () => {
  const [activeTab, setActiveTab] = useState("Web");

  return (
    <QuoteProvider>
      <section id="quotes" className={css.sectionModule}>
        <div className={css.sectionHeader}>
          <h2>Get a Price Estimate</h2>
          <h3>Calculate the cost of your next service!</h3>
          <p>
            Below, you'll find reference values for our services. Please note
            that these are estimates and must be confirmed by our commercial
            team if accepted.
          </p>
        </div>
        <div className={css.sectionCard}>
          <div className={css.sectionCardWrapper}>
            <div
              className={css.tabsContainer}
              role="tablist"
              aria-orientation="horizontal"
            >
              {tabs.map((tab) => (
                <QuoteTab
                  key={tab.id}
                  click={() => setActiveTab(tab.label)}
                  label={tab.label}
                  icon={tab.icon}
                  activeTab={activeTab}
                  id={tab.id}
                />
              ))}
            </div>
            <WebTabContent isActive={activeTab === "Web"} />
            <MobileTabContent isActive={activeTab === "Mobile"} />
            <CloudTabContent isActive={activeTab === "Cloud"} />
            <SourceCodeTabContent isActive={activeTab === "Source Code"} />
            <SocialTabContent isActive={activeTab === "Social"} />
            <IpInternalsTabContent isActive={activeTab === "Internal IP"} />
            <IpExternalTabContent isActive={activeTab === "External IP"} />
            <SettingsTabContent isActive={activeTab === "Settings"} />
          </div>
        </div>
      </section>
      <SendProposalModal />
      <ProposalSentSuccessModal />
    </QuoteProvider>
  );
};
