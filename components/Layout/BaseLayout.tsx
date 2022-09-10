import { FunctionComponent } from "preact";
import HtmlLayout from "@components/Layout/HtmlLayout.tsx";
import Navbar from "@components/Layout/Navbar.tsx";

export interface IBaseLayout {
  title?: string;
  route?: string;
}

const BaseLayout: FunctionComponent<IBaseLayout> = (props) => {
  const { children, title, route } = props;
  return (
    <HtmlLayout title={title}>
      <div className="max-w-full md:max-w-[900px] px-4 mx-auto flex flex-col">
        <Navbar route={route} />
        {children}
      </div>
    </HtmlLayout>
  );
};

export default BaseLayout;
