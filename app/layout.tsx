import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Hamburger } from "./components/ui/hamburger";
import Stars from "./components/stars/stars";
import Head from 'next/head';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hackhub 25",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        {/* Add Google Font link for Archivo Narrow */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;700&display=swap"
          rel="stylesheet"
        />
         {/* add analytics */}
        <script 
          defer 
          data-domain="hackhub25.ieeecsvitc.com" 
          src="https://analytics.adityajyoti.com/js/script.js">
        </script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        
        {children}
        <Stars starCount={130} />
        <div className="hamburger-container">
          <Hamburger />
        </div>
      </body>
    </html>
  );
}
