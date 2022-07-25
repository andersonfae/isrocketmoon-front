import { useState, useContext } from "react";
import { AuthContext } from "../../../../contexts/authContext";
import { api } from "../../../../api/api";
import { useNavigate } from "react-router-dom";

export function CardJob() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/jobs/createjob", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div className="p-6">
            <h5 className="text-gray-900 text-4xl font-medium mb-2">
              Post a Job
            </h5>
            <p className="text-gray-700 text-xs mb-4">
              🚀 You are 3 fields away to get a Professional Gamer!
            </p>
            <form onSubmit={handleSubmit}>
              <label></label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Title for the job (Ex.: Elo Job twice a week)"
              />
              <label></label>
              <input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe all details for the gamer."
              />
              <label></label>
              <input
                type="text"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Price ($)"
              />
            </form>

            <button
              type="submit"
              onClick={handleSubmit}
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              SEND TO THE MOON!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
