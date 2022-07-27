import { useEffect, useState } from "react";
import { CardJobDetail } from "../../../components/Cards/CardJobs/CardJobDetail/index";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { api } from "../../../api/api";
import { useParams } from "react-router-dom";

export function DetailsJobPage() {
  const { jobsId } = useParams();

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await api.get(`/jobs/${jobsId}`);
      setFetchedData(data.data);
    };
    getData();
  }, []);

  console.log("data: ", fetchedData);

  return (
    <>
      <Navbar />
      <div>
        {" "}
        <CardJobDetail
          owner={fetchedData.owner}
          game={fetchedData.game}
          description={fetchedData.description}
          amount={fetchedData.amount}
          id={fetchedData._id}
        />
      </div>
      <Footer />
    </>
  );
}
