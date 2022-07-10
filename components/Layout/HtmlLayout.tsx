/** @jsx h */
/** @jsxFrag Fragment */
import { tw } from "@twind";
import { Fragment, FunctionComponent, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { DARK_THEME } from "@utils/themes.ts";

export interface IHtmlLayout {
  title?: string;
}

const HtmlLayout: FunctionComponent<IHtmlLayout> = (props) => {
  const { children, title } = props;
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>{title || "KiNO WAS HERE"}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        >
        </link>
      </Head>
      <body
        className={tw
          `transition-color duration-100 bg-bgPrimary text-textPrimary`}
        style={DARK_THEME}
      >
        {children}
      </body>
    </Fragment>
  );
};

export default HtmlLayout;
