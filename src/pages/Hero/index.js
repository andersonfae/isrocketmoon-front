import { Link } from "react-router-dom";
import { i18next } from "../../translate/i18n";

export function Hero() {
  return (
    <>
      <div
        id="hero"
        className="px-4 z-10 relative h-screen pt-60 pb-96 text-white text-center"
      >
        <div className="z-50 relative">
          <h1 className="text-4xl font-serif leading-tight">
            {i18next.t("titles.appH1")}
            <span className="bg-[#1CBDF9] shadow-lg shadow-cyan-500/50">
              {i18next.t("titles.appSpan")}
            </span>
          </h1>
          <h2 className="text-base py-7">{i18next.t("description.appH2")}</h2>
          <section className="flex justify-center">
            <Link to={"/jobs"}>
              <button className="flex shadow border border-[#8718E1] bg-[#8718E1] hover:bg-[#8718E1] focus:shadow-outline focus:outline-none text-white text-base py-2.5 px-4 rounded uppercase">
                {i18next.t("buttons.seeJobs")}
              </button>
            </Link>
            <Link to={"/jobs/createjob"}>
              <button className="flex shadow border border-white focus:shadow-outline focus:outline-none text-white text-base py-2.5 px-4 rounded uppercase ml-2.5">
                {i18next.t("buttons.postAJob")}
              </button>
            </Link>
          </section>
        </div>
        <div
          id="gradient-ball"
          className="absolute top-10 right-15 z-0 rounded-full bg-gradient-to-r from-[#18b1e19a] via-[#8718E1] to-[#8718e1bd] w-[53rem] h-[53rem]"
        ></div>
      </div>

      <div className="flex flex-col absolute bottom-5 left-1/2 mt-44 z-40 lg:invisible">
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white opacity-70 my-3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white opacity-20 "
        ></button>
      </div>
    </>
  );
}
