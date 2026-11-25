
import NewHero from "./newHero";
import Section1 from "./section-1";
import Section2 from "./section-2";
import Section3 from "./section-3";
import Section4 from "./section-4";
import Section5 from "./section-5";
import Steps from "./steps";
import {useLocales} from "../../store/useLocales"

const NewHome = () => {
    const { t } = useLocales()
    return (
        <>
            <NewHero t={t("newHome.hero")} />
            <Steps t={t("newHome.steps")} />
            <Section1 t={t("newHome.section_1")} />
            <Section2 t={t("newHome.section_2")} />
            <Section3 t={t("newHome.section_3")} />
            <Section4 t={t("newHome.section_4")} />
            <Section5 t={t("newHome.section_5")} />
        </>
    )
} 

export default NewHome;