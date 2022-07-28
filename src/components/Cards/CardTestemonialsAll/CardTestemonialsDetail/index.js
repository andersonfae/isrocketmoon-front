import { Link } from "react-router-dom";

export function CardTestemonialsDetail(props) {
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
            <button className="flex text-black underline text-xs pt-5 pr-[0.625rem] rounded mr-16 mt-1 mx-5 justify-end  ">
              Edit Testemonial
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
