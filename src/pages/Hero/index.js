import { Link } from "react-router-dom";

export function Hero() {
  return (
    <>
      <div
        id="hero"
        className="px-4 z-10 relative h-full pt-60 pb-96 text-white text-center"
      >
        <div className="z-50 relative">
          <h1 className="text-4xl font-serif leading-tight">
            Connecting the jobs with the{" "}
            <span className="bg-[#1CBDF9] shadow-lg shadow-cyan-500/50">
              best gamers
            </span>
          </h1>
          <h2 className="text-base py-7">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </h2>
          <section className="flex justify-center">
            <Link to={"/jobs"}>
              <button className="flex shadow border border-[#8718E1] bg-[#8718E1] hover:bg-[#8718E1] focus:shadow-outline focus:outline-none text-white text-base py-2.5 px-4 rounded uppercase">
                See Jobs
              </button>
            </Link>
            <Link to={"/jobs/createjob"}>
              <button className="flex shadow border border-white focus:shadow-outline focus:outline-none text-white text-base py-2.5 px-4 rounded uppercase ml-2.5">
                Post a Job
              </button>
            </Link>
          </section>
        </div>
        <div
          id="gradient-ball"
          className="absolute top-10 right-15 z-0 rounded-full bg-gradient-to-r from-[#18b1e19a] via-[#8718E1] to-[#8718e1bd] w-[53rem] h-[53rem]"
        ></div>
      </div>

      <div class="flex flex-col absolute bottom-5 left-1/2 mt-44 z-40">
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
