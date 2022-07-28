import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../contexts/authContext";

export function CardTestemonialsDetail(props) {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <>
      <div className="flex justify-center bg-black">
        <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div className="p-6">
            <p className="text-gray-700 text-xs mb-4">
              Your testimonial will appear almost in real time after sending.
              Choose your best words, be kind and respectful! The Rocket Moon
              loves you too. 💜
            </p>
            <p className="text-gray-700 text-base mb-4">{props.description}</p>
          </div>
          <Link to={`/reviewpage/edit/${props.id}`}>
            <button className="inline-flex items-center justify-center px-4 py-2.5 border rounded border-purple-700 mb-8">
              <p className="text-xs text-center text-purple-700">
                Edit Testimonials
              </p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
