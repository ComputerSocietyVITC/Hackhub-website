'use client';

import Image from 'next/image';
import { useState } from 'react';
import { teamMembers } from '../components/data/team-members';

const TeamPage = () => {
  const [showFullTeam, setShowFullTeam] = useState(false);

  // Filter members by group
  const boardMembers = teamMembers.filter(member => member.group === 'board');
  const webDevTeam = teamMembers.filter(member => member.group === 'webdev');
  const designTeam = teamMembers.filter(member => member.group === 'design');
 /* const techSupportTeam = teamMembers.filter(member => member.group === 'techsupport');
  const socialMediaTeam = teamMembers.filter(member => member.group === 'social');
  const managementTeam = teamMembers.filter(member => member.group === 'management');
 */ 

  const TeamSection = ({
    title,
    members,
    maxColumns = 6,
  }: {
    title: string;
    members: typeof teamMembers;
    maxColumns?: number;
  }) => {
    const lastRowItems = members.length % maxColumns || maxColumns;
    const completeRowsCount = Math.floor((members.length - 1) / maxColumns);

    return (
      <div className="mt-8">
        {title && (
          <h2 className="text-white text-2xl font-light text-center mb-4">{title}</h2>
        )}
        <div className="max-w-full mx-auto px-4">
          <div className="grid gap-8">
            {/* Complete rows */}
            {completeRowsCount > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                {members.slice(0, completeRowsCount * maxColumns).map((member) => (
                  <a key={member.name} href={member.linkedin} target="_blank" rel="noopener noreferrer" className="relative group">
                    <div className="relative w-full h-[300px] overflow-hidden rounded-[22px]">
                      <div className="absolute inset-0 w-full h-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill={true}
                          className="rounded-[22px] object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-colors duration-300">
                          <div className="text-white text-lg font-semibold p-2 rounded-b-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center">
                              <div>{member.name}</div>
                              <div className="text-sm font-normal">{member.role}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* Last row - centered */}
            <div className="flex justify-center">
              <div
                className="grid gap-7"
                style={{
                  gridTemplateColumns: `repeat(${lastRowItems}, minmax(0, 1fr))`,
                }}
              >
                {members.slice(completeRowsCount * maxColumns).map((member) => (
                  <a key={member.name} href={member.linkedin} target="_blank" rel="noopener noreferrer" className="relative group">
                    <div className="relative w-[300px] h-[300px] overflow-hidden rounded-[22px]">
                      <div className="absolute inset-0 w-full h-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill={true}
                          className="rounded-[22px] object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-colors duration-300">
                          <div className="text-white text-lg font-semibold p-2 rounded-b-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center">
                              <div>{member.name}</div>
                              <div className="text-sm font-normal">{member.role}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-cover bg-center min-h-screen w-full mt-10">
      <div className="max-w-full mx-auto px-4 py-8">
        {/* Header section */}
        <div className="flex justify-between items-center mb-12">
          <p className="text-white text-4xl font-bold">THE HACKHUB TEAM</p>
          <div className="flex-1 h-[1px] bg-white mx-4"></div>
          <p className="text-white  font-bold text-3xl">04</p>
        </div>

        {/* Board Members Section */}
        <TeamSection title="THE BOARD MEMBERS" members={boardMembers} maxColumns={6} />
        
        {/* Meet the whole team button */}
        <div className="flex justify-center mt-12 mb-8">
          <button
            onClick={() => setShowFullTeam(!showFullTeam)}
            className="px-12 py-3 text-white border border-white/20 rounded-full 
              hover:bg-white/10 transition-colors duration-300 text-sm tracking-widest"
          >
            {showFullTeam ? 'SHOW LESS' : 'MEET THE WHOLE TEAM'}
          </button>
        </div>

        {/* Full Team Sections */}
        <div className={`${showFullTeam ? 'block' : 'hidden'} space-y-8`}>
          <TeamSection title="WebDev Team" members={webDevTeam} maxColumns={6} />
          <TeamSection title="Design Team" members={designTeam} maxColumns={6} />
        {/*  <TeamSection title="Tech. Support Team" members={techSupportTeam} maxColumns={6} />
          <TeamSection title="Social Media Team" members={socialMediaTeam} maxColumns={6} />
          <TeamSection title="Management and Marketing" members={managementTeam} maxColumns={6} />
  */}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
  