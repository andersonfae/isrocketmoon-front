import { useEffect, useState } from "react";
import { CardJobDetail } from "../../../components/Cards/CardJobs/CardJobDetail/index";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { api } from "../../../api/api";
import { useParams } from "react-router-dom";

export function DetailsJobPage() {
  const [jobs, setJobs] = useState({});
  const { jobsId } = useParams();

  useEffect(() => {
    async function fetchJobs() {
      const response = await api.get(`/jobs/${jobsId}`);
      setJobs(...response.data);
      console.log(response);
    }
    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {/* {jobs.map((currentJob) => {
          return (
            <div key={currentJob._id}>
              <CardJobDetail
                owner={currentJob.owner}
                game={currentJob.game}
                description={currentJob.description}
                amount={currentJob.amount}
                id={currentJob._id}
              />
            </div>
          );
        })} */}
        <CardJobDetail />
      </div>
      <Footer />
    </>
  );
}
