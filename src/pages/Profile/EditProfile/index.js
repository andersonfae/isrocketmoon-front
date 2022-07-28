import { useState, useEffect, useContext } from "react";
import { api } from "../../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../../components/Footer/index";
import { Navbar } from "../../../components/Navbar/index";
import { AuthContext } from "../../../contexts/authContext";

export function EditProfile() {
  const { loggedInUser } = useContext(AuthContext);
  console.log(loggedInUser);
  const navigate = useNavigate();
  const { _id } = useParams;
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
      <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6" action="#">
          <h5 className="text-4xl font-medium text-gray-900 dark:text-white">
            Edit account
          </h5>
          <div>
            <label
              htmlFor="formName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name:
            </label>
            <input
              id="formName"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="John Doe"
            />
          </div>
          <label htmlFor="formImg">Sua foto de perfil:</label>
          <input type="file" id="formImg" onChange={handleImage} />
          <label
            htmlFor="formNickname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Nickname:
          </label>
          <input
            id="formNickname"
            name="nickname"
            type="text"
            value={form.nickname}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="johndoe"
          />
          <label
            htmlFor="formDescription"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Describe yourself in 140 Characters.
          </label>
          <input
            id="formDescription"
            name="description"
            type="text"
            value={form.description}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Your Description"
            maxLength="140"
          />

          <label
            htmlFor="formLocation"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            <select
              id="formLocation"
              onChange={handleChange}
              name="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            >
              <option value="Pilot">Pilot</option>
              <option value="Owner">Owner</option>
            </select>
          </label>

          <button onClick={handleSubmit} type="submit">
            Edit Account
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
