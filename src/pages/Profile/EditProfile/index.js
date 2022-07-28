import { useState, useEffect, useContext } from "react";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../../components/Footer/index";
import { Navbar } from "../../../components/Navbar/index";
import { AuthContext } from "../../../contexts/authContext";
import Photo from "../../../images/upload-photo.png";
import { Ball } from "../../../components/GradientBall";

export function EditProfile() {
  const { loggedInUser } = useContext(AuthContext);
  console.log(loggedInUser);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    nickname: "",
    description: "",

    location: "",
    typeOfUser: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/user/profile");
      console.log(response.data);
      setForm(response.data);
    }

    fetchUser();
  }, []);

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
      const clone = { ...form };
      delete clone._id;
      const imgURL = await handleUpload();
      await api.patch("/user/update-profile", { ...clone, img: imgURL });

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }
  console.log(form);
  return (
    <>
      <Navbar />
      <div className="pb-12 px-4">
        <div className="p-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 mt-48">
          <form onSubmit={handleSubmit} className="space-y-6" action="#">
            <h5 className="text-4xl text-black font-serif mb-8">
              Edit an account
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

            <button
              onClick={handleSubmit}
              type="submit"
              className="shadow bg-[#8718E1] hover:bg-[#8718E1] focus:shadow-outline focus:outline-none text-white text-base py-3 px-16 rounded w-full text-center uppercase"
            >
              Edit Account
            </button>
          </form>
        </div>
      </div>
      <Ball />
      <Footer />
    </>
  );
}
