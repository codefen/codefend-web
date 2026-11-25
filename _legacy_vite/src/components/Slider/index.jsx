import { forwardRef } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import css from "./slider.module.scss";

const Slider = forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={`${className} ${css.sliderRoot}`}
    {...props}
  >
    <SliderPrimitive.Track className={css.sliderTrack}>
      <SliderPrimitive.Range className={css.sliderRange} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={css.sliderThumb} />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
