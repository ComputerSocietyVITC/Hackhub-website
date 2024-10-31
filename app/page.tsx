import React from "react";
import Homepage from "./components/homepage";
import Aboutpage from "./components/about";
import Event from "./components/event";
import Sponsors from "./components/sponsors";
import GlobalLayout from "./components/GlobalLayout";
import NavBar from "./components/ui/navbar";

import FaqPage from "./components/FaqPage";
import TeamPage from "./components/teampage";

export default function Home() {
  return (
    <div>
      <div id="home">
        <GlobalLayout backgroundImage="/images/Background_1.png" >
          <Homepage />
        </GlobalLayout>
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
        <GlobalLayout >
          <Sponsors />
        </GlobalLayout>
      </div>
      <div id="team" className="w-full">
        <GlobalLayout >
          <TeamPage />
        </GlobalLayout>
      </div>

      <div>
        <GlobalLayout>
           <FaqPage />
        </GlobalLayout>
      </div>

      <div className="navbar-container">
        <NavBar />
      </div>
    </div>
  );
}
