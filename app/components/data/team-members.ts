// data/team-members.ts
export const runtime = "edge";

export interface TeamMember {
  name: string;
  image: string;
  linkedin: string;
  role: string;
  group:
    | "board"
    | "webdev"
    | "techsupport"
    | "social"
    | "management"
    | "design";
}

export const teamMembers: TeamMember[] = [
  // Board Members (6 members)
  {
    name: "Harshit Singh",
    role: "Chairperson",
    image: "/images/people/BoardMembers/harshitsingh.webp",
    linkedin: "https://www.linkedin.com/in/harshitkumarsingh25",
    group: "board",
  },

  {
    name: "Faiz Abid",
    role: "Vice-Chairperson",
    image: "/images/people/BoardMembers/Faiz_abid.webp",
    linkedin: "https://www.linkedin.com/in/mohammad-faiz-abid-875371194/",
    group: "board",
  },

  {
    name: "Anvesha",
    role: "General Secretary",
    image: "/images/people/BoardMembers/anvesha.webp",
    linkedin: "https://www.linkedin.com/in/anvesha-singh-330ba9260/",
    group: "board",
  },
  {
    name: "Sandeep Ravishankar",
    role: "Treasurer",
    image: "/images/people/BoardMembers/sandeepravishankar.webp",
    linkedin: "https://www.linkedin.com/in/sandeep-ravisankar-9113a5271/",
    group: "board",
  },
  {
    name: "Jasmine Tresa Jose",
    role: "UI/UX Lead",
    image: "/images/people/BoardMembers/jasmine.webp",
    linkedin: "https://www.linkedin.com/in/jasmine-tresa-jose-488385252/",
    group: "board",
  },
  {
    name: "Teeshta Parmar",
    role: "Social Media Lead",
    image: "/images/people/BoardMembers/Teeshta_parmar.webp",
    linkedin: "https://www.linkedin.com/in/teeshta-parmar-446b59285/",
    group: "board",
  },

  {
    name: "Mrithula",
    role: "Design Lead",
    image: "/images/people/BoardMembers/mrithula.webp",
    linkedin: "https://www.linkedin.com/in/mariagarcia",
    group: "board",
  },
  {
    name: "Anirudh Sridhar",
    role: "Management Lead",
    image: "/images/people/BoardMembers/anirudhsridhar.webp",
    linkedin: "https://www.linkedin.com/in/anirudh-sridhar-07bb02298/",
    group: "board",
  },
  {
    name: "Sam Shervin",
    role: "Technical Head",
    image: "/images/people/BoardMembers/Sam_shervin.webp",
    linkedin: "https://www.linkedin.com/in/sam-shervin/",
    group: "board",
  },
  {
    name: "Aryan Kumar",
    role: "Creative lead",
    image: "/images/people/BoardMembers/aryan_kumar.webp",
    linkedin: "https://www.linkedin.com/in/aryan-kumar-029abb289/",
    group: "board",
  },
  {
    name: "Reuben Philip",
    role: "Joint Technical Head",
    image: "/images/people/BoardMembers/reubenphilip.webp",
    linkedin: "https://www.linkedin.com/in/reuben-philip-a96b67284/",
    group: "board",
  },
  {
    name: "Aditya Jyoti",
    role: "Joint General Secretary",
    image: "/images/people/BoardMembers/adityajyoti.webp",
    linkedin: "https://www.linkedin.com/in/aditya-jyoti/",
    group: "board",
  },

  // WebDev Team (5 members)
  {
    name: "Reuben Philip",
    role: "",
    image: "/images/people/BoardMembers/reubenphilip.webp",
    linkedin: "https://www.linkedin.com/in/reuben-philip-a96b67284/",
    group: "webdev",
  },
  {
    name: "Ishaan Sawant",
    role: "",
    image: "/images/people/webdev/ishaan.webp",
    linkedin: "https://www.linkedin.com/in/ishaan-sawant",
    group: "webdev",
  },
  {
    name: "Shriansh Tripathi",
    role: "",
    image: "/images/people/webdev/shrianshtripathi.webp",
    linkedin: "https://www.linkedin.com/in/shriansh-tripathi-74b8b930b",
    group: "webdev",
  },
  {
    name: "Shivam Kumar",
    role: "",
    image: "/images/people/webdev/shivam.webp",
    linkedin: "https://www.linkedin.com/in/shivamkr-dev",
    group: "webdev",
  },
  {
    name: "Abhinav Kumar",
    role: "",
    image: "/images/people/webdev/abhinav.webp",
    linkedin: "https://www.linkedin.com/in/abhinav-kumar-v/",
    group: "webdev",
  },
  {
    name: "Aarav tandon",
    role: "",
    image: "/images/people/webdev/aarav.webp",
    linkedin: "https://www.linkedin.com/in/aarav-tandon-a7a369293/",
    group: "webdev",
  },
  {
    name: "Samar Singh",
    role: "",
    image: "/images/people/webdev/samar_singh.webp",
    linkedin: "https://www.linkedin.com/in/samar-singh-17421b28b/",
    group: "webdev",
  },

  // Design Team
  {
    name: "Aryan Kumar",
    role: "",
    image: "/images/people/BoardMembers/aryan_kumar.webp",
    linkedin: "https://www.linkedin.com/in/aryan-kumar-029abb289/",
    group: "design",
  },
  {
    name: "Shruti S",
    role: "",
    image: "/images/people/design/shruti_s.webp",
    linkedin:
      "https://www.linkedin.com/in/shrutiselvakkumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    group: "design",
  },
];
