/** @jsx h */
import { FunctionComponent, h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/src/server/types.ts";
import BaseLayout from "@components/Layout/BaseLayout.tsx";

const NotFound: FunctionComponent<PageProps> = () => {
  return (
    <BaseLayout title="KiNO WAS NOT HERE">
      <div className={tw`flex flex-col mx-auto mt-10`}>
        <img
          src="/404.gif"
          alt="Snowy 404 :("
          className={tw`w-full md:w-xl rounded-xl`}
        />
        <div className={tw`text-5xl mx-auto my-10 font-bold`}>404</div>
        <span className={tw`text-3xl font-light mx-auto`}>
          This just means you found this shiba in the snow! 🐕
        </span>
      </div>
    </BaseLayout>
  );
};

export default NotFound;
