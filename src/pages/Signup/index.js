import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar/index";
import { Link } from "react-router-dom";
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
      <div className="pb-12 px-4">
        <div className="p-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 mt-48">
          <form onSubmit={handleSubmit} className="space-y-6" action="#">
            <h5 className="text-4xl text-black font-serif mb-8">
              Create an account
            </h5>
            <div>
              <label htmlFor="formName" className=""></label>
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
            <div className="flex">
              <label htmlFor="formImg">
                <img src={Photo} alt="avatar" className="" />
              </label>
              <input
                type="file"
                id="formImg"
                onChange={handleImage}
                className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-1 file:border-purple-600
            file:text-sm file:font-medium
            file:text-purple-600
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700"
              />
            </div>
            <label htmlFor="formNickname" className=""></label>

            <input
              id="formNickname"
              name="nickname"
              type="text"
              value={form.nickname}
              onChange={handleChange}
              className="border-b border-black text-black text-base w-full text-black"
              placeholder="Nickname"
            />
            <label htmlFor="formDescription" className=""></label>

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
            <label htmlFor="formEmail" className=""></label>
            <input
              id="formEmail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="border-b border-black text-black text-base w-full text-black"
              placeholder="E-mail"
            />

            <label htmlFor="formLocation" className="">
              <select
                id="formLocation"
                onChange={handleChange}
                name="location"
                className="border-b border-black text-black text-base w-full text-black mt-6"
              >
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
              </select>
            </label>
            <label htmlFor="formTypeOfUser" className="">
              <select
                id="formTypeOfUser"
                onChange={handleChange}
                name="typeOfUser"
                className="border-b border-black text-black text-base w-full text-black mt-6"
              >
                <option value="Pilot">Pilot</option>
                <option value="Owner">Owner</option>
              </select>
            </label>
            <label htmlFor="formPassword" className=""></label>
            <input
              id="formPassword"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="border-b border-black text-black text-base w-full text-black"
              placeholder="Password"
            />
            <label htmlFor="formConfirmPassword" className=""></label>
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
              className="shadow bg-[#8718E1] hover:bg-[#8718E1] focus:shadow-outline focus:outline-none text-white text-base py-3 px-16 rounded w-full text-center uppercase"
            >
              Create Account
            </button>
            <div className="text-base text-black text-center">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                <button
                  onClick={handleSubmit}
                  className="underline text-base text-black"
                >
                  Log in
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
