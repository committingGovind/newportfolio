import { atom } from "recoil";

export const experience = atom({
  key: "experience",
  default: [
    {
      org: "Societe Generale",
      duration: "July '22 - Oct '23",
      techStack: [
        "React",
        "JavaScript",
        "Java",
        "Springboot",
        "SQL",
        "Shell script",
        "Bash",
        "GIT",
        "JIRA",
        "Agile Framework",
      ],
      info: [
        "Market Data intergration: Developed automated processes for capturing market data (EOD data etc.) from legacy & new sources like BB, RT, LME thus replacing manual intervention thereby saving 3+ man-hours/day.",
        "REST APIs for Downstream Applications: Developed internal APIs based on business requirements handling over 5Lakh ISINs for market data & over 4lakh ISINs for liquidity data.",
        "Frontend Development: Worked on development of frontend for legacy APIs thus easing BA’s workload & saving approx 5+ man-hours/week of BA’s query time.",
      ],
    },
    {
      org: "Contractual freelancing",
      duration: "",
      techStack: [
        "ReactJS",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Prisma",
        "Tailwind CSS",
      ],
      info: [
        "Frontend: Developed multiple web pages for an existing website thereby existing its functionality and usability.",
        "Backend: Implemented CRUD operations for the extended website allowing users to sign-up for newsletters and owner pushed posts.",
      ],
    },
  ],
});
