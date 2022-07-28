import { useState, useEffect } from "react";
import { api } from "../../../../api/api";
import { useNavigate, useParams } from "react-router-dom";

export function CardTestemonialEdit() {
  const [form, setForm] = useState({
    description: "",
  });
  console.log(form);
  const { reviewId } = useParams();

  useEffect(() => {
    async function fetchTestemonial() {
      const response = await api.get(`/review-page/${reviewId}`);
      console.log(response.data);
      setForm(response.data);
    }

    fetchTestemonial();
  }, [reviewId]);

  const navigate = useNavigate();

  function handleChange(e) {
    if (e.target.name === "amount") {
      setForm({ ...form, amount: Number(e.target.value) });
      return;
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const clone = { ...form };

      delete clone._id;

      await api.patch(`/review-page/edit/${reviewId}`, clone);

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteReview() {
    try {
      await api.delete(`/review-page/delete/${reviewId}`);

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="block rounded-lg shadow-lg bg-white max-w-sm mt-48 mx-4">
          <div className="p-6">
            <h5 className="text-gray-900 text-4xl font-medium mb-2">
              Editing your testimonial!
            </h5>
            <p className="inline-flex items-start justify-start w-80 p-2.5 bg-gray-100 my-2.5">
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
                className="border border-purple-700 w-full p-2.5"
              />
            </form>
            <div className="flex justify-between mt-8">
              <button
                type="submit"
                onClick={handleSubmit}
                className="inline-flex items-center justify-center px-4 py-2.5 border rounded border-purple-700 bg-[#8718E1]"
              >
                <p className="text-xs text-center text-white uppercase">
                  Edit My Review
                </p>
              </button>
              <button type="submit" onClick={handleDeleteReview} className="">
                <p className="text-xs underline text-center text-red-700">
                  Delete
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
