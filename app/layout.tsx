import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from 'next/head';
import Stars from "./components/stars/stars";
import { Hamburger } from "./components/ui/hamburger";
import Loader from "./components/ui/loader";
import "./globals.css";

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
  icons: {
    icon: "/ICON.webp",
  }

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

        {/* Preload carousel images */}
        <link rel="preload" href="/images/EventImages/1.jpg" as="image" />
        <link rel="preload" href="/images/EventImages/2.jpg" as="image" />
        <link rel="preload" href="/images/EventImages/3.jpg" as="image" />
        <link rel="preload" href="/images/EventImages/4.jpg" as="image" />
        <link rel="preload" href="/images/EventImages/5.jpg" as="image" />
        

  
        
      </Head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-black`}
      >
        <Loader>
        
        {children}
        <Stars starCount={130} />
        <div className="hamburger-container">
          <Hamburger />
        </div>
       
        </Loader>
      </body>
      
    </html>
  );
}
