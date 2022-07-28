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

  useEffect(() => {
    async function fetchJobs() {
      const response = await api.get("/jobs/myjobs");
      console.log(response.data);
      setJobs(response.data);
    }

    fetchJobs();
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
      <Faq />
      <Footer />
    </>
  );
}

// Teste branch
