export const profile = {
  name: 'Brandon Robinson',
  initials: 'BR',
  role: 'Software Engineer',
  tagline: 'Army veteran turned software engineer. I build full-stack web apps and keep databases running.',
  location: 'St. Louis, MO',
  email: 'brobinson3030@gmail.com',
  resumeUrl: 'resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/I3luu' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brandon-robinson-0b0880247/' },
    { label: 'Résumé', href: 'resume.pdf' },
  ],
};

export const about = {
  paragraphs: [
    "Hi, I'm Brandon. I spent four years in the U.S. Army keeping secure communications running between installations, then moved into tech as a database administrator and software developer supporting government projects.",
    "I just finished my B.S. in Information Technology, and I'm most confident with Python, JavaScript/React, HTML and CSS, with hands-on SQL experience in PostgreSQL and Oracle. What I take the most pride in is my adaptability and my love of learning new things.",
  ],
  skills: ['JavaScript', 'React', 'Python', 'Flask', 'HTML5 / CSS3', 'PostgreSQL', 'Oracle', 'MySQL', 'Git'],
  education: [
    { school: 'American Public University System', degree: 'B.S. Information Technology', year: '2026' },
    { school: 'University of Maryland', degree: 'A.A. Computer Studies', year: '2022' },
  ],
};

export type Project = {
  title: string;
  year?: string;
  description: string;
  tags: string[];
  image: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: 'Pokémon Team Builder',
    description: 'A Flask app on the PokeAPI: search Pokémon, build and save a team of up to six, and compare any two head-to-head.',
    tags: ['Python', 'Flask', 'REST API'],
    image: 'projects/pokemon.jpg',
    href: 'https://github.com/I3luu/Team_Builder_V2',
  },
  {
    title: 'Groomer Portfolio',
    description: 'A responsive site for a professional dog groomer with an animated gallery and lightbox, testimonials and scroll animations.',
    tags: ['HTML', 'CSS', 'JavaScript', 'AOS'],
    image: 'projects/groomer.png',
    href: 'https://github.com/I3luu/Grooming-Portfolio',
  },
  {
    title: 'Ticket Purchasing App',
    description: "A checkout app with live price calculation, form validation and a countdown that expires the session if you don't finish in time.",
    tags: ['JavaScript', 'DOM'],
    image: 'projects/tickets.jpg',
    href: 'https://github.com/I3luu/Ticket-Purchasing',
  },
  {
    title: 'Task List',
    description: 'A simple web-based task list built with Python and Flask.',
    tags: ['Python', 'Flask'],
    image: 'projects/task-list.jpg',
    href: 'https://github.com/I3luu/Task-list',
  },
];

export const experience = [
  { period: 'Jan 2023 - Nov 2024', title: 'Database Administrator / Software Developer', org: 'NGA', note: 'Daily PostgreSQL maintenance with PGAdmin and Oracle tools, scripting for internal projects, and export features that improved reporting workflows.' },
  { period: 'Mar 2023 - Oct 2023', title: 'Site Reliability Engineer', org: 'Moonshot Labs', note: 'Operational scripting and reliability work on government-focused projects, keeping application environments stable and secure.' },
  { period: 'Nov 2019 - Mar 2023', title: 'Signal Communications Specialist', org: 'U.S. Army', note: 'Kept secure radio communications running between installations, led a three-person team, and ran daily COMSEC checks.' },
  { period: 'Jun 2016 - Sep 2019', title: 'Sales Representative', org: 'Auto Assure', note: 'Helped customers choose warranty coverage and managed detailed client records and follow-ups.' },
];
