import { IconType } from "react-icons";
import {
  DiCode,
  DiReact,
  DiNodejsSmall,
  DiJavascript1,
  DiPython,
  DiDatabase,
  DiMongodb,
  DiPostgresql,
  DiHtml5,
  DiGit
} from "react-icons/di";

const techs = [
  { tech: "React", Icon: DiReact },
  { tech: "Node", Icon: DiNodejsSmall },
  { tech: "JavaScript", Icon: DiJavascript1 },
  { tech: "React-Native", Icon: DiReact },
  { tech: "Redux", Icon: DiCode },
  { tech: "Nest", Icon: DiCode },
  { tech: "Python", Icon: DiPython },
  { tech: "GraphQL", Icon: DiCode },
  { tech: "Relational data base", Icon: DiDatabase },
  { tech: "MongoDB", Icon: DiMongodb },
  { tech: "PostgreSQL", Icon: DiPostgresql },
  { tech: "HTML5", Icon: DiHtml5 },
  { tech: "CSS", Icon: DiCode },
  { tech: "CMS", Icon: DiCode },
  { tech: "TAILWIND", Icon: DiCode },
  { tech: "GIT", Icon: DiGit },
  { tech: "NEXT.JS", Icon: DiCode },
  { tech: "Flutter", Icon: DiCode },
];

const techSnipets = (tech: string, Icon: IconType) => (
  <span className="text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:text-gray-400 border border-gray-500 ">
    {Icon ? <Icon size={30} /> : <DiCode size={30} />}
    {tech}
  </span>
);

export default function TechSection() {
  return (
    <div className="bg-white mt-12 grid grid-cols-5  gap-4">
      {techs.map(({ tech, Icon }, index) => (
        <>{techSnipets(tech, Icon)}</>
      ))}
    </div>
  );
}
