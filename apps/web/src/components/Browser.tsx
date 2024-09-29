import React, { useEffect, useState } from "react";
import Button from "./ui/Button.tsx";
import chrome from "../assets/chrome.svg";
import firefox from "../assets/firefox.svg";

type BrowserType = "Chrome" | "Firefox" | "Other";

const getBrowserType = (): BrowserType => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes("firefox")) {
    return "Firefox";
  } else if (userAgent.includes("chrome")) {
    return "Chrome";
  }
  return "Other";
};

const BrowserExtensionLink: React.FC = () => {
  const [browserType, setBrowserType] = useState<BrowserType>("Other");

  useEffect(() => {
    setBrowserType(getBrowserType());
  }, []);

  switch (browserType) {
    case "Chrome":
      return (
        <div>
          <Button
            className="bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600"
            subClassName="bg-neutral-800"
            href="https://chrome.google.com/webstore/detail/your-extension-id"
            src={chrome}
            text="Add to Browser"
          />
          <p className="text-center text-sm text-gray-300">Chrome browsers</p>
        </div>
      );
    case "Firefox":
      return (
        <div>
          <Button
            className="bg-gradient-to-br from-pink-500 to-orange-400 "
            subClassName="bg-neutral-800"
            href="https://addons.mozilla.org/en-US/firefox/addon/your-addon-id"
            src={firefox}
            text="Add to Browser"
          />
          <p className="text-center text-sm text-gray-300">
            Firefox based browsers
          </p>
        </div>
      );
    default:
      return <span>Browser not supported</span>;
  }
};

export default BrowserExtensionLink;
