import { FunctionComponent } from "preact";

export interface INavbar {
  route?: string;
}

const Navbar: FunctionComponent<INavbar> = ({ route }) => {
  const linkClassName = (link: string) =>
    `hover:underline ${route === link ? "font-bold underline" : ""}`;
  return (
    <nav className="flex justify-between items-center my-4">
      <a className="font-title text-3xl" href="/">KiNO Was Here</a>
      <div className="flex justify-between items-center space-x-3 text-xl">
        <a href="/cv" className={linkClassName("/cv")}>CV</a>
      </div>
    </nav>
  );
};

export default Navbar;
