import Aboutpage from "./components/about";
import AlternateLayout from "./components/AlternateLayout";
import PrevEditions from "./components/event";
import GlobalLayout from "./components/GlobalLayout";
import Homepage from "./components/homepage";
import Sponsors from "./components/sponsors";
import NavBar from "./components/ui/navbar";
import Domains from "./components/domains";


import TeamPage from "./components/teampage";
import Prizes from "./components/prizes";
import Link from "next/link";
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div id="home">
        <AlternateLayout  >
          <Homepage />
        </AlternateLayout>
      </div>

      <div id="about">
        <GlobalLayout>
          <Aboutpage />
        </GlobalLayout>
      </div>

      <div id="domains">
        <GlobalLayout>
          <Domains />
        </GlobalLayout>
      </div>

      <div id="events">
        <GlobalLayout height="auto">
          <PrevEditions />
        </GlobalLayout>
      </div>

      <div id="sponsors">
      <AlternateLayout bgImage="/images/Background_2.png" >
        
          <Sponsors />
          </AlternateLayout>

      </div>

      <div id="prizes">
      <GlobalLayout >
        <Prizes/>
        </GlobalLayout>
      </div>


      <div id="team" className="w-full">
        <GlobalLayout >
          <TeamPage />
        </GlobalLayout>
      </div>

      
      {/* Link to FAQ */}
      <div className="my-10 text-center">
        <Link
          href="/faq"
          passHref
        >
          <button className="px-12 py-3 text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300 text-sm tracking-widest">
            Go to FAQ
          </button>
        </Link>
      </div>

      <div className="navbar-container">
        <NavBar />
      </div>

      {/* Get In Touch Section */}
      <div className="contact-section mt-16 pt-8 px-12">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <p className="text-white font-bold text-xl">07</p>
          <div className="flex-1 h-[1px] bg-white mx-4"></div>
          <p className="text-white text-xl font-bold">GET IN TOUCH</p>
        </div>

        {/* Contact Form */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col space-y-4 w-1/2">
            <input
              type="text"
              placeholder="NAME"
              className="bg-transparent border border-gray-400 rounded-md text-white px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="bg-transparent border border-gray-400 rounded-md text-white px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="tel"
              placeholder="PHONE"
              className="bg-transparent border border-gray-400 rounded-md text-white px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="relative flex flex-col w-1/2 pl-6">
            <textarea
              placeholder="MESSAGE"
              rows={5}
              className="bg-transparent border border-gray-400 rounded-md text-white px-4 py-2 pr-10 placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
            ></textarea>
            <button
              className="absolute bottom-2 right-2 text-white hover:text-gray-300 transition-colors"
            >
              <img
                src="/images/image.png"  
                alt="Send" 
                className="h-5 w-5"  
              />
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-end mt-8 space-x-6">
          <a
            href="https://www.linkedin.com/company/ieee-computer-society-vit-chennai/"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/compsoc.vitcc?igsh=NTc4MTIwNjQ2YQ=="
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black py-8 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/hackhub_logo.png"
              alt="HACKHUB Logo"
              width={200}
              height={50}
              className="h-auto w-auto"
              priority
            />
          </div>

         

          <div className="text-center text-gray-400 text-sm mt-6">
            © IEEE Computer Society VIT Chennai 2024 - All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

