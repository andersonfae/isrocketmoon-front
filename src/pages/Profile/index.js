import { useEffect, useState, useContext } from "react";
import { api } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar/index";
import { Link } from "react-router-dom";
import { CardJobDetail } from "../../components/Cards/CardJobs/CardJobDetail";
import { CardTestemonialsDetail } from "../../components/Cards/CardTestemonialsAll/CardTestemonialsDetail";
import Photo from "../../images/upload-photo.png";

export function Profile() {
  const [user, setUser] = useState({
    name: "",
    nickname: "",
    typeOfUser: "",
    description: "",
    location: "",
  });

  const [jobs, setJobs] = useState([
    {
      amount: 0,
      description: "",
      game: "",
      owner: "",
      pilot: { name: "" },
    },
    ,
  ]);

  const [review, setReview] = useState([
    {
      description: "",
    },
  ]);
  console.log(review);

  const navigate = useNavigate();
  // const { _id } = useParams;
  const { jobsId } = useParams();

  useEffect(() => {
    async function fetchReview() {
      const response = await api.get("/review-page/my-review-page");
      console.log(response.data);
      setReview(response.data);
    }

    fetchReview();
  }, []);

  useEffect(() => {
    async function fetchJobs() {
      const response = await api.get("/jobs/myjobs");
      console.log(response.data);
      setJobs(response.data);
    }

    fetchJobs();
  }, []);

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/user/profile");
      console.log(response.data);
      setUser(response.data);
    }

    fetchUser();
  }, []);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  async function handleDelete() {
    try {
      await api.delete("/user/disable-profile");
      localStorage.removeItem("loggedInUser");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteJob() {
    try {
      await api.delete("/jobs/disable-profile");
      localStorage.removeItem("loggedInUser");

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="relative inline-flex flex-col space-y-6 items-start justify-start px-5 pt-24 pb-5 bg-white rounded-lg mt-48 mx-4 mb-7">
        <img
          className="rounded-full w-36 h-36 -top-12 left-5 absolute"
          src={Photo}
        />
        <div className="flex flex-col space-y-2.5 items-start justify-start w-full pb-5 border-b border-gray-300">
          <div className="flex flex-col space-y-1 items-start justify-start">
            <Link to={`/user/update-profile/${user._id}`}>
              <p className="absolute right-5 top-5 text-black underline text-xs">
                Edit profile
              </p>
            </Link>
            <p className="text-xl leading-9">{user.name}</p>
            <div className="inline-flex space-x-2.5 items-center justify-start">
              <div className="flex items-center justify-center px-2.5 py-1 bg-[#1CBDF9] rounded-full">
                <p className="text-xs text-white">{user.typeOfUser}</p>
              </div>
              <p className="text-xs">@{user.nickname}</p>
            </div>
          </div>
          <p className="opacity-60 w-full text-base">{user.description}</p>
        </div>

        <p
          className="text-xs underline text-center text-red-700"
          onClick={handleDelete}
        >
          Delete account
        </p>
      </div>
      <span className="text-xl text-white font-serif lg:text-center">
        👇🏼 Your jobs on the road
      </span>
      <div>
        {jobs.map((e) => {
          return (
            <div>
              {e.pilot && (
                <CardJobDetail
                  owner={e.owner}
                  game={e.game}
                  description={e.description}
                  amount={e.amount}
                  id={e._id}
                  pilot={e.pilot.name}
                />
              )}

              {!e.pilot && (
                <CardJobDetail
                  owner={e.owner}
                  game={e.game}
                  description={e.description}
                  amount={e.amount}
                  id={e._id}
                />
              )}
            </div>
          );
        })}
      </div>
      <span className="text-xl text-white font-serif lg:text-center">
        👌🏽 Your testimonials
      </span>

      <div className="rounded-3xl overflow-hidden shadow-xl bg-white mx-4">
        {review.map((e) => {
          return (
            <div>
              <CardTestemonialsDetail description={e.description} />
            </div>
          );
        })}
        <Link to={`/reviewpage/edit/${user._id}`}>
          <button className="flex text-black underline text-xs pt-5 pr-[0.625rem] rounded mr-16 mt-1 mx-5 justify-end  ">
            Edit Profile
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
