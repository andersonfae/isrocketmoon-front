import { Link } from "react-router-dom";

export function Hero() {
  return (
    <>
      <div className="bg-black pl-9 pt-32">
        <spam className="rounded-full bg-gradient-to-r from-[#18b1e19a] via-[#8718E1] to-[#8718e1bd] py-[30rem] px-[30rem]"></spam>
      </div>
      <div className="px-4 h-full pt-60 pb-96 bg-black text-white">
        <h1 className="text-4xl">Connecting the jobs with the best gamers</h1>
        <h2 className="text-base py-7 text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </h2>
        <section className="flex bg-black justify-center">
          <Link to={"/jobs"}>
            <button className="flex shadow bg-purple-600 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white text-xs py-2.5 px-4 rounded mr-16">
              See Jobs
            </button>
          </Link>
          <Link to={"/jobs/createjob"}>
            <button className="flex shadow border border-white focus:shadow-outline focus:outline-none text-white text-xs py-2.5 px-4 rounded mr-16">
              Post a Job
            </button>
          </Link>
        </section>
      </div>
      <div class="flex flex-col absolute bottom-5 left-1/2">
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
