import { Fraunces, Manrope } from "next/font/google";
import TitleEffects from "../components/TitleEffects";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL("https://zachyanez.com"),
  title: "Zach Yanez ✌🏽",
  description: "Zach Yanez personal website featuring biography, portfolio work, gallery, videos, resumes, and published work.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className={`${fraunces.variable} ${manrope.variable}`} lang="en">
      <body>
        <TitleEffects />
        {children}
      </body>
    </html>
  );
}
