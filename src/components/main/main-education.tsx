import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import fredband from "<redux>/assets/images/fred-clarinet.jpeg";

export default function MainEducation() {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="main-education">
      <div
        className={`main-eduction-left ${contentInView ? "iv" : ""}`}
        ref={contentRef}
      >
        <div className="main-eduction-left-info">
          <div className="main-eduction-left-info-title">My Education</div>
          <div className="main-eduction-left-info-body">
            <div>
              Senior at <span className="highlight">Dalhousie University</span>
            </div>
            <div>
              <span className="highlight">Computer Science</span> and Statistics
            </div>
            <div>Certificates in</div>
            <div>- Data Science</div>
            <div>- Communication&nbsp;Technologies & Cyber&nbsp;Security</div>
          </div>
          <Link href="/about" className="main-eduction-left-info-link">
            View more
          </Link>
        </div>
      </div>
      <div className="main-eduction-right">
        <Image
          src={fredband}
          alt="Frederick Go"
          placeholder="blur"
          className="main-eduction-picture"
        ></Image>
      </div>
    </div>
  );
}
