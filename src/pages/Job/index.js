import { Footer } from "../../components/Footer";
import { Ball } from "../../components/GradientBall";
import { Navbar } from "../../components/Navbar";
import { CardJobDetail } from "../../components/Cards/CardJobs/CardJobDetail/index";
import { CardJobHome } from "../../components/Cards/CardJobs/CardJobHome/index";
import { api } from "../../api/api";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { i18next } from "../../translate/i18n";

export function Job() {
  const { loggedInUser } = useContext(AuthContext);
  const [user, setUser] = useState([]);
  const [jobs, setJobs] = useState([
    {
      amount: 0,
      description: "",
      game: "",
      owner: "",
      pilot: { name: "" },
    },
  ]);
  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/user/allusers");
      console.log(response.data);
      setUser(response.data);
    }
    fetchUser();
  }, []);

  useEffect(() => {
    async function fetchJobs() {
      const response = await api.get("/jobs/alljobs");
      console.log(response.data);
      setJobs(response.data);
    }
    fetchJobs();
  }, []);
  console.log(jobs.length);

  return (
    <>
      <Navbar />

      <div
        id="job-stats"
        className="flex space-x-8 justify-start p-8 mt-48 mx-4 align-top"
      >
        <div className="inline-flex flex-col space-y-2.5 items-start justify-start flex-1">
          <p className="w-full text-xl leading-10 text-center text-white font-serif">
            ${Math.floor(Math.random(100, 500) * 100) + 100}
          </p>
          <p className="w-full text-xs text-center text-white">
            {i18next.t("pageSeeJobs.pJobsTraded")}
          </p>
        </div>
        <div className="inline-flex flex-col space-y-2.5 items-start justify-start flex-1">
          <p className="w-full text-xl leading-10 text-center text-white font-serif">
            {user.length}
          </p>
          <p className="w-full text-xs text-center text-white">
            {i18next.t("pageSeeJobs.pGamers")}
          </p>
        </div>
        <div className="inline-flex flex-col space-y-2.5 items-start justify-start flex-1">
          <p className="w-full text-xl leading-10 text-center text-white font-serif">
            {jobs.length}
          </p>
          <p className="w-full text-xs text-center text-white">
            {i18next.t("pageSeeJobs.pActiveJobs")}
          </p>
        </div>
      </div>
      <p className="text-xl leading-9 text-white mx-4 mt-4 font-serif">
        {i18next.t("pageSeeJobs.pSeeAllTheJobs")}{" "}
      </p>
      <div className="mx-4">
        {loggedInUser && (
          <>
            {jobs.map((e, key) => {
              return (
                <div className="my-4" key={key.toString()}>
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
                    <CardJobHome
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
            {!loggedInUser && (
              <>
                {jobs.map((e, key) => {
                  return (
                    <div className="my-4" key={key.toString()}>
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
                        <CardJobHome
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
              </>
            )}
          </>
        )}
      </div>
      <Ball />
      <Footer />
    </>
  );
}
