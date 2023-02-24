import { Inter } from "@next/font/google";
import Separator from "<redux>/components/reuse/separator";
import MainIntroduction from "<redux>/components/main/main-introduction";
import MainEducation from "<redux>/components/main/main-education";
import MainWorks from "<redux>/components/main/main-works";
import MainContact from "<redux>/components/main/main-contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} section-main`}>
      <MainIntroduction></MainIntroduction>
      <Separator number={1}></Separator>
      <MainEducation></MainEducation>
      <Separator number={2}></Separator>
      <MainWorks></MainWorks>
      <Separator number={3}></Separator>
      <MainContact></MainContact>
    </main>
  );
}
