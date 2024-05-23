import { atom } from "recoil";

export const workstack = atom({
  key: "workstack",
  default: [
    {
      name: "Societe Generale",
      duration: "July '22 - Oct '23",
      title: "Software Engineer [Full time]",
      location: "Bengaluru",
      works: [
        "Market Data intergration: Developed automated processes for capturing market data (EOD data etc.) from legacy & new sources like BB, RT, LME thus replacing manual intervention thereby saving 3+ man-hours/day.",
        "REST APIs for Downstream Applications: Developed internal APIs based on business requirements handling over 5Lakh ISINs for market data & over 4lakh ISINs for liquidity data.",
        "Frontend Development: Worked on development of frontend for legacy APIs thus easing BA’s workload & saving approx 5+ man-hours/week of BA’s query time.",
      ],
      techstack: [
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
    },
  ],
});
