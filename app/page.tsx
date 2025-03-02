import Aboutpage from "./components/pages/about";
import AlternateLayout from "./components/AlternateLayout";
import PrevEditions from "./components/pages/prevEditions";
import GlobalLayout from "./components/GlobalLayout";
import Homepage from "./components/pages/homepage";
import Sponsors from "./components/pages/sponsors";
import NavBar from "./components/ui/navbar";
import Domains from "./components/pages/domains";
import Timeline from "./components/pages/timeline";
import ContactSection from "./components/pages/form";
import TeamPage from "./components/pages/teampage";
import Prizes from "./components/pages/prizes";
import Link from "next/link";
import Speakers from "./components/pages/speakers";

export const runtime = "edge";

export default function Home() {
  return (
    <div>
      <div id="home">
        <AlternateLayout>
          <Homepage />
        </AlternateLayout>
      </div>

      <div id="about">
        <Aboutpage />
      </div>

      <div id="sponsors">
        <AlternateLayout>
          <Sponsors />
        </AlternateLayout>
      </div>

      <div id="domains">
        <Domains />
      </div>

      <div id="timeline">
        <Timeline />
      </div>

      <div id="events">
        <GlobalLayout height="auto">
          <PrevEditions />
        </GlobalLayout>
      </div>

      <div id="prizes">
        <GlobalLayout>
          <Prizes />
        </GlobalLayout>
      </div>

      <div id="speakers">
        <GlobalLayout>
          <Speakers />
        </GlobalLayout>
      </div>

      <div id="team" className="w-full">
        <GlobalLayout>
          <TeamPage />
        </GlobalLayout>
      </div>

      {/* Link to FAQ */}
      <div className="my-10 text-center">
        <Link href="/faq" passHref>
          <button className="px-12 py-3 text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300 text-sm tracking-widest">
            Go to FAQ
          </button>
        </Link>
      </div>

      <div className="navbar-container">
        <NavBar />
      </div>

      <div>
        <ContactSection />
      </div>
    </div>
  );
}
