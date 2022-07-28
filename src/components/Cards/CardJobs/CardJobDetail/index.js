import { Link } from "react-router-dom";

export function CardJobDetail(props) {
  return (
    <>
      <div className="inline-flex flex-col space-y-8 items-start justify-start p-8 bg-white rounded mx-4">
        <div className="flex flex-col space-y-2.5 items-start justify-start">
          <h2 className="w-full text-xl leading-9 text-gray-900 font-serif">
            Elo Job twice a week
          </h2>
        </div>
        <p className="text-base text-gray-900">{props.description}</p>
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
          {props.pilot ? <h3>Pilot :{props.pilot} </h3> : null}
        </div>
        <div className="inline-flex space-x-2.5 items-end justify-between w-full">
          <div className="flex items-center justify-center px-4 py-2.5 bg-purple-700 rounded">
            <p className="text-base font-bold text-center text-white uppercase">
              Details
            </p>
          </div>
          <Link to={`/jobs/edit/${props.id}`}>
            <div className="flex items-center justify-center px-4 py-2.5 border rounded border-purple-700">
              <p className="text-base font-bold text-center text-purple-700 uppercase">
                Write a review
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
