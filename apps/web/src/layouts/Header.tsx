import { Navbar } from "flowbite-react";

import logo from "../assets/Logo.png";
import github from "../assets/github.svg";
import language from "../assets/language.svg";

const Header = () => {
  return (
    <header>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={logo} className="mr-3 h-5" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex gap-3">
          <button>
            <img src={language} className="h-6" alt="" />
          </button>
          <a className="flex gap-1" href="https://github.com/ashtonheald">
            <img src={github} className="h-6" alt="" />
          </a>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
