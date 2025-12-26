/* eslint-disable @typescript-eslint/no-unused-vars */
// Skills Section Logo's
import htmlLogo from '../assets/tech_logo/html.png';
import cssLogo from '../assets/tech_logo/css.png';
import sassLogo from '../assets/tech_logo/sass.png';
import javascriptLogo from '../assets/tech_logo/javascript.png';
import reactjsLogo from '../assets/tech_logo/reactjs.png';
import angularLogo from '../assets/tech_logo/angular.png';
import reduxLogo from '../assets/tech_logo/redux.png';
import nextjsLogo from '../assets/tech_logo/nextjs.png';
import tailwindcssLogo from '../assets/tech_logo/tailwindcss.png';
import gsapLogo from '../assets/tech_logo/gsap.png';
import materialuiLogo from '../assets/tech_logo/materialui.png';
import bootstrapLogo from '../assets/tech_logo/bootstrap.png';
import springbootLogo from '../assets/tech_logo/springboot.png';
import nodejsLogo from '../assets/tech_logo/nodejs.png';
import expressjsLogo from '../assets/tech_logo/express.png';
import mysqlLogo from '../assets/tech_logo/mysql.png';
import mongodbLogo from '../assets/tech_logo/mongodb.png';
import firebaseLogo from '../assets/tech_logo/firebase.png';
import cLogo from '../assets/tech_logo/c.png';
import cppLogo from '../assets/tech_logo/cpp.png';
import javaLogo from '../assets/tech_logo/java.png';
import pythonLogo from '../assets/tech_logo/python.png';
import typescriptLogo from '../assets/tech_logo/typescript.png';
import gitLogo from '../assets/tech_logo/git.png';
import githubLogo from '../assets/tech_logo/github.png';
import vscodeLogo from '../assets/tech_logo/vscode.png';
import postmanLogo from '../assets/tech_logo/postman.png';
import figmaLogo from '../assets/tech_logo/figma.png';
import netlifyLogo from '../assets/tech_logo/netlify.png';
import vercelLogo from '../assets/tech_logo/vercel.png';
import postgreLogo from '../assets/tech_logo/postgresql.png';
import csharpLogo from '../assets/tech_logo/csharp.png';
import dockerLogo from '../assets/tech_logo/docker.png';
import zustandLogo from '../assets/tech_logo/zustand.png';
import shadcnLogo from '../assets/tech_logo/shadcn.png';
import betterAuthLogo from '../assets/tech_logo/better-auth.png';
import zodLogo from '../assets/tech_logo/zod-validation.png';
import reactHookFormLogo from '../assets/tech_logo/react-hook-form.png';
import tanstackLogo from '../assets/tech_logo/tanstack.png';
import jestLogo from '../assets/tech_logo/jest.png';
import swaggerLogo from '../assets/tech_logo/swagger.png';
import prismaLogo from '../assets/tech_logo/prisma.png';
import reactRouterDomLogo from '../assets/tech_logo/react-router-dom.png';
import supabaseLogo from '../assets/tech_logo/supabase.png';
import neonLogo from '../assets/tech_logo/neon.png';
import jwtLogo from '../assets/tech_logo/jwt.png';

// Experience Section Logo's
import digitalentLogo from '../assets/company_logo/dts-logo.png';
import productzillaAcademyLogo from '../assets/company_logo/productzilla_logo.png';
import revouLogo from '../assets/company_logo/revou_logo.png';
import hariSeninLogo from '../assets/company_logo/harisenin_logo.png';

// Education Section Logo's
import bsiLogo from '../assets/education_logo/bsi_logo.png';
import nusaMandiriLogo from '../assets/education_logo/nusamandiri_logo.png';

// Project Section Logo's
import dentwisePreview from '../assets/work_logo/dentwise_preview.png';
import signalistPreview from '../assets/work_logo/signalist_preview.png';
import chillPreview from '../assets/work_logo/chill_preview.png';
import prodinPreview from '../assets/work_logo/prodin_preview.png';
import ghohotelPreview from '../assets/work_logo/ghohotel_preview.png';

interface Skill {
  name: string;
  logo: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Experience {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc: string;
  skills: string[];
}

interface Education {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
}

interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  github: string;
  webapp: string;
}

