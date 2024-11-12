import Aboutpage from "./components/about";
import AlternateLayout from "./components/AlternateLayout";
import Event from "./components/event";
import GlobalLayout from "./components/GlobalLayout";
import Homepage from "./components/homepage";
import Sponsors from "./components/sponsors";
import NavBar from "./components/ui/navbar";

import FaqPage from "./components/FaqPage";
import TeamPage from "./components/teampage";

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
