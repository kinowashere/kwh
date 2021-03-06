/** @jsx h */
import { FunctionComponent, h } from "preact";
import { tw } from "@twind";
import BaseLayout from "@components/Layout/BaseLayout.tsx";
import { PageProps } from "$fresh/server.ts";

const techs: { title: string; sub: string[] }[] = [
  {
    title: "PHP",
    sub: ["Laravel", "Magento 2"],
  },
  {
    title: "JS / TS",
    sub: ["React"],
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
    country: "πͺπͺ",
    place: "Tallinn University of Technology",
    type: "BSc in Cyber Security",
    time: "2018 - Present",
  },
  {
    country: "πͺπΈ",
    place: "Universidad Carlos III de Madrid",
    type: "Erasmus Exchange",
    time: "Fall 2019",
  },
  {
    country: "π―π΅",
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
    flag: "π²π½",
    language: "Spanish",
    level: "Native",
  },
  {
    flag: "πΊπΈ",
    language: "English",
    level: "Fluent",
    extra: "TOEFL ITP 647",
  },
  {
    flag: "π―π΅",
    language: "Japanese",
    level: "Beginner",
  },
];

const Cv: FunctionComponent<PageProps> = ({ route }) => {
  const moduleTitle = tw`text-4xl font-bold text-uppercase my-6`;
  function renderTechnologies() {
    return (
      <div>
        <h2 className={moduleTitle}>Technologies</h2>
        <div className={tw`text-xl flex flex-col space-y-2`}>
          {techs.map(({ title, sub }) => (
            <div className={tw`flex space-x-4 text-xl`}>
              <span className={tw`font-bold`}>{title}</span>
              <span>{sub.join(", ")}</span>
            </div>
          ))}
        </div>
        <div className={tw`font-bold mt-6 text-2xl`}>
          Ansible - Docker - SQL - Linux
        </div>
      </div>
    );
  }

  function renderJobs() {
    return (
      <div>
        <h2 className={moduleTitle}>Career Experience</h2>
        <div className={tw`text-xl flex flex-col space-y-6`}>
          {jobs.map(({ title, time, company, description }) => (
            <div className={tw`flex flex-col space-y-2`}>
              <div className={tw`flex space-x-4 text-xl`}>
                <span className={tw`font-bold`}>{title}</span>
                <span className={tw`font-light`}>{company} | {time}</span>
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
        <div className={tw`text-xl flex flex-col space-y-6`}>
          {education.map(({ country, type, place, time }) => (
            <div className={tw`flex flex-col space-y-1`}>
              <div className={tw`flex space-x-4 text-xl`}>
                <span>{country}</span>
                <span className={tw`font-bold`}>{place}</span>
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
        <div
          className={tw
            `text-xl flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0 md:space-x-4`}
        >
          {languages.map(({ language, extra, level, flag }) => (
            <div className={tw`flex flex-col space-y-1`}>
              <div className={tw`flex space-x-4 text-xl`}>
                <span>{flag}</span>
                <span className={tw`font-bold`}>{language}</span>
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
      <div className={tw`w-full flex flex-col my-6 space-y-10`}>
        <div className={tw`grid justify-center md:grid-cols-2 md:flex-row`}>
          <img
            src="/me.png"
            alt="It's-a-me"
            className={tw
              `maw-w-[300px] max-h-[300px] rounded-full mx-auto md:mx-0`}
          />
          <div
            className={tw
              `flex flex-col space-y-4 items-center md:items-start text-uppercase`}
          >
            <span
              className={tw
                `text-6xl font-bold md:max-w-[50%] tracking-widest text-center md:text-left leading-snug`}
            >
              Manuel Trinidad Morales
            </span>
            <span className={tw`text-2xl font-light`}>Software Engineer</span>
            <a className={tw`font-mono text-sm`} href="/CV.pdf">
              π [PDF] Download
            </a>
          </div>
        </div>
        <div className={tw`grid justify-center md:grid-cols-2 md:flex-row`}>
          <div className={tw`flex flex-col space-y-6 md:pr-4`}>
            <div>
              <h2 className={moduleTitle}>Contact</h2>
              <div className={tw`text-xl flex flex-col space-y-2`}>
                <a href="https://kinowashere.com/" className={tw`underline`}>
                  kinowashere.com
                </a>
                <a
                  href="mailto:manuel.trinidad.mo@gmail.com"
                  className={tw`underline`}
                >
                  manuel.trinidad.mo@gmail.com
                </a>
                <span>πͺπͺ Tallinn, Estonia</span>
                <a
                  href="https://github.com/kinowashere"
                  className={tw`underline font-bold`}
                >
                  GitHub: kinowashere
                </a>
              </div>
            </div>
            <div>
              <h2 className={moduleTitle}>Achievements</h2>
              <div className={tw`text-xl flex flex-col space-y-2`}>
                <div className={tw`flex flex-col`}>
                  <span>
                    Finalist@<a
                      href="https://sites.google.com/view/kyberolympia/eng/about-the-project"
                      className={tw`underline`}
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
            <div className={tw`flex flex-col text-xl`}>
              <span>
                This website was built on{" "}
                <span className={tw`font-bold`}>π Fresh + π¦ Deno</span>
              </span>
              <span>
                Check it out at{" "}
                <a
                  className={tw`underline`}
                  href="https://github.com/kinowashere/kwh"
                >
                  github.com/kinowashere/kwh
                </a>
              </span>
            </div>
          </div>
          <div className={tw`flex flex-col space-y-6 md:pr-4`}>
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
