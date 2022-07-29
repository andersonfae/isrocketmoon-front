import { useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import { CardJobDetail } from "../../components/Cards/CardJobs/CardJobDetail";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Hero } from "../Hero";
import { Sectionjob } from "../../components/SectionJobs";
import { SectionTestemonials } from "../../components/SectionTestemonials";
import { Faq } from "../../components/FAQ/index";
import { CardTestemonialsHome } from "../../components/Cards/CardTestemonialsAll/CardTestemonialsHome/index";
import { CardJobHome } from "../../components/Cards/CardJobs/CardJobHome";
import { AuthContext } from "../../contexts/authContext";

export function Home() {
  const { loggedInUser } = useContext(AuthContext);

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

  useEffect(() => {
    async function fetchJobs() {
      const response = await api.get("/jobs/alljobs");
      console.log(response.data);
      setJobs(response.data);
    }
    fetchJobs();
  }, []);

  useEffect(() => {
    async function fetchReview() {
      const response = await api.get("/review-page/allreviews");
      console.log(response.data);
      setReview(response.data);
    }

    fetchReview();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Sectionjob />
      <div className="lg:flex-row lg:flex lg:space-x-8 mx-4">
        {loggedInUser && (
          <>
            {jobs
              .filter((currentJob) => {
                return !currentJob.pilot;
              })
              .map((e, key) => {
                console.log(jobs);
                return (
                  <div className="my-4" key={key.toString()}>
                    <CardJobHome
                      owner={e.owner}
                      game={e.game}
                      description={e.description}
                      amount={e.amount}
                      id={e._id}
                    />
                  </div>
                );
              })
              .slice(0, 5)}
          </>
        )}
        {!loggedInUser && (
          <>
            {jobs
              .filter((currentJob) => {
                return !currentJob.pilot;
              })
              .map((e, key) => {
                console.log(jobs);
                return (
                  <div className="my-4" key={key.toString()}>
                    <CardJobDetail
                      owner={e.owner}
                      game={e.game}
                      description={e.description}
                      amount={e.amount}
                      id={e._id}
                    />
                  </div>
                );
              })
              .slice(0, 5)}
          </>
        )}
      </div>
      <SectionTestemonials />
      <div>
        {review.map((e, key) => {
          return (
            <div
              key={key.toString()}
              className="flex space-y-2.5 flex-col my-4"
            >
              <CardTestemonialsHome description={e.description} />
            </div>
          );
        })}
      </div>
      <Faq />
      <Footer />
    </>
  );
}

// Teste branch
