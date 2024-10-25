import React from "react";
import Homepage from "./components/homepage";
import Aboutpage from "./components/aboutpage";
import Event from "./components/event";
import Sponsors from "./components/sponsors";
import GlobalLayout from "./components/GlobalLayout";
import NavBar from "./components/ui/navbar";

export default function Home() {
  return (
    <div>
  
      <div id="home">
        <GlobalLayout backgroundImage="/images/Background_1.svg">
          <Homepage />
        </GlobalLayout>
      </div>

      <div id="aboutpage">
          <GlobalLayout backgroundImage="/images/bgtrack2.webp">
              <Aboutpage />
          </GlobalLayout>
      </div>

      <div id="events">
            <GlobalLayout backgroundImage="/images/Background_3.svg">
                <Event />
            </GlobalLayout>
      </div>

      <div id="sponsors">
           <GlobalLayout backgroundImage="/images/Background_4.svg  ">
               <Sponsors />
            </GlobalLayout>
      </div>

      <NavBar />
    </div>
  );
}
