import { useMemo, useState } from "react";
import css from "./quote.module.scss";
import { QuoteTab } from "../../components/QuoteTab";
import { QuoteProvider } from "../../store/QuoteContext";
import { WebTabContent } from "./QuoteTabContent/WebContent";
import { RESOURCE_CONFIGS, tabs } from "../../data/quote/general";
import { MobileTabContent } from "./QuoteTabContent/MobileContent";
import { CloudTabContent } from "./QuoteTabContent/CloudContent";
import { SourceCodeTabContent } from "./QuoteTabContent/SourceCodeContent";
import { SocialTabContent } from "./QuoteTabContent/SocialQuoteContent";
import { IpInternalsTabContent } from "./QuoteTabContent/IpInternalContent";
import { IpExternalTabContent } from "./QuoteTabContent/IpExternalContent";
import { SendProposalModal } from "../../components/SendProposalModal";
import { SettingsTabContent } from "./QuoteTabContent/SettingQuoteTab";
import { ProposalSentSuccessModal } from "../../components/ProposalSentSuccessModal";
import { TAB_WEB_ID } from "../../data/quote/web";
import { TAB_MOBILE_ID } from "../../data/quote/mobile";
import { TAB_CLOUD_ID } from "../../data/quote/cloud";
import { TAB_SOURCE_ID } from "../../data/quote/sourceCode";
import { TAB_SOCIAL_ID } from "../../data/quote/social";
import { TAB_INTERNAL_IP_ID } from "../../data/quote/ipInternals";
import { TAB_EXTERNAL_IP_ID } from "../../data/quote/externalIp";
import { TAB_SETTINGS_ID } from "../../data/quote/settings";
import { Select } from "../../components/Select";

export const ResourceQuote = ({ t }) => {
  const [activeTab, setActiveTab] = useState(TAB_WEB_ID);
  const mobileTabs = useMemo(
    () =>
      Object.entries(t.mobileTabs)
        .map(([key, value]) => ({
          label: value,
          value: RESOURCE_CONFIGS[key].id,
        }))
        .concat({ label: t.mobileSettingTab, value: TAB_SETTINGS_ID }),
    [t.mobileTabs]
  );
  console.log({ mobileTabs });
  return (
    <QuoteProvider>
      <section id="quotes" className={css.sectionModule}>
        <div className={css.sectionModuleWrapper}>
          <img
            className={css.bgDecoration}
            src="/images/quote-coins.png"
            alt="quote coins"
          />
          <div className={css.sectionHeader}>
            <h2>{t.title}</h2>
            <h3>{t.subtitle}</h3>
            <p>{t.description}</p>
          </div>
          <div className={css.sectionCard}>
            <div className={css.mobileTabs}>
              <Select
                values={mobileTabs}
                defaultValue={activeTab}
                onChange={(value) => setActiveTab(value)}
                name="mobile-tabs"
              />
            </div>
            <div className={css.sectionCardWrapper}>
              <div
                className={css.tabsContainer}
                role="tablist"
                aria-orientation="horizontal"
              >
                {tabs.map((tab) => (
                  <QuoteTab
                    key={tab.id}
                    click={() => setActiveTab(tab.id)}
                    label={tab.label}
                    icon={tab.icon}
                    activeTab={activeTab}
                    id={tab.id}
                  />
                ))}
              </div>
              <WebTabContent
                t={t.content.web}
                isActive={activeTab === TAB_WEB_ID}
              />
              <MobileTabContent
                t={t.content.mobile}
                isActive={activeTab === TAB_MOBILE_ID}
              />
              <CloudTabContent
                t={t.content.cloud}
                isActive={activeTab === TAB_CLOUD_ID}
              />
              <SourceCodeTabContent
                t={t.content.source}
                isActive={activeTab === TAB_SOURCE_ID}
              />
              <SocialTabContent
                t={t.content.social}
                isActive={activeTab === TAB_SOCIAL_ID}
              />
              <IpInternalsTabContent
                t={t.content.internalIp}
                isActive={activeTab === TAB_INTERNAL_IP_ID}
              />
              <IpExternalTabContent
                t={t.content.externalIp}
                isActive={activeTab === TAB_EXTERNAL_IP_ID}
              />
              <SettingsTabContent
                t={t.content.setting}
                isActive={activeTab === TAB_SETTINGS_ID}
              />
            </div>
          </div>
        </div>
      </section>
      <SendProposalModal />
      <ProposalSentSuccessModal />
    </QuoteProvider>
  );
};
