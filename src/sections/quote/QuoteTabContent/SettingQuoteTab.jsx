import { useEffect, useMemo } from "react";
import { QuoteLayout } from "../QuoteLayout";
import { useQuoteStore } from "../../../store/useQuoteStore";
import css from "../quote.module.scss";
import { sendMetrics } from "../../../data/quote/general";
import { TAB_SETTINGS_ID } from "../../../data/quote/settings";
import { Slider } from "../../../components/Slider";
import { debounce } from "../../../hooks/debounce";
import { useResourceCalculations } from "../../../hooks/useResourceCalculations";

export const SettingsTabContent = ({ t, isActive }) => {
  const { quotes, identifier, intensity, setIntensity, adjustedPrice } =
    useQuoteStore();
  const intensityPercentage = useMemo(() => intensity - 100, [intensity]);
  const { totalSubtotal } = useResourceCalculations(quotes);
  const adjustedPriceValue = useMemo(
    () => adjustedPrice(totalSubtotal),
    [totalSubtotal, intensity]
  );
  useEffect(() => {
    if (intensity !== 100) {
      const bouncing = debounce(
        () => sendMetrics(identifier, quotes, intensityPercentage),
        500
      );
      bouncing();
      return () => bouncing.cancel();
    }
  }, [intensity]);
  if (!isActive) return null;

  return (
    <QuoteLayout
      title={t.title}
      description={t.description}
      id={TAB_SETTINGS_ID}
    >
      <div
        className={`${css.quoteLeftContainerTop} ${css.quoteSettingContainer}`}
      >
        <label>{t.adjustLabel}</label>
        <Slider
          min={60}
          max={200}
          step={1}
          value={[intensity]}
          onValueChange={(e) => setIntensity(e[0])}
        />
        <div className={css.quotePriceAdjust}>
          <span>60%</span>
          <span>{intensityPercentage}%</span>
          <span>200%</span>
        </div>

        <div className={css.quoteAdjustResultContainer}>
          <p className={css["price-adjust"]}>
            {t.adjustPrice} ${adjustedPriceValue}
          </p>
          {totalSubtotal > 0 && (
            <p className="text-sm text-muted-foreground mt-2">
              {intensity > 100 ? t.increase : t.discount} {t.of} $
              {adjustedPriceValue - totalSubtotal}
            </p>
          )}
        </div>
      </div>
    </QuoteLayout>
  );
};
