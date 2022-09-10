import { FunctionComponent } from "preact";
import BaseLayout from "../components/Layout/BaseLayout.tsx";
import { PageProps } from "$fresh/server.ts";

const Index: FunctionComponent<PageProps> = () => {
  const linkClassName = 'font-bold underline';
  return (
    <BaseLayout>
      <div className="flex flex-col-reverse md:flex-row max-w-max mx-auto my-4">
        <img src="/henloFrens.gif" alt="Wink wink" className="rounded-xl" />
        <div className="flex flex-col md:ml-4">
          <h1 className="text-3xl font-bold">Manuel Trinidad</h1>
          <div className="flex flex-col my-4 text-xl">
            <span>
              {"GitHub > "}
              <a
                href="https://github.com/kinowashere"
                className={linkClassName}
              >
                kinowashere
              </a>
            </span>
            <span>
              {"LinkedIn > "}
              <a
                href="https://linkedin.com/in/matrin"
                className={linkClassName}
              >
                matrin
              </a>
            </span>
            <span>
              {"Instagram > "}
              <a
                href="https://instagram.com/manuels.insta"
                className={linkClassName}
              >
                manuels.insta
              </a>
            </span>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Index;
