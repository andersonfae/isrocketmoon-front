import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { api } from "../../api/api";
import { CardJobDetail } from "../../components/Cards/CardJobs/CardJobDetail";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Hero } from "../Hero";
import { Sectionjob } from "../../components/SectionJobs";
import { SectionTestemonials } from "../../components/SectionTestemonials";
import { Faq } from "../../components/FAQ/index";
import { CardTestemonialsDetail } from "../../components/Cards/CardTestemonialsAll/CardTestemonialsDetail";

export function Home() {
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
      <SectionTestemonials />
      <div className="rounded-3xl overflow-hidden shadow-xl bg-white mx-4">
        {review.map((e) => {
          return (
            <div>
              <CardTestemonialsDetail description={e.description} />
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
