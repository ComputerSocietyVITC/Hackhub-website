"use client";

import Image from "next/image";
import { useState } from "react";
import { teamMembers } from "../data/team-members";

export const runtime = "edge";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  group: string;
};

const TeamPage = () => {
  const [showFullTeam, setShowFullTeam] = useState(false);

  const boardMembers = teamMembers.filter((member) => member.group === "board");
  const webDevTeam = teamMembers.filter((member) => member.group === "webdev");
  const designTeam = teamMembers.filter((member) => member.group === "design");

  const TeamMember = ({ member }: { member: TeamMember }) => (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[22px]">
        <Image
          src={member.image}
          alt={member.name}
          fill={true}
          className="rounded-[22px] object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-colors duration-300">
          <div className="text-white text-lg font-semibold p-3 w-full rounded-b-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 to-transparent">
            <div className="text-center">
              <div>{member.name}</div>
              <div className="text-sm font-normal mt-1">{member.role}</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );

  const TeamSection = ({
    title,
    members,
    gridClass = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8",
  }: {
    title: string;
    members: TeamMember[];
    gridClass?: string;
  }) => {
    return (
      <div className="mt-12 mb-16">
        {title && (
          <h2 className="text-white text-2xl font-light text-center mb-8">
            {title}
          </h2>
        )}
        <div className="max-w-7xl mx-auto px-4">
          <div className={gridClass}>
            {members.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-cover bg-center w-full">
      <div className="max-w-7xl mx-auto px-4 pb-24">
        {/* Header section */}
        <div className="flex justify-between items-center mb-12">
          <p className="text-white font-bold text-xl">08</p>
          <div className="flex-1 h-[1px] bg-white mx-4"></div>
          <p className="text-white text-2xl sm:text-3xl font-extrabold uppercase">
            THE HACKHUB TEAM
          </p>
        </div>

        {/* Show entire team button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowFullTeam(!showFullTeam)}
            className="px-12 py-3 text-white border border-white/20 rounded-full
              hover:bg-white/10 transition-colors duration-300 text-sm tracking-widest"
          >
            {showFullTeam ? "SHOW LESS" : "MEET THE WHOLE TEAM"}
          </button>
        </div>

        {/* Conditionally Render Team Sections */}
        {showFullTeam && (
          <>
            <TeamSection
              title="THE BOARD MEMBERS"
              members={boardMembers}
              gridClass="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6 md:gap-8"
            />
            <TeamSection
              title="WebDev Team"
              members={webDevTeam}
              gridClass="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8"
            />
            <TeamSection
              title="Design Team"
              members={designTeam}
              gridClass="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default TeamPage;
