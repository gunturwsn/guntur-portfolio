export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  href?: string;
  summary: string[];
  stack?: string[];
};

export const experiences: Experience[] = [
  {
    company: "PT. Surya Madistrindo",
    role: "Application Development Specialist",
    period: "Jun, 2022 - Oct, 2025",
    location: "Jakarta / Onsite",
    href: "https://qrmenu.id",
    summary: [
      "Designed and implemented an internal E-Budgeting System using Java (Spring MVC) and ZK Framework, automating annual financial planning workflows and significantly reducing manual workloads.",
      "Developed a Sales Reporting Web App enabling offline data entry and synchronization once connected, improving reporting accuracy and efficiency across 30+ regional branches.",
      "Collaborated with cross-functional teams to build and integrate internal procurement and approval workflows, connecting regional offices with headquarters to accelerate and improve transparency in budget approvals.",
    ],
    stack: ["Java", "Java Spring MVC", "Zkoss", "Oracle SQL"],
  },
  {
    company: "MANUVA",
    role: "Software Engineer",
    period: "Oct,2021 - Jun, 2022",
    location: "Jakarta / Remote",
    href: "https://hera.id",
    summary: [
      "Built a Progressive Web App (PWA) called MANUVA-GOBIZ using Nuxt.js (Vue.js) and Node.js to streamline operational workflows for SME merchants, improving order handling efficiency.",
      "Developed a real-time inventory management system using NestJS, GraphQL, and MongoDB, ensuring accurate stock synchronization and reducing manual reconciliation efforts across multiple warehouses.",
      "Integrated Tokopedia Print APIs to automate order processing within the Tokopedia ecosystem, eliminating repetitive data handling and improving overall system reliability.",
    ],
    stack: [
      "Javascript",
      "NodeJS",
      "ExpressJS",
      "VueJS",
      "Typescript",
      "NuxtJS",
      "NestJS",
      "MySQL",
      "MongoDB",
      "GraphQL",
      "Redis",
    ],
  },
  {
    company: "PT. Trees Solutions",
    role: "Backend Developer",
    period: "Oct, 2020 - Oct, 2021",
    location: "Jakarta / Remote",
    summary: [
      "Developed and maintained the backend of HARPA HRIS using Python (Django) and PostgreSQL, delivering a stable and scalable human resource management system for enterprise clients.",
      "Improved backend performance and reliability by optimizing database queries, refactoring legacy modules, and applying modern software engineering best practices.",
      "Collaborated with cross-functional teams to implement core HR modules, including attendance tracking, payroll automation, and employee management features.",
    ],
    stack: ["Python", "Django", "PostgreSQL", "Redis"],
  },
];
