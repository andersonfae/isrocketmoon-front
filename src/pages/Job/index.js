import { Footer } from "../../components/Footer";
import { Ball } from "../../components/GradientBall";
import { Navbar } from "../../components/Navbar";
import Floating from "../../images/floatingBoard.png";

export function Job() {
  return (
    <>
      <Navbar />
      <img
        src={Floating}
        alt="floatingBoard"
        className="fixed top-10 right-15 -z-10"
      />
      <div className="inline-flex space-x-8 items-center justify-start p-8 mt-48 mx-4">
        <div className="inline-flex flex-col space-y-2.5 items-start justify-start flex-1">
          <p className="w-full text-xl leading-10 text-center text-white">
            $999K
          </p>
          <p className="w-full text-sm text-center text-white">
            IN JOBS TRADED
          </p>
        </div>
        <div className="inline-flex flex-col space-y-2.5 items-start justify-start flex-1">
          <p className="w-full text-xl leading-10 text-center text-white">
            999k
          </p>
          <p className="w-full text-sm text-center text-white">GAMERS</p>
        </div>
        <div className="inline-flex flex-col space-y-2.5 items-start justify-start flex-1">
          <p className="w-full text-xl leading-10 text-center text-white">
            10K
          </p>
          <p className="w-full text-sm text-center text-white">ACTIVE JOBS</p>
        </div>
      </div>
      <p className="text-xl leading-9 text-white mx-4 mt-4 font-serif">
        See jobs on{" "}
      </p>
      <Ball />
      <Footer />
    </>
  );
}
