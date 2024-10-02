import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TbBrandFirefox, TbBrandChrome } from "react-icons/tb";

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
            isLink
            href="https://chrome.google.com/webstore/detail/your-extension-id"
            className="bg-gradient-to-br from-green-400 to-blue-600"
            variant="browser"
          >
            <TbBrandChrome className="size-6 mr-1" />
            Add to Browser
          </Button>
          <p className="text-center text-xs text-gray-300">Chrome browsers</p>
        </div>
      );
    case "Firefox":
      return (
        <div>
          <Button
            isLink
            href="https://addons.mozilla.org/en-US/firefox/addon/your-addon-id"
            className="bg-gradient-to-br from-pink-500 to-orange-400"
            variant="browser"
          >
            <TbBrandFirefox className="size-6 mr-1" />
            Add to Browser
          </Button>

          <p className="text-center text-xs text-gray-300">
            Firefox based browsers
          </p>
        </div>
      );
    default:
      return <span>Browser not supported</span>;
  }
};

export default BrowserExtensionLink;
