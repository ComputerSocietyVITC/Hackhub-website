import type { Metadata } from "next";
import Head from "next/head";
import Stars from "./components/stars/stars";
import { Hamburger } from "./components/ui/hamburger";
import Loader from "./components/ui/loader";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
  title: "HackHub 25 | Empowering Innovation",
  description:
    "HackHub 25 is the ultimate platform for innovation, collaboration, and technology-driven events. Join us to shape the future!",
  keywords: [
    "HackHub",
    "innovation",
    "hackathon",
    "technology",
    "collaboration",
    "events",
  ],
  icons: {
    icon: "/images/Hackhub_logo.svg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* add analytics */}
        <script
          defer
          data-domain="hackhub25.ieeecsvitc.com"
          src="https://analytics.adityajyoti.com/js/script.js"
        ></script>

        {/* Preload carousel images */}
        <link rel="preload" href="/images/EventImages/1.jpg" as="image" />
        <link rel="preload" href="/images/EventImages/2.jpg" as="image" />
        <link rel="preload" href="/images/EventImages/3.jpg" as="image" />
        <link rel="preload" href="/images/EventImages/4.jpg" as="image" />
        <link rel="preload" href="/images/EventImages/5.jpg" as="image" />
      </Head>

      <body
        className={`${montserrat.className} overflow-x-hidden bg-[#0D1117]`}
      >
        <Loader>
          {children}
          <Stars starCount={130} />
          <div className="hamburger-container">
            <Hamburger />
          </div>
        </Loader>
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      </body>
    </html>
  );
}
