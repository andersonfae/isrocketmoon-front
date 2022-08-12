import { i18next } from "../../../../translate/i18n";

export function CardTestemonialsHome(props) {
  return (
    <>
      <div className="justify-center rounded bg-white max-w-sm p-6 mx-4">
        <div className="">
          <p className="text-gray-700 text-xs mb-4">
            {i18next.t("cardTestHome.pTest")}
          </p>
          <p className="text-gray-700 text-base mb-4">{props.description}</p>
        </div>
      </div>
    </>
  );
}
