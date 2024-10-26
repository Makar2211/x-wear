import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.scss";
import Template from "./template";
import { Footer, Header } from "../shared/components/modules";

const notino = Nunito({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "X-WEAR | Главная",
  description: "Современный магазин одежды и кроссовок с наилучшими ценами",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${notino.className}`}>
        <link rel="icon" href="/img/favicon.ico" />
        <Template>
          <Header />
          {children}
          <Footer />
        </Template>
      </body>
    </html>
  );
}
