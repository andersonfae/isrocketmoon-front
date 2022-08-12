import { useState } from "react";
import { api } from "../../../../api/api";
import { useNavigate } from "react-router-dom";
import { i18next } from "../../../../translate/i18n";

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
      <div className="flex justify-center">
        <div className="block rounded-lg shadow-lg bg-white text-center max-w-sm mt-44 mx-4 p-8">
          <div className="p-6">
            <h5 className="text-gray-900 text-4xl font-medium mb-2 font-serif">
              {i18next.t("cardTestCreate.h5Hear")}
            </h5>
            <p className="text-gray-700 text-xs mb-4">
              {i18next.t("cardTestCreate.pTest")}
            </p>
            <form onSubmit={handleSubmit}>
              <textarea
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder={i18next.t("cardTestCreate.place")}
                componenttype="textarea"
                rows="5"
                cols="30"
                className="border rounded border-purple-700"
              />
            </form>

            <button
              type="submit"
              onClick={handleSubmit}
              className=" inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase border rounded border-purple-700 bg-[#8718E1] mt-10"
            >
              {i18next.t("cardTestCreate.buttonSend")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
