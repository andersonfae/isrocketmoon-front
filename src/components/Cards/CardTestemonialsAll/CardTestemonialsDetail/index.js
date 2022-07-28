import { Link, useParams } from "react-router-dom";

export function CardTestemonialsDetail(props) {
  return (
    <>
      <div className="flex justify-center bg-black">
        <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div className="p-6">
            <h5 className="text-gray-900 text-2xl font-medium mb-2">
              {props.description}
            </h5>
            <p className="text-gray-700 text-xs mb-4">
              Your testimonial will appear almost in real time after sending.
              Choose your best words, be kind and respectful! The Rocket Moon
              loves you too. 💜
            </p>
            <p className="text-gray-700 text-base mb-4">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
