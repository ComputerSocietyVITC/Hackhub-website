
import React from "react";
import Homepage from "./components/homepage";
import Aboutpage from "./components/aboutpage";
import Event from "./components/event";
import Sponsors from "./components/sponsors";

import GlobalLayout from "./components/GlobalLayout";


export default function Home() {
  return (
    <div>

      <GlobalLayout backgroundImage="/images/bgtrack1.webp">
        <Homepage />
      </GlobalLayout>
    {/*
      <GlobalLayout backgroundImage="/images/bgtrack2.webp">
        <Aboutpage />
      </GlobalLayout>
      <GlobalLayout backgroundImage="/images/bgtrack3.webp">
        <Event />
      </GlobalLayout>
      <GlobalLayout backgroundImage="/images/bgtrack4.webp">
        <Sponsors />
      </GlobalLayout>
    */}

     
   
    </div>
  );
}
