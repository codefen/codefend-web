import { Fragment, useMemo } from "react";
import css from "./servicesSlides.module.css";

const SlideContent = ({ bgImage, bgImageMedia, details, benefits }) => {
  const style = useMemo(() => {
    const styles = {};
    if (bgImage && bgImage !== "none") {
      styles["--bg-image-service"] = `url("${bgImage}")`;
    }
    if (bgImageMedia && bgImageMedia !== "none") {
      styles["--bg-image-media"] = `url("${bgImageMedia}")`;
    }
    return styles;
  }, [bgImage, bgImageMedia]);

  const classes = useMemo(() => {
    const cls = ["contain"];
    if (bgImage && bgImage !== "none") {
      cls.push(css.sectionServiceImage);
    }
    if (bgImageMedia && bgImageMedia !== "none") {
      cls.push(css.sectionServiceImageMedia);
    }
    return cls.join(" ");
  }, [bgImage, bgImageMedia]);
  return (
    <div className={`${classes}`} style={style}>
      <ul>
        <li>
          <h3>MORE DETAILS:</h3>
          <p>{details}</p>
        </li>
        <li>
          <h3>
            <b>KEY BENEFITS:</b>
          </h3>
          <p>
            {benefits.map((benefit, i) => (
              <Fragment key={i}>
                - {benefit}
                <br />
              </Fragment>
            ))}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SlideContent;
