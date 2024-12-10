import Aboutpage from "./components/about";
import AlternateLayout from "./components/AlternateLayout";
import Event from "./components/event";
import GlobalLayout from "./components/GlobalLayout";
import Homepage from "./components/homepage";
import Sponsors from "./components/sponsors";
import NavBar from "./components/ui/navbar";

import TeamPage from "./components/teampage";
//import Prizes from "./components/prizes";
import Link from "next/link";
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div id="home">
        <AlternateLayout bgImage="/images/bgtrack1.webp" >
          <Homepage />
        </AlternateLayout>
      </div>

      <div id="about">
        <GlobalLayout>
          <Aboutpage />
        </GlobalLayout>
      </div>

      <div id="events">
        <GlobalLayout >
          <Event />
        </GlobalLayout>
      </div>

      <div id="sponsors">
        <AlternateLayout bgImage="/images/Background_2.png" >

          <Sponsors />
        </AlternateLayout>

      </div>

      {/*   <div id="prizes">
      <GlobalLayout >
        <Prizes/>
        </GlobalLayout>
      </div>
  */}

      <div id="team" className="w-full">
        <GlobalLayout >
          <TeamPage />
        </GlobalLayout>
      </div>

      {/* Link to FAQ */}
      <div className="my-10 text-center">
        <Link
          href="/faq"
          className="text-white font-bold text-lg hover:underline"
        >
          Go to FAQ
        </Link>
      </div>

      <div className="navbar-container">
        <NavBar />
      </div>

      {/* Contact Section */}
      <div className="contact-section mt-16 pt-8">
          <div className="flex justify-between items-center mb-12">
          <p className="text-white font-bold text-xl">07</p>
            
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <p className="text-white text-xl font-bold">GET IN TOUCH</p>
          </div>
          <div className="flex justify-end px-12">
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/company/ieee-computer-society-vit-chennai/" className="text-white hover:text-gray-300 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/compsoc.vitcc?igsh=NTc4MTIwNjQ2YQ==" className="text-white hover:text-gray-300 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      

      {/* Footer */}
      <footer className="w-full bg-black/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/images/hackhub_logo.png"
              alt="HACKHUB Logo"
              width={200}
              height={50}
              className="h-auto w-auto"
              priority
            />
            <p className="text-gray-400 text-sm text-center">
              © IEEE Computer Society VIT Chennai 2024 - All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
