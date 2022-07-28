import { useState, useEffect } from "react";
import { api } from "../../../../api/api";
import { useNavigate, useParams } from "react-router-dom";

export function CardEditJob() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    game: "",
    amount: "",
  });
  console.log(form);

  const { jobsId } = useParams();

  useEffect(() => {
    async function fetchJobs() {
      const response = await api.get(`/jobs/${jobsId}`);
      console.log(response.data);
      setForm(response.data);
    }

    fetchJobs();
  }, [jobsId]);

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

      await api.patch(`/jobs/edit/${jobsId}`, clone);

      navigate("/jobs");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteJob() {
    try {
      await api.delete(`/jobs/delete/${jobsId}`);

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }
  console.log(form);
  return (
    <>
      <div className="flex flex-col space-y-8 items-center justify-start mx-4 p-8 bg-white rounded mt-48">
        <div className="flex flex-col space-y-8 items-start justify-start w-full">
          <p className="w-full text-xl leading-9 text-gray-900 font-serif">
            Editing PROPS HERE TITLE
          </p>
          <div className="flex flex-col space-y-5 items-start justify-start w-full">
            <input
              className="flex-1 text-base text-gray-900 w-full py-2.5 border-b border-black"
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Describe your job here"
            ></input>
            <input
              className="flex-1 text-base text-gray-900 w-full py-2.5 border-b border-black"
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Don’t forget to be a good person."
            ></input>
            <input
              className="flex-1 text-base text-gray-900 w-full py-2.5 border-b border-black"
              type="text"
              name="game"
              value={form.game}
              onChange={handleChange}
              placeholder="Select your game here!"
            ></input>
            {/* <input
              className="flex-1 text-base text-gray-900 w-full py-2.5 border-b border-black"
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="$30.00"
            ></input> */}
            <div className="inline-flex space-x-2.5 items-start justify-start w-80 py-2.5 w-full">
              <p className="opacity-60 w-5 text-base text-gray-900 pt-3">$</p>
              <input
                className="flex-1 text-base text-gray-900 w-full py-2.5 border-b border-black"
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="$30.00"
              ></input>
              <p className="flex-1 text-base text-gray-900"></p>
            </div>
          </div>
        </div>
        <div className="flex w-full text-center space-x-2">
          <div
            className="flex-auto bg-purple-700 rounded w-full py-2.5"
            type="submit"
            onClick={handleSubmit}
          >
            <p className="text-base text-center text-white uppercase font-bold">
              Edit the Job
            </p>
          </div>
          <p
            type="submit"
            onClick={handleDeleteJob}
            className="flex-auto w-full py-2.5 text-xs underline text-red-700"
          >
            Delete
          </p>
        </div>
      </div>
    </>
  );
}
