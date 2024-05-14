import { atom } from "recoil";

export const experience = atom({
  key: "experience",
  default: [
    {
      org: "Societe Generale",
      duration: "July 2022 - Oct 2023",
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
  ],
});
