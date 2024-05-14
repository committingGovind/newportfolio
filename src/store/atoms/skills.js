import { atom } from "recoil";

export const skills = atom({
  key: "skills",
  default: [
    {
      title: "Languages",
      values: [
        "JavaScript",
        "C++",
        "Java",
        "TypeScript",
        "SQL",
        "Python",
        "HTML",
        "Bash",
      ],
    },
    {
      title: "Frameworks",
      values: [
        "ReactJS",
        "Node.js",
        "Spring boot",
        "Next.js",
        "Tailwind",
        "CSS",
      ],
    },
    {
      title: "Tools",
      values: ["MongoDB", "Prisma", "Docker", "MySQL", "GIT", "JIRA"],
    },
    {
      title: "Soft Skills",
      values: [
        "Collaboration",
        "Ownership",
        "Agile",
        "Writing",
        "Public Speaking",
        "Time Management",
      ],
    },
  ],
});
