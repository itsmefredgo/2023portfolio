import { useInView } from "react-intersection-observer";
import Image from "next/image";

import fredsnow from "<redux>/assets/images/fred-snow.jpeg";

export default function MainIntroduction() {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="main-introduction">
      <div className="main-introduction-left" data-aos="fade-left">
        <div
          className={`main-introduction-bg ${contentInView ? "iv" : ""}`}
          ref={contentRef}
        ></div>
        <Image
          src={fredsnow}
          alt="Frederick Go"
          placeholder="blur"
          className={`main-introduction-picture ${contentInView ? "iv" : ""}`}
          ref={contentRef}
        ></Image>
      </div>
      <div
        className={`main-introduction-right ${contentInView ? "iv" : ""}`}
        ref={contentRef}
      >
        <div>
          Hi there,
          <br />
          I&apos;m <span className="highlight">Donghyeon (Frederick) Go</span>,
          <br />
          Data Scientist + Web Dev + Programmer
          <br />
          Nice to see you.
        </div>
      </div>
    </div>
  );
}
