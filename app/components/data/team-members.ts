// data/team-members.ts

export interface TeamMember {
    name: string;
    image: string;
    linkedin: string;
    role: string;
    group: 'board' | 'webdev' | 'techsupport' | 'social' | 'management';
  }
  
  export const teamMembers: TeamMember[] = [
    // Board Members (6 members)
    {
      name: 'Harshit Singh',
      role: 'Chairperson',
      image: '/images/people/BoardMembers/harshitsingh.jpg',
      linkedin: 'https://www.linkedin.com/in/harshitkumarsingh25',
      group: 'board'
    },
   
    {
      name: 'Anirudh Sridhar',
      role: 'Management Lead',
      image: '/images/people/BoardMembers/anirudhsridhar.jpg',
      linkedin: 'https://www.linkedin.com/in/anirudh-sridhar-07bb02298/',
      group: 'board'
    },
    
   
    {
      name: 'Anvesha',
      role: 'General Secretary',
      image: '/images/people/BoardMembers/anvesha.jpg',
      linkedin: 'https://www.linkedin.com/in/anvesha-singh-330ba9260/',
      group: 'board'
    },
    {
      name: 'Aditya Jyoti',
      role: 'Joint General Secretary',
      image: '/images/people/BoardMembers/adityajyoti.jpg',
      linkedin: 'https://www.linkedin.com/in/aditya-jyoti/',
      group: 'board'
    },
    {
      name: 'Reuben Philip',
      role: 'Joint Technical Head',
      image: '/images/people/BoardMembers/reubenphilip.jpg',
      linkedin: 'https://www.linkedin.com/in/reuben-philip-a96b67284/',
      group: 'board'
    },
    {
      name: 'Teeshta Parmar',
      role: 'Social Media Lead',
      image: '/images/people/BoardMembers/Teeshta_parmar.jpeg',
      linkedin: 'https://www.linkedin.com/in/teeshta-parmar-446b59285/',
      group: 'board'
    },
    {
      name: 'Faiz Abid',
      role: 'Vice-Chairperson',
      image: '/images/people/BoardMembers/Faiz_abid.jpg',
      linkedin: 'https://www.linkedin.com/in/mohammad-faiz-abid-875371194/',
      group: 'board'
    },
    
  
   
    {
      name: 'Mrithula',
      role: 'Design Lead',
      image: '/images/people/BoardMembers/mrithula.jpg',
      linkedin: 'https://www.linkedin.com/in/mariagarcia',
      group: 'board'
    },
    {
      name: 'Sandeep Ravishankar',
      role: 'Treasurer',
      image: '/images/people/BoardMembers/sandeepravishankar.jpg',
      linkedin: 'https://www.linkedin.com/in/sandeep-ravisankar-9113a5271/',
      group: 'board'
    },
    {
      name: 'Sam Shervin',
      role: 'Technical Head',
      image: '/images/people/BoardMembers/Sam_shervin.jpeg',
      linkedin: 'https://www.linkedin.com/in/sam-shervin/',
      group: 'board'
    },
    {
      name: 'Shashwat Mishra',
      role: 'Projects Lead',
      image: '/images/people/BoardMembers/shashwat.jpg',
      linkedin: 'https://www.linkedin.com/in/shashwat-mishra-4779a927a/',
      group: 'board'
    },
    {
      name: 'Jasmine Tresa Jose',
      role: 'UI/UX Lead',
      image: '/images/people/BoardMembers/jasmine.jpg',
      linkedin: 'https://www.linkedin.com/in/jasmine-tresa-jose-488385252/',
      group: 'board'
    },
    {
      name: 'Aryan Kumar',
      role: 'Creative lead',
      image: '/images/people/BoardMembers/aryan_kumar.jpg',
      linkedin: 'https://www.linkedin.com/in/aryan-kumar-029abb289/',
      group: 'board'
    },
    
  
  
    // WebDev Team (5 members)
    {
      name: 'Reuben Philip',
      role: '',
      image: '/images/people/BoardMembers/reubenphilip.jpg',
      linkedin: 'https://www.linkedin.com/in/reuben-philip-a96b67284/',
      group: 'webdev'
    },
    {
      name: 'Ishaan Sawant',
      role: '',
      image: '/images/people/webdev/ishaan.jpg',
      linkedin: 'https://www.linkedin.com/in/ishaan-sawant',
      group: 'webdev'
    },
    {
      name: 'Shriansh Tripathi',
      role: '',
      image: '/images/people/webdev/shrianshtripathi.jpg',
      linkedin: 'https://www.linkedin.com/in/shriansh-tripathi-74b8b930b',
      group: 'webdev'
    },
    {
      name: 'Shivam Kumar',
      role: '',
      image: '/images/people/webdev/shivam.jpg',
      linkedin: 'https://www.linkedin.com/in/shivamkr-dev',
      group: 'webdev'
    },
    {
      name: 'Abhinav Kumar',
      role: '',
      image: '/images/people/webdev/abhinav.jpg',
      linkedin: 'https://www.linkedin.com/in/abhinav-kumar-v/',
      group: 'webdev'
    },
    {
        name: 'Marcus Lee',
        role: '',
        image: '/images/people/personx.jpg',
        linkedin: 'https://www.linkedin.com/in/marcuslee',
        group: 'webdev'
    },
    {
        name: 'Ana Gutierrez',
        role: '',
        image: '/images/people/personx.jpg',
        linkedin: 'https://www.linkedin.com/in/anagutierrez',
        group: 'webdev'
    },
   
    // Tech Support Team (3 members)
    {
      name: 'Chris Taylor',
      role: 'Support Lead',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/christaylor',
      group: 'techsupport'
    },
    {
      name: 'Maya Patel',
      role: 'Technical Support Specialist',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/mayapatel',
      group: 'techsupport'
    },
    {
      name: 'Luis Rodriguez',
      role: 'IT Support Engineer',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/luisrodriguez',
      group: 'techsupport'
    },
    {
        name: 'Emily Chen',
        role: 'Project Manager',
        image: '/images/people/personx.jpg',
        linkedin: 'https://www.linkedin.com/in/emilychen',
        group: 'techsupport'
    },
    {
        name: 'Raj Patel',
        role: 'Full Stack Developer',
        image: '/images/people/personx.jpg',
        linkedin: 'https://www.linkedin.com/in/rajpatel',
        group: 'techsupport'
    },
    {
        name: 'Sofia Martinez',
        role: 'Social Media Strategist',
        image: '/images/people/personx.jpg',
        linkedin: 'https://www.linkedin.com/in/sofiamartinez',
        group: 'techsupport'
    },
  
    // Social Media Team (6 members)
    {
      name: 'Emma Brown',
      role: 'Social Media Manager',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/emmabrown',
      group: 'social'
    },
    {
      name: 'Aiden Murphy',
      role: 'Content Creator',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/aidenmurphy',
      group: 'social'
    },
    {
      name: 'Sofia Garcia',
      role: 'Community Manager',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/sofiagarcia',
      group: 'social'
    },
    {
      name: 'Lucas Kim',
      role: 'Digital Marketing Specialist',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/lucaskim',
      group: 'social'
    },
    {
      name: 'Isabella Chen',
      role: 'Brand Strategist',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/isabellachen',
      group: 'social'
    },
    {
      name: 'Ryan Peters',
      role: 'Content Coordinator',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/ryanpeters',
      group: 'social'
    },
  
    // Management and Marketing (6 members)
    {
      name: 'Victoria Adams',
      role: 'Marketing Director',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/victoriaadams',
      group: 'management'
    },
    {
      name: 'Nathan Lee',
      role: 'Operations Manager',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/nathanlee',
      group: 'management'
    },
    {
      name: 'Julia Martinez',
      role: 'HR Manager',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/juliamartinez',
      group: 'management'
    },
    {
      name: 'Robert Zhang',
      role: 'Business Development Manager',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/robertzhang',
      group: 'management'
    },
    {
      name: 'Sarah Thompson',
      role: 'Product Marketing Manager',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/sarahthompson',
      group: 'management'
    },
    {
      name: 'Kevin O\'Brien',
      role: 'Strategy Manager',
      image: '/images/people/personx.jpg',
      linkedin: 'https://www.linkedin.com/in/kevinobrien',
      group: 'management'
    }
  ];