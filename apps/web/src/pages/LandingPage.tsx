import { Button } from "@/components/ui/button";
import Browser from "../components/Browser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TbCircleArrowRight,
  TbAccessible,
  TbPalette,
  TbBolt,
  TbWorldSearch,
  TbPhotoVideo,
  TbSettings,
} from "react-icons/tb";

const LandingPage = () => {
  return (
    <>
      <Jumbotron />
      <Quote />
      <FeaturesSection />
      <section></section>
    </>
  );
};

export default LandingPage;

// Jumbotron Section Component
function Jumbotron() {
  return (
    <section className="px-4 py-24 bg-neutral-900 text-neutral-50  w-full bg-grid-white/[0.2] relative grid place-items-center ">
      <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="z-10 grid place-items-center mb-1">
        <h1 className="font-display mb-5 text-4xl md:text-5xl lg:text-6xl dark:text-white">
          Hajimari Online
        </h1>
        <p className="font-text p-1 rounded mb-9 text-lg font-normal text-neutral-900 lg:text-xl bg-neutral-50">
          A dynamic, highly customizable, start page.
        </p>
        <div className="flex flex-col space-x-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <div>
            <Browser />
          </div>
          <div>
            <Button
              isLink
              href="https://addons.mozilla.org/en-US/firefox/addon/your-addon-id"
              variant="default"
            >
              <TbCircleArrowRight className="size-6 mr-1 filter group-hover:invert-0" />
              See It in Action
            </Button>
            <p className="text-center text-xs text-gray-300">
              https://app.hajimari.online
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Quote Section Component
function Quote() {
  return (
    <section className="py-20 px-6 grid place-items-center ">
      <p className="font-text p-1 rounded text-lg font-normal text-neutral-50 lg:text-xl bg-neutral-950">
        "Every day is a journey, and the journey itself is home." - Matsuo Bashō
      </p>
    </section>
  );
}
// Features Section Componet
function FeaturesSection() {
  const features = [
    {
      icon: <TbSettings className="h-8 w-8 mb-2" />,
      title: "Easy Configuration",
      description:
        "Set up and modify your start page with a user-friendly interface.",
    },
    {
      icon: <TbPalette className="h-8 w-8 mb-2" />,
      title: "Themes & Styling",
      description:
        "Choose from various themes or create your own custom style.",
    },
    {
      icon: <TbPhotoVideo className="h-8 w-8 mb-2" />,
      title: "Video Backgrounds",
      description: "Arrange your widgets and links in any way you prefer.",
    },

    {
      icon: <TbWorldSearch className="h-8 w-8 mb-2" />,
      title: "Dynamic Web Search",
      description: "Access your favorite sites and tools with just one click.",
    },

    {
      icon: <TbBolt className="h-8 w-8 mb-2" />,
      title: "Fast Performance",
      description:
        "Enjoy a lightning-fast start page that loads in an instant.",
    },
    {
      icon: <TbAccessible className="h-8 w-8 mb-2" />,
      title: "Fully Accessible",
      description: "Integrate with various productivity apps and services.",
    },
  ];

  return (
    <section className="w-full  bg-background max-w-[800px] mx-auto">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-textBold  tracking-tighter sm:text-5xl">
            Features
          </h2>
          <p className="max-w-[900px] text-muted-foreground sm:text-xl/relaxed">
            Discover the powerful features that make our custom start page the
            perfect launchpad for your daily browsing.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-4">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
