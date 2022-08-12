import { useContext } from "react";
import { AuthContext } from "../../../../contexts/authContext";
import { api } from "../../../../api/api";
import { i18next } from "../../../../translate/i18n";

export function CardJobHome(props) {
  const { loggedInUser } = useContext(AuthContext);
  console.log(loggedInUser);
  return (
    <>
      <div className="flex flex-col space-y-8 items-start justify-start p-8 bg-white rounded">
        <div className="flex flex-col space-y-2.5 items-start justify-start">
          <h2 className="w-full text-xl leading-9 text-gray-900 font-serif">
            {props.description}
          </h2>
        </div>

        <div className="flex flex-col items-start justify-start w-full">
          <div className="inline-flex space-x-2.5 items-start justify-start w-full py-2.5 border-b border-black justify-between">
            <p className="opacity-60 flex-1 text-base tracking-wider text-gray-900 uppercase">
              {i18next.t("cardJobHome.pGame")}
            </p>
            <p className="flex-1 text-base text-gray-900">{props.game}</p>
          </div>
          <div className="inline-flex space-x-2.5 items-start justify-start w-full py-2.5 border-b border-black">
            <p className="opacity-60 flex-1 text-base tracking-wider text-gray-900 uppercase">
              {i18next.t("cardJobHome.pPrice")}
            </p>
            <p className="flex-1 text-base text-gray-900">${props.amount}</p>
          </div>
        </div>

        {loggedInUser.user.typeOfUser !== "Owner" && (
          <div className="flex-auto bg-purple-700 rounded w-full py-2.5 text-center">
            <button
              onClick={async () => {
                await api.get(`/jobs/pilot/${props.id}`);
              }}
              className="text-base font-bold text-white uppercase"
            >
              {i18next.t("cardJobHome.buttonApply")}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
