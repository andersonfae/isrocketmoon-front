import { useState } from "react";
import { api } from "../../../../api/api";
import { useNavigate } from "react-router-dom";

export function CardTestemonialCreate() {
  const [form, setForm] = useState({
    description: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/review-page/create-review-page", form);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex justify-center bg-black">
        <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div className="p-6">
            <h5 className="text-gray-900 text-4xl font-medium mb-2">
              We want to hear you!
            </h5>
            <p className="text-gray-700 text-xs mb-4">
              Your testimonial will appear almost in real time after sending.
              Choose your best words, be kind and respectful! The Rocket Moon
              loves you too. 💜
            </p>
            <form onSubmit={handleSubmit}>
              <textarea
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Text your review here!"
                componenttype="textarea"
                rows="5"
                cols="30"
              />
            </form>

            <button
              type="submit"
              onClick={handleSubmit}
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              SEND MY REVIEW!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
