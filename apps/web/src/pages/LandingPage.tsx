import demo from "../assets/demo.svg";

import Button from "../components/ui/Button";
import Browser from "../components/Browser";

const LandingPage = () => {
  return (
    <>
      <section className="px-4 py-24 h-[36rem] bg-neutral-900 text-neutral-50  w-full bg-grid-white/[0.2] relative grid place-items-center ">
        <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div id="jumbotron" className="z-10 grid place-items-center">
          <h1 className="font-display mb-4 text-4xl md:text-5xl lg:text-6xl dark:text-white">
            Hajimari Online
          </h1>
          <p className="font-text mb-8 text-lg font-normal text-neutral-300 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            A dynamic, highly customizable, start page.
          </p>
          <div className="flex flex-col space-x-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <div>
              <Browser />
            </div>
            <div>
              <Button
                src={demo}
                text="See It in Action"
                href="https://app.hajimari.online"
                className="bg-neutral-50 text-neutral-50 hover:text-neutral-950"
                subClassName="bg-neutral-800 group"
                imgClassName="filter invert group-hover:invert-0"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-2xl font-textBold ">Dynamic Search Engine</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi.
          </p>
          <img src="search-engine.png" alt="Dynamic Search Engine" />
        </div>

        <div>
          <h3 className="text-2xl font-textBold ">Customizations</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod.
          </p>
          <img src="customizations.png" alt="Customizations" />
        </div>

        <div>
          <h3 className="text-2xl font-textBold ">Coming Soon</h3>
          <p>Widgets</p>
          <img src="widgets.png" alt="Widgets" />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
