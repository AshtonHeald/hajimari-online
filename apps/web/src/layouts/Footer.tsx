import Logo from "../assets/Logo-Square.png";
import { TbBrandGithub, TbBrandX } from "react-icons/tb";
import { Button } from "@/components/ui/Button";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-50 px-3 ">
      <div className="flex items-center justify-between py-2.5">
        <div className="flex items-end space-x-2 w-48">
          <img src={Logo} className="mb-1 h-10" alt="Hajimari Online Logo" />
          <div className="flex flex-col">
            <span className="text-lg font-textBold">Hajimari Online</span>
            <span className="text-sm text-muted-foreground">
              Version 1.0.0-beta.1
            </span>
          </div>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            <li>
              <Button href="" isLink variant="link">
                Chrome Web Store
              </Button>
            </li>
            <li>
              <Button href="" isLink variant="link">
                Firefox Add-ons
              </Button>
            </li>
            <span className="p-[3px]">|</span>
            <li>
              <Button href="" isLink variant="link">
                Privacy & Legal
              </Button>
            </li>
            <span className="p-[3px]">|</span>
            <li>
              <Button href="" isLink variant="link">
                Contact
              </Button>
            </li>
          </ul>
        </nav>

        <div className="flex justify-end gap-1.5 w-48">
          <Button
            href="https://x.com/HajimariOnline"
            size="icon"
            variant="ghost"
          >
            <TbBrandX className="size-6" />
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
      </div>
      <hr className="border-neutral-600" />
      <div className="py-4 text-center text-sm">
        <p>
          &copy; 2024 Hajimari Online. Licensed under the&nbsp;
          <a className="underline" href="">
            MIT License
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
