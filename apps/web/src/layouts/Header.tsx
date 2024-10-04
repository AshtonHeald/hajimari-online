import logo from "../assets/Logo.png";
import { TbBrandGithub, TbLanguageHiragana } from "react-icons/tb";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between h-11 px-3">
        <a href="https://hajimari.online">
          <img src={logo} className="h-9 py-2" alt="Hajimari Online Logo" />
        </a>
        <div className="flex gap-1.5">
          <Button size="icon" variant="ghost">
            <TbLanguageHiragana className="size-6" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            isLink
            href="https://github.com/AshtonHeald/hajimari-online"
          >
            <TbBrandGithub className="size-6" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
