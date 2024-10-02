import logo from "../assets/Logo-square.png";
import { TbBrandGithub, TbBrandX } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-50 px-3 ">
      <div className="flex items-center justify-between py-2.5">
        <div className="flex items-end space-x-2 w-48">
          <img src={logo} className="mb-1 h-10" alt="Hajimari Online Logo" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Hajimari Online</span>
            <span className="text-sm text-muted-foreground">Version 1.0.0</span>
          </div>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            <li>
              <a href="">Chrome Web Store</a>
            </li>
            <li>
              <a href="">Firefox Add-ons</a>
            </li>
            <span>|</span>
            <li>
              <button>Privacy & Legal</button>
            </li>
            <span>|</span>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </nav>

        <div className="flex justify-end gap-1.5 w-48">
          <a href="" className="p-1.5">
            <TbBrandGithub className="size-6" />
          </a>
          <a href="" className="p-1.5">
            <TbBrandX className="size-6" />
          </a>
        </div>
      </div>
      <hr className="border-neutral-600" />
      <div className="py-4 text-center text-sm">
        <p>&copy; 2024 Hajimari Online. Licensed under the MIT License.</p>
      </div>
    </footer>
  );
};

export default Footer;
