'use client';

import React from "react";
import Homepage from "./components/homepage";
import Aboutpage from "./components/about";
import Event from "./components/event";
import Sponsors from "./components/sponsors";
import GlobalLayout from "./components/GlobalLayout";
import NavBar from "./components/ui/navbar";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto">
      <div id="home" className="snap-start h-screen">
        <GlobalLayout backgroundImage="/images/Background_1.svg">
          <Homepage />
        </GlobalLayout>
      </div>

      <div id="about" className="snap-start h-screen">
        <GlobalLayout backgroundImage="/images/Background_4.svg">
          <Aboutpage />
        </GlobalLayout>
      </div>
      
      <div id="events" className="snap-start h-screen">
        <GlobalLayout backgroundImage="/images/Background_3.svg">
          <Event />
        </GlobalLayout>
      </div>
      
      <div id="sponsors" className="snap-start h-screen">
        <GlobalLayout backgroundImage="/images/Background_4.svg">
          <Sponsors />
        </GlobalLayout>
      </div>

      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
    </div>
  );
}