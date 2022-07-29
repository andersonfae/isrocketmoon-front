export function CardTestemonialsHome(props) {
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
      </div>
    </>
  );
}
