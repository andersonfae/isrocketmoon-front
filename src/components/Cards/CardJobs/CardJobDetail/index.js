import { useEffect, useState, useContext } from "react";
import { api } from "../../../../api/api";
import { CardJob } from "../CardCreateJob/index";
import { AuthContext } from "../../../../contexts/authContext";
import { Link, useParams } from "react-router-dom";

export function CardJobDetail(props) {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <>
      <div className="flex justify-center bg-black">
        <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Elo Job twice a week
            </h5>
            <p className="text-gray-700 text-base mb-4">{props.description}</p>
            <h3>Game:{props.game}</h3>
            <h3>Price:{props.amount} </h3>
            {props.pilot ? <h3>Pilot :{props.pilot} </h3> : null}

            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              APPLY
            </button>
            <Link to={`/jobs/edit/${props.id}`}>
              {" "}
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                EDIT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
