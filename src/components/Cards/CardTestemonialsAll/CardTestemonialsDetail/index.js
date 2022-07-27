import { Link, useParams } from "react-router-dom";

export function CardTestemonialsDetail(props) {
  const { jobsId } = useParams();

  return (
    <>
      <div className="flex justify-center bg-black">
        <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div className="p-6">
            <p className="text-gray-700 text-base mb-4">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
