import { useEffect, useState, useContext } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar/index";

export function Profile() {
  // const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  // useEffect(() => {
  //   async function fetchUser() {
  //     const response = await api.get("/user/profile");
  //     setUser(response.data);
  //   }

  //   fetchUser();
  // }, []);

  const { loggedInUser } = useContext(AuthContext);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-gradient-to-r from-purple-500 to-blue-500">
        <button
          className="flex text-black underline text-xs py-2.5 px-30 rounded mr-16 mt-1 mx-5 text-end  "
          onClick={handleLogOut}
        >
          Edit Profile
        </button>
        <div className="flex justify-center mt-8">
          <img
            src="https://i.imgur.com/8Km9tLL.jpg"
            className="rounded-full border-solid border-white border-2 -mt-3"
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-black bold font-sans text-xl text-left	">
            {loggedInUser.user.name}
          </h3>
          <p className="mt-2 font-sans font-light text-black text-start text-base">
            {loggedInUser.user.typeOfUser}
          </p>

          <p className="mt-2 font-sans font-light text-black text-xs text-left -mt-5 mx-14 ">
            @{loggedInUser.user.nickname}
          </p>
          <p className="mt-2 font-sans font-light text-black text-sm text-justify ">
            {loggedInUser.user.description}
          </p>
        </div>

        <button
          className="flex text-red-600 underline text-xs py-2.5 px-4 rounded mr-16"
          onClick={handleLogOut}
        >
          Delete Account
        </button>
      </div>

      <Footer />
    </>
  );
}
