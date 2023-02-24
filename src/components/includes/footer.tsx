import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className={inter.className}>
      © 2023 Frederick Donghyeon Go. All Rights Reserved.
    </footer>
  );
}
