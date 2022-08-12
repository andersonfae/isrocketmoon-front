import { Link } from "react-router-dom";
import { i18next } from "../../translate/i18n";

export function Footer() {
  return (
    <>
      <footer className="text-center text-white">
        <div className="container p-6"></div>
        <div className="text-center pt-6 pb-7 text-xs">
          {i18next.t("footer.copyright")}
        </div>
        <div className="flex justify-center items-center pb-6 text-xs underline">
          <Link to={"/credits"}>
            <span>{i18next.t("footer.credits")}</span>
          </Link>
        </div>
      </footer>
    </>
  );
}
