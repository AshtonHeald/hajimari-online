import logo from "../assets/Logo.png";
import { TbBrandGithub, TbLanguageHiragana } from "react-icons/tb";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between h-11 px-3">
        <a href="https://flowbite-react.com">
          <img src={logo} className="h-5" alt="Hajimari Online Logo" />
        </a>
        <div className="flex gap-1.5">
          <button className="p-1.5">
            <TbLanguageHiragana className="size-6" />
          </button>
          <a className="p-1.5" href="https://github.com/ashtonheald">
            <TbBrandGithub className="size-6" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
