import { Footer } from "../../components/Footer";
import { Ball } from "../../components/GradientBall";
import { Navbar } from "../../components/Navbar";
import { i18next } from "../../translate/i18n";

export function Credits() {
  return (
    <>
      <Navbar />
      <div className="inline-flex flex-col space-y-12 items-start justify-start mt-48 mx-4">
        <p className="text-4xl leading-10 text-white font-serif">
          {i18next.t("credits.pHour")}
        </p>
        <div className="inline-flex space-x-16 items-start justify-start">
          <div className="inline-flex flex-col space-y-6 items-start justify-start flex-1">
            <div className="flex flex-col space-y-1.5 items-start justify-start">
              <p className="text-base text-right text-white">Anderson Faé</p>
              <p className="opacity-60 text-base text-right text-white">
                <a href="https://github.com/andersonfae" className="underline">
                  @andersonfae
                </a>
              </p>
            </div>
            <div className="flex flex-col space-y-1.5 items-start justify-start">
              <p className="text-base text-right text-white">Felipe Biermann</p>
              <p className="opacity-60 text-base text-right text-white">
                <a
                  href="https://github.com/felipebiermann"
                  className="underline"
                >
                  @felipebiermann
                </a>
              </p>
            </div>
            <div className="flex flex-col space-y-1.5 items-start justify-start">
              <p className="text-base text-right text-white">Ricado Arena</p>
              <p className="opacity-60 text-base text-right text-white">
                <a href="https://github.com/RicardoArena" className="underline">
                  @ricardoarena
                </a>
              </p>
            </div>
          </div>
          <p className="flex-1 text-xl leading-9 text-white">
            {i18next.t("credits.pMagic")}
          </p>
        </div>
      </div>
      <Ball />
      <Footer />
    </>
  );
}
