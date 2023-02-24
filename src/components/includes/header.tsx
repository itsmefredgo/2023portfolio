import Link from "next/link";
import { IoLanguage, IoMoon, IoSunny } from "react-icons/io5";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  const pages: string[] = ["Archive", "About"];

  return (
    <header className={inter.className}>
      <div className="header-left">
        <Link href={"/"}>
          <div>Frederick Go</div>
        </Link>
      </div>

      <div className="header-right">
        <div className="header-right-tabs">
          {pages.map((page) => {
            return (
              <Link href={"/" + page.toLowerCase()} key={page}>
                <div>{page}</div>
              </Link>
            );
          })}
        </div>

        <div className="header-right-settings">
          <button>
            <IoMoon></IoMoon>
          </button>
          <button>
            <IoLanguage></IoLanguage>
          </button>
        </div>
      </div>
    </header>
  );
}
