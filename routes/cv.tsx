import { FunctionComponent } from "preact";
import BaseLayout from "@components/Layout/BaseLayout.tsx";
import { PageProps } from "$fresh/server.ts";

const techs: { title: string; sub: string[]; extra?: string[] }[] = [
  {
    title: "JS / TS",
    sub: ["React"],
    extra: [
      "⚡redux | tailwind  | Gatsby | react-query",
      "📖rollup component library setup from 0",
    ],
  },
  {
    title: "PHP",
    sub: ["Laravel", "Magento 2"],
  },
  {
    title: "Python",
    sub: ["Django", "sklearn"],
  },
  {
    title: "C#",
    sub: ["Unity", ".NET Core"],
  },
  {
    title: "Java",
    sub: ["Spring Boot"],
  },
];

const jobs: {
  title: string;
  company: string;
  time: string;
  description: string;
}[] = [
  {
    title: "Developer",
    company: "Outvio",
    time: "2022 - Present",
    description: "Develop FE using React-based tools",
  },
  {
    title: "Developer",
    company: "Scandiweb",
    time: "2021 - 2022",
    description:
      "Develop Magento 2 BE and FE using React, Node and Docker-based tools",
  },
  {
    title: "3D Designer for AR",
    company: "322 Design",
    time: "2018",
    description:
      "Create and design 3D models for Unity using AR technologies for a development fair",
  },
];

const education: {
  country: string;
  place: string;
  type: string;
  time: string;
}[] = [
  {
    country: "🇪🇪",
    place: "Tallinn University of Technology",
    type: "BSc in Cyber Security",
    time: "2018 - Present",
  },
  {
    country: "🇪🇸",
    place: "Universidad Carlos III de Madrid",
    type: "Erasmus Exchange",
    time: "Fall 2019",
  },
  {
    country: "🇯🇵",
    place: "University of Electro-Communications",
    type: "JUSST Exchange",
    time: "Sprint 2021",
  },
];

const languages: {
  flag: string;
  language: string;
  level: string;
  extra?: string;
}[] = [
  {
    flag: "🇲🇽",
    language: "Spanish",
    level: "Native",
  },
  {
    flag: "🇺🇸",
    language: "English",
    level: "Fluent",
    extra: "TOEFL ITP 647",
  },
  {
    flag: "🇯🇵",
    language: "Japanese",
    level: "Beginner",
  },
];

const Cv: FunctionComponent<PageProps> = ({ route }) => {
  const moduleTitle = "text-4xl font-bold text-uppercase my-6";
  function renderTechnologies() {
    return (
      <div>
        <h2 className={moduleTitle}>Technologies</h2>
        <div className="text-xl flex flex-col space-y-2">
          {techs.map(({ title, sub, extra }) => (
            <>
              <div className="flex space-x-4 text-xl">
                <span className="font-bold">{title}</span>
                <span>{sub.join(", ")}</span>
              </div>
              {extra &&
                extra.map((item) => (
                  <span className="font-bold text-sm">{item}</span>
                ))}
            </>
          ))}
        </div>
        <div className="font-bold mt-6 text-2xl">
          Docker - Mongo - SQL - Linux
        </div>
      </div>
    );
  }

  function renderJobs() {
    return (
      <div>
        <h2 className={moduleTitle}>Career Experience</h2>
        <div className="text-xl flex flex-col space-y-6">
          {jobs.map(({ title, time, company, description }) => (
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-4 text-xl">
                <span className="font-bold">{title}</span>
                <span className="font-light">{company} | {time}</span>
              </div>
              <span>{description}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderEducation() {
    return (
      <div>
        <h2 className={moduleTitle}>Education</h2>
        <div className="text-xl flex flex-col space-y-6">
          {education.map(({ country, type, place, time }) => (
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-4 text-xl">
                <span>{country}</span>
                <span className="font-bold">{place}</span>
              </div>
              <span>{type}</span>
              <span>{time}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderLanguages() {
    return (
      <div>
        <h2 className={moduleTitle}>Languages</h2>
        <div className="text-xl flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0 md:space-x-4">
          {languages.map(({ language, extra, level, flag }) => (
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-4 text-xl">
                <span>{flag}</span>
                <span className="font-bold">{language}</span>
              </div>
              <span>{level}</span>
              {extra && <span>{extra}</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <BaseLayout route={route}>
      <div className="w-full flex flex-col my-6 space-y-10">
        <div className="grid justify-center md:grid-cols-2 md:flex-row">
          <img
            src="/me.png"
            alt="It's-a-me"
            className="maw-w-[300px] max-h-[300px] rounded-full mx-auto md:mx-0"
          />
          <div className="flex flex-col space-y-4 items-center md:items-start text-uppercase">
            <span className="text-6xl font-bold md:max-w-[50%] tracking-widest text-center md:text-left leading-snug">
              Manuel Trinidad Morales
            </span>
            <span className="text-2xl font-light">Software Engineer</span>
            <a className="font-mono text-sm" href="/CV.pdf">
              📄 [PDF] Download
            </a>
          </div>
        </div>
        <div className="grid justify-center md:grid-cols-2 md:flex-row">
          <div className="flex flex-col space-y-6 md:pr-4">
            <div>
              <h2 className={moduleTitle}>Contact</h2>
              <div className="text-xl flex flex-col space-y-2">
                <a href="https://kinowashere.com/" className="underline">
                  kinowashere.com
                </a>
                <a
                  href="mailto:manuel.trinidad.mo@gmail.com"
                  className="underline"
                >
                  manuel.trinidad.mo@gmail.com
                </a>
                <span>🇪🇪 Tallinn, Estonia</span>
                <a
                  href="https://github.com/kinowashere"
                  className="underline font-bold"
                >
                  GitHub: kinowashere
                </a>
              </div>
            </div>
            <div>
              <h2 className={moduleTitle}>Achievements</h2>
              <div className="text-xl flex flex-col space-y-2">
                <div className="flex flex-col">
                  <span>
                    Finalist@<a
                      href="https://sites.google.com/view/kyberolympia/eng/about-the-project"
                      className="underline"
                    >
                      CyberSpike
                    </a>
                  </span>
                  <span className="font-bold">Summer 2020</span>
                </div>
                <span>
                  Part of the final contenders in one of Estonia's biggest
                  attack / defense competitions
                </span>
              </div>
            </div>
            {renderTechnologies()}
            <div className="flex flex-col text-xl">
              <span>
                This website was built on{" "}
                <span className="font-bold">🍋 Fresh + 🦖 Deno</span>
              </span>
              <span>
                Check it out at{" "}
                <a
                  className="underline"
                  href="https://github.com/kinowashere/kwh"
                >
                  github.com/kinowashere/kwh
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-6 md:pr-4">
            {renderJobs()}
            {renderEducation()}
            {renderLanguages()}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Cv;
