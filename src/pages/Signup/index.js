import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar/index";
import Photo from "../../images/upload-photo.png";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    nickname: "",
    description: "",
    email: "",
    location: "",
    typeOfUser: "",
    password: "",
    confirmPassword: "",
  });

  const [img, setImg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  function handleImage(e) {
    setImg(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", img);

      const response = await api.post("/upload-image", uploadData);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const imgURL = await handleUpload();
      await api.post("/user/signup", { ...form, img: imgURL });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-black pb-12 pt-20 px-4">
        <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6" action="#">
            <h5 className="text-4xl text-black">Create an account</h5>
            <div>
              <label
                htmlFor="formName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              ></label>
              <input
                id="formName"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="border-b border-black text-black text-base w-full text-black"
                placeholder="Name"
              />
            </div>
            <label htmlFor="formImg">
              <img src={Photo} alt="logo" className="" />
            </label>
            <input type="file" id="formImg" onChange={handleImage} />
            <label
              htmlFor="formNickname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            ></label>

            <input
              id="formNickname"
              name="nickname"
              type="text"
              value={form.nickname}
              onChange={handleChange}
              className="border-b border-black text-black text-base w-full text-black"
              placeholder="Nickname"
            />
            <label
              htmlFor="formDescription"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            ></label>

            <input
              id="formDescription"
              name="description"
              type="text"
              value={form.description}
              onChange={handleChange}
              className="border-b border-black text-black text-base w-full text-black"
              placeholder="Describe yourself in 140 Characters"
              maxLength="140"
            />
            <label
              htmlFor="formEmail"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            ></label>
            <input
              id="formEmail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="border-b border-black text-black text-base w-full text-black"
              placeholder="E-mail"
            />
            <label
              htmlFor="formLocation"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <select
                id="formLocation"
                onChange={handleChange}
                name="location"
                className="border-b border-black text-black text-base w-full text-black"
              >
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
              </select>
            </label>
            <label
              htmlFor="formTypeOfUser"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <select
                id="formTypeOfUser"
                onChange={handleChange}
                name="typeOfUser"
                className="border-b border-black text-black text-base w-full text-black"
              >
                <option value="Pilot">Pilot</option>
                <option value="Owner">Owner</option>
              </select>
            </label>
            <label
              htmlFor="formPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            ></label>
            <input
              id="formPassword"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="border-b border-black text-black text-base w-full text-black"
              placeholder="Password"
            />
            <label
              htmlFor="formConfirmPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            ></label>
            <input
              id="formConfirmPassword"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="border-b border-black text-black text-base w-full text-black"
              placeholder="Confirm Password"
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="flex shadow bg-[#8718E1] hover:bg-[#8718E1] focus:shadow-outline focus:outline-none text-white text-base py-3 px-16 rounded ml-10"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
