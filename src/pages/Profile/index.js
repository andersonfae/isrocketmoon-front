import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar/index";
import { Link } from "react-router-dom";
import { CardJobDetail } from "../../components/Cards/CardJobs/CardJobDetail";
import { CardTestemonialsDetail } from "../../components/Cards/CardTestemonialsAll/CardTestemonialsDetail";
import Photo from "../../images/upload-photo.png";
import { Ball } from "../../components/GradientBall";

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
  ]);

  const [review, setReview] = useState([
    {
      description: "",
    },
  ]);

  const navigate = useNavigate();

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

  async function handleDelete() {
    try {
      await api.delete("/user/disable-profile");
      localStorage.removeItem("loggedInUser");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="relative px-5 pt-24 pb-5 bg-white rounded-lg mt-48 mx-4 mb-7">
        <img
          className="rounded-full w-36 h-36 -top-12 left-5 absolute"
          src={Photo}
          alt="Photoimg"
        />
        <div className="flex flex-col space-y-2.5 items-start justify-start w-full pb-5 border-b border-gray-300">
          <div className="flex flex-col space-y-1 items-start justify-start">
            <Link to={`/user/update-profile/${user._id}`}>
              <p className="absolute right-5 top-5 text-black underline text-xs">
                Edit profile
              </p>
            </Link>
            <p className="text-xl leading-9 w-full">{user.name}</p>
            <div className="inline-flex space-x-2.5 items-center justify-start">
              <div className="flex items-center justify-center px-2.5 py-1 bg-[#1CBDF9] rounded-full">
                <p className="text-xs text-white">{user.typeOfUser}</p>
              </div>
              <p className="text-xs">@{user.nickname}</p>
            </div>
          </div>
          <p className="opacity-60 w-full text-base">{user.description}</p>
        </div>
        <div className="flex text-center space-x-2 justify-center">
          <Link
            to="/reviewpage/create-review-page"
            className="flex-auto bg-purple-700 rounded py-2.5 text-center"
          >
            <p className="text-base font-bold text-center text-white uppercase">
              Post Testimonials
            </p>
          </Link>
          <p className="text-xs underline text-red-700" onClick={handleDelete}>
            Delete account
          </p>
        </div>
      </div>
      <h2 className="text-xl text-white font-serif lg:text-center mx-4 mb-8 mt-14">
        👇🏼 Your jobs on the road
      </h2>
      <div>
        {jobs.map((e, key) => {
          return (
            <div key={key.toString()}>
              {e.pilot && (
                <CardJobDetail
                  title={e.title}
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
      <h2 className="text-4xl text-white font-serif lg:text-center mx-4 mb-8 mt-20">
        👌🏽 Your testimonials
      </h2>
      <div className="">
        {review.map((e, key) => {
          return (
            <div key={key.toString()}>
              <CardTestemonialsDetail description={e.description} id={e._id} />
            </div>
          );
        })}
      </div>
      <Ball />
      <Footer />
    </>
  );
}
