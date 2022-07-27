import { useState, useContext } from "react";
import { AuthContext } from "../../../../contexts/authContext";
import { api } from "../../../../api/api";
import { useNavigate } from "react-router-dom";

export function CardJob() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    game: "",
    amount: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/jobs/createjob", { ...form });

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
              <label>
                Title for the job
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Ex.: Elo Job twice a week"
                />
              </label>
              <label>
                Describe all details for the gamer
                <input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe details here!"
                />
              </label>
              <label htmlFor="formGame">
                <select id="formGame" name="game" onChange={handleChange}>
                  <option value="League of Legends">League of Legends</option>
                  <option value="Counter Strike">Counter Strike</option>
                  <option value="Tibia">Tibia</option>
                  <option value="Dota 2">Dota 2</option>
                </select>
              </label>

              <label>
                Price
                <input
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  placeholder="$"
                />
              </label>
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

{
  /* <section className="bg-black pl-4">
  <h3 className="text-xl text-white">🔥 Latest jobs on</h3>
  <select className="bg-black text-white text-3xl pt-1.5 mb-9 border-b-2 border-indigo-500">
    <option value={"League of Legends"}>League of Legends</option>
    <option value={"Counter Strike"}>Counter Strike</option>
    <option value={"Tibia"}>Tibia</option>
    <option value={"Dota 2"}>Dota 2</option>
  </select>
</section>; */
}
