import { Link } from "react-router-dom";

export function CardTestemonialsDetail(props) {
  return (
    <>
      <div className="justify-center rounded bg-white max-w-sm p-6 mx-4">
        <div className="">
          <p className="text-gray-700 text-xs mb-4">
            Your testimonial will appear almost in real time after sending.
            Choose your best words, be kind and respectful! The Rocket Moon
            loves you too. 💜
          </p>
          <p className="text-gray-700 text-base mb-4">{props.description}</p>
        </div>
        <Link to={`/reviewpage/edit/${props.id}`}>
          <button className="inline-flex items-center justify-center px-4 py-2.5 border rounded border-purple-700">
            <p className="text-xs text-center text-purple-700 uppercase">
              Edit Testimonial
            </p>
          </button>
        </Link>
      </div>
    </>
  );
}
