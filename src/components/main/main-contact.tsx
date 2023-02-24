import Link from "next/link";

import ContactCard from "./contact-card";
import Social from "./social";

export default function MainContact() {
  return (
    <div className="main-contact">
      <div className="main-contact-top">
        <div className="main-contact-info">
          <div>
            Oh, you&apos;ve come down this far. &apos;O&apos;
            <br />
            Here&lsquo;s my card
            <br />
            <br />
            <Link href="/about" className="main-eduction-left-info-link">
              View more
            </Link>
          </div>
        </div>
        <div className="main-contact-card">
          <ContactCard></ContactCard>
        </div>
      </div>
      <div className="main-contact-bottom">
        <Social></Social>
      </div>
    </div>
  );
}
