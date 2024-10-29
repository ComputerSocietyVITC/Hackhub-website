import React from "react";
import Homepage from "./components/homepage";
import Aboutpage from "./components/about";
import Event from "./components/event";
import Sponsors from "./components/sponsors";
import GlobalLayout from "./components/GlobalLayout";
import NavBar from "./components/ui/navbar";
import FaqPage from "./components/FaqPage";

export default function Home() {
  return (
    <div>
      <div id="home">
        <GlobalLayout backgroundImage="/images/Background_1.png" >
          <Homepage />
        </GlobalLayout>
      </div>

      <div id="about">
        <GlobalLayout backgroundImage="/images/bgtrack2.webp">
          <Aboutpage />
        </GlobalLayout>
      </div>

      <div id="events">
        <GlobalLayout backgroundImage="/images/Background_2.png">
          <Event />
        </GlobalLayout>
      </div>

      <div id="sponsors">
        <GlobalLayout backgroundImage="/images/Background_4.png">
          <Sponsors />
        </GlobalLayout>
      </div>

      <div>
        <GlobalLayout backgroundImage="/images/Background_5.png">
           <FaqPage />
        </GlobalLayout>
      </div>

      <div className="navbar-container">
        <NavBar />
      </div>
    </div>
  );
}
