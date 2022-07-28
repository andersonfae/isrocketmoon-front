import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar/index";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-black py-28 px-4 h-full">
        <div className="p-8 max-w-sm bg-white shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 rounded">
          <form onSubmit={handleSubmit} className="space-y-6" action="#">
            <h5 className="text-4xl text-black font-serif mb-8">
              Welcome back ;){" "}
            </h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border-b border-black text-black text-base w-full py-2.5 text-black"
                placeholder="E-mail"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="border-b border-black text-black text-base w-full py-2.5 text-black"
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-3">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 border-black"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a href="/" className="ml-auto text-xs text-black underline">
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-[#8718E1] hover:bg-[#8718E1] focus:ring-4 uppercase focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <div className="text-base text-black text-center">
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                <button
                  onClick={handleSubmit}
                  className="underline text-base text-black"
                >
                  Sign up for free
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
