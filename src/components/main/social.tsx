import { FaDocker } from "react-icons/fa";
import Image from "next/image";

function Social() {
  return (
    <div className="main-social">
      <a
        className="contact-social"
        href="https://www.linkedin.com/in/fred-go/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Frederick's LinkedIN"
          className="contact-social-img"
          width="22"
          height="22"
          src="https://raw.githubusercontent.com/brand-icons/brands/master/icons/color/linkedin.svg"
        />
      </a>
      <a
        className="contact-social"
        href="https://github.com/itsmefredgo"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Frederick's GitHub"
          className="contact-social-img"
          width="22"
          height="22"
          src={
            "https://raw.githubusercontent.com/brand-icons/brands/master/icons/color/github.svg"
          }
        />
      </a>
      <a
        className="contact-social"
        href="https://hub.docker.com/u/fredd317"
        target="_blank"
        rel="noreferrer"
      >
        <FaDocker
          className="contact-social-img docker-icon"
          width="22px"
        ></FaDocker>
      </a>
      <a
        className="contact-social"
        href="https://www.instagram.com/itsmefredgo/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Frederick's Instagram"
          className="contact-social-img"
          width="22"
          height="22"
          src={
            "https://raw.githubusercontent.com/brand-icons/brands/master/icons/color/instagram.svg"
          }
        />
      </a>
    </div>
  );
}

export default Social;
