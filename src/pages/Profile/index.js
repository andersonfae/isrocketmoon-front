import { useEffect, useState, useContext } from "react";
import { api } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar/index";
import { Link } from "react-router-dom";
import { CardJobDetail } from "../../components/Cards/CardJobs/CardJobDetail";
import { CardTestemonialsDetail } from "../../components/Cards/CardTestemonialsAll/CardTestemonialsDetail";

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

  return (
    <>
      <Navbar />
      <div className="bg-black">
        <div className="rounded-3xl overflow-hidden shadow-xl bg-white mx-4">
          <Link to={`/user/update-profile/${user._id}`}>
            <button className="flex text-black underline text-xs pt-5 pr-[0.625rem] rounded mr-16 mt-1 mx-5 justify-end  ">
              Edit Profile
            </button>
          </Link>

          <div className="flex justify-center  ">
            <img
              src="https://i.imgur.com/8Km9tLL.jpg"
              className="rounded-full border-solid border-white border-2 -mt-3"
            />
          </div>

          <div className="text-center px-3 pb-6 pt-2">
            <h3 className="text-black bold font-sans text-xl text-left	">
              {user.name}
            </h3>
            <p className="mt-2 font-sans font-light text-black text-start text-base">
              {user.typeOfUser}
            </p>

            <p className="mt-2 font-sans font-light text-black text-xs text-left -mt-5 mx-14 ">
              @{user.nickname}
            </p>
            <p className="mt-2 font-sans font-light text-black text-sm text-justify ">
              {user.description}
            </p>
          </div>

          <button
            className="flex text-red-600 underline text-xs py-2.5 px-4 rounded mr-16"
            onClick={handleDelete}
          >
            Delete Account
          </button>
        </div>
        <span className=" flex mb-4 py-2.5 px-4 text-white">
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
        <span className=" flex mb-4 py-2.5 px-4 text-white">
          👌🏽 Your testimonials
        </span>

        <div className="rounded-3xl overflow-hidden shadow-xl bg-white mx-4">
          {review.map((e) => {
            return (
              <div>
                <CardTestemonialsDetail description={e.description} />
                <Link to={`/reviewpage/edit/${e._id}`}>
                  <button className="flex text-black underline text-xs pt-5 pr-[0.625rem] rounded mr-16 mt-1 mx-5 justify-end  ">
                    Edit Profile
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}