export const SkillsInfo: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'Javascript', logo: javascriptLogo },
      { name: 'Typescript', logo: typescriptLogo },
      { name: 'ReactJS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Zustand', logo: zustandLogo },
      { name: 'React Hook Form', logo: reactHookFormLogo },
      { name: 'React Router Dom', logo: reactRouterDomLogo },
      { name: 'Zod', logo: zodLogo },
      { name: 'NextJS', logo: nextjsLogo },
      { name: 'TailwindCSS', logo: tailwindcssLogo },
      { name: 'Shadcn UI', logo: shadcnLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'NodeJS', logo: nodejsLogo },
      { name: 'ExpressJS', logo: expressjsLogo },
      { name: 'Prisma', logo: prismaLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Better-Auth', logo: betterAuthLogo },
      { name: 'JWT', logo: jwtLogo },
      { name: 'Supabase', logo: supabaseLogo },
      { name: 'Neon', logo: neonLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'Javascript', logo: javascriptLogo },
      { name: 'Typescript', logo: typescriptLogo },
      { name: 'Java', logo: javaLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'Github', logo: githubLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'VSCode', logo: vscodeLogo },
      { name: 'Jest', logo: jestLogo },
      { name: 'Swagger', logo: swaggerLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Docker', logo: dockerLogo },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 0,
    img: hariSeninLogo,
    role: 'Junior Full Stack Web Developer',
    company: 'Harisenin',
    date: 'September 2025 - December 2025',
    desc: 'Bootcamp : Developed a full-stack video streaming web application using React.js and Express.js. Designed scalable frontend and backend architectures, implemented secure API integrations, managed application state effectively, and built a relational SQL database to ensure performance and data integrity.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Typescript', 'React JS', 'Node JS', 'Next JS', 'Tailwind CSS', 'Express JS', 'Nodemailer', 'JWT', 'MySQL', 'Redux', 'Zustand', 'MockAPI', 'Bcryptjs'],
  },
  {
    id: 1,
    img: revouLogo,
    role: 'Data & Software Engineer',
    company: 'Revou Tech Academy',
    date: 'August 2023 - December 2023',
    desc: 'Kampus Merdeka Independent Study Program : Served as Project Leader, successfully delivering high-impact software and data projects with excellent results. Developed a full-stack hotel website (native frontend & express js for backend) and conducted data analysis on large datasets using Python, Google Sheets, SQL, BigQuery, and Looker Studio to generate actionable insights. ',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node JS', 'Express JS', 'Prisma', 'Python', 'Google Sheets', 'SQL', 'BigQuery', 'Data Analytics'],
  },
  {
    id: 2,
    img: productzillaAcademyLogo,
    role: 'Frontend Web Developer',
    company: 'Productzilla Academy',
    date: 'February 2023 - June 2023',
    desc: 'Kampus Merdeka Independent Study Program : Led a team in developing a modern web application using React.js and Next.js with component-based architecture. Implemented Google SSO authentication, integrated RESTful APIs, applied unit testing with Jest, and supported deployment using Docker and CI/CD pipelines.',
    skills: ['HTML', 'CSS', 'Javascript', 'React JS', 'Next JS', 'Material UI', 'CI/CD (Github Action)', 'Jest', 'Docker', 'RESTful API', 'Google SSO'],
  },
  {
    id: 3,
    img: digitalentLogo,
    role: 'Junior Web Developer',
    company: 'Digital Talent Scholarship',
    date: 'October 2021 - November 2021',
    desc: 'Bootcamp : Built basic web applications by applying clean code principles and industry best practices. Focused on structured file organization, maintainable functions, and interactive multimedia-based web content.',
    skills: ['HTML', 'CSS', 'Javascript', 'PHP'],
  },
];

export const education: Education[] = [
  {
    id: 0,
    img: nusaMandiriLogo,
    school: 'Nusa Mandiri University',
    date: 'March 2024 - March 2025',
    grade: '3.98 / 4.00',
    desc: "Bachelor's Degree in Information Systems",
    degree: "Bachelor's Degree in Information Systems - S.Kom",
  },
  {
    id: 1,
    img: bsiLogo,
    school: 'Bina Sarana Informatika University',
    date: 'March 2021 - March 2024',
    grade: '3.97 / 4.00',
    desc: 'Diploma Degree in Information Systems',
    degree: 'Diploma Degree in Information Systems - A.Md.Kom',
  },
];

export const projects: Project[] = [
  {
    id: 0,
    title: 'Prodin',
    desc: 'Product Catalogue Inventory App',
    img: prodinPreview,
    tags: ['HTML', 'CSS', 'Javascript', 'Next JS', 'Material UI', 'MockAPI'],
    github: 'https://github.com/rizkydharma02/nextjs-prodin',
    webapp: 'https://nextjs-prodin.vercel.app/',
  },
  {
    id: 1,
    title: 'Gho Hotel',
    desc: 'Landing Page Hotel',
    img: ghohotelPreview,
    tags: ['HTML', 'CSS', 'Javascript', 'Express JS', 'Node JS'],
    github: 'https://github.com/rizkydharma02/FE-Ghohotel',
    webapp: 'https://rizkydharma02.github.io/FE-Ghohotel/',
  },
  {
    id: 2,
    title: 'Chill Streaming Video',
    desc: 'Streaming Video App',
    img: chillPreview,
    tags: ['HTML', 'CSS', 'Javascript', 'Express JS', 'Node JS', 'React JS', 'Nodemailer', 'JWT', 'bcryptjs'],
    github: 'https://github.com/rizkydharma02/mission-2-advanced-reactjs-harisenin',
    webapp: 'https://mission-2-advanced-reactjs-hariseni.vercel.app/dashboard',
  },
  {
    id: 3,
    title: 'Signalist Tracker',
    desc: 'Stock Market Tracker App',
    img: signalistPreview,
    tags: ['HTML', 'CSS', 'Javascript', 'TypeScript', 'Node JS', 'React JS', 'NextJS', 'TailwindCSS', 'Shadcn UI', 'Nodemailer', 'Better-Auth', 'Inngest', 'React Hook Form', 'MongoDB', 'FinnHub API', 'Mongoose'],
    github: 'https://github.com/rizkydharma02/signalist-stocks-tracker-app',
    webapp: 'https://signalist-stocks-tracker-app-rose.vercel.app/',
  },
  {
    id: 4,
    title: 'Dentwise',
    desc: 'AI Constultant for Dental Health App',
    img: dentwisePreview,
    tags: ['HTML', 'CSS', 'Javascript', 'TypeScript', 'Node JS', 'React JS', 'Next JS', 'Vapi API', 'Tailwind CSS', 'ShadCn UI', 'Clerk', 'Prisma'],
    github: 'https://github.com/rizkydharma02/dental-wise-app',
    webapp: 'https://dental-wise-app.vercel.app/',
  },
];
