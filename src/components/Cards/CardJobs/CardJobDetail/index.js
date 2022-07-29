import { Link } from "react-router-dom";

export function CardJobDetail(props) {
  return (
    <>
      <div className="flex flex-col space-y-8 p-8 bg-white rounded mx-4">
        <div className="flex flex-col space-y-2.5 items-start justify-start">
          <h2 className="w-full text-xl leading-9 text-gray-900 font-serif">
            {props.description}
          </h2>
        </div>

        <div className="flex flex-col items-start justify-start w-full">
          <div className="inline-flex space-x-2.5 items-start justify-start w-full py-2.5 border-b border-black justify-between">
            <p className="opacity-60 flex-1 text-base tracking-wider text-gray-900 uppercase">
              Game
            </p>
            <p className="flex-1 text-base text-gray-900">{props.game}</p>
          </div>
          <div className="inline-flex space-x-2.5 items-start justify-start w-full py-2.5 border-b border-black">
            <p className="opacity-60 flex-1 text-base tracking-wider text-gray-900 uppercase">
              price
            </p>
            <p className="flex-1 text-base text-gray-900">${props.amount}</p>
          </div>
          {props.pilot ? <h3>Pilot:{props.pilot} </h3> : null}
        </div>
        <div className="flex w-full text-center space-x-2">
          <div className="flex-auto bg-purple-700 rounded w-full py-2.5 ">
            <p className="text-base font-bold text-center text-white uppercase">
              Apply
            </p>
          </div>
          <Link
            to={`/jobs/edit/${props.id}`}
            className="flex-auto border rounded border-purple-700 w-full py-2.5"
          >
            <span className="text-base font-bold text-center text-purple-700 uppercase">
              Edit Job
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
