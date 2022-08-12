import { useState } from "react";
import { api } from "../../../../api/api";
import { useNavigate } from "react-router-dom";
import { i18next } from "../../../../translate/i18n";

export function CardJob() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    game: "",
    amount: "",
  });

  const navigate = useNavigate();

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
      <div className="inline-flex flex-col space-y-8 items-center justify-start p-8 bg-white rounded mt-48 mx-4">
        <div className="flex flex-col space-y-8 items-start justify-start w-full">
          <p className="w-full text-4xl leading-9 text-gray-900 font-serif">
            {i18next.t("cardCreateJob.pPost")}
          </p>
          <p className="text-xs text-gray-900">
            {i18next.t("cardCreateJob.pGamer")}
          </p>
          <div className="flex flex-col space-y-5 w-full">
            <input
              className="flex-1 text-base text-gray-900 w-full py-2.5 border-b border-black "
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder={i18next.t("cardCreateJob.placeTitle")}
            ></input>
            <input
              className="flex-1 text-base text-gray-900 w-full py-2.5 border-b border-black"
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder={i18next.t("cardCreateJob.placeDescribe")}
            ></input>
            <label htmlFor="formGame">
              <select id="formGame" name="game" onChange={handleChange}>
                <option value="League of Legends">League of Legends</option>
                <option value="Counter Strike">Counter Strike</option>
                <option value="Tibia">Tibia</option>
                <option value="Dota 2">Dota 2</option>
              </select>
            </label>
            <input
              className="flex-1 text-base text-gray-900 w-full py-2.5 border-b border-black"
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder={i18next.t("cardCreateJob.placePrice")}
            ></input>
          </div>
        </div>
        <div
          className="inline-flex space-x-2.5 items-end justify-start w-full"
          type="submit"
          onClick={handleSubmit}
        >
          <div className="flex items-center justify-center flex-1 px-4 py-2.5 bg-purple-700 rounded">
            <p className="text-base font-bold text-center text-white uppercase">
              {i18next.t("cardCreateJob.pSend")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
