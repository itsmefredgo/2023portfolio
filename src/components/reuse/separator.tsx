import * as React from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  number: number;
};

const NumberIcon: React.FC<Props> = ({ number }) => {
  // Separator in view window or not
  const { ref: separatorRef, inView: separatorIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="separator">
      <div
        className={`${separatorIsVisible ? "separator-line-visible-number" : ""}`}
        ref={separatorRef}
      >
        &nbsp;{number}&nbsp;
      </div>
      <div
        className={`${separatorIsVisible ? "separator-line-visible" : ""}`}
        ref={separatorRef}
      ></div>
    </div>
  );
};

export default NumberIcon;
