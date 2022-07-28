import { CardJob } from "../../../components/Cards/CardJobs/CardCreateJob";
import { Footer } from "../../../components/Footer";
import { Ball } from "../../../components/GradientBall";
import { Navbar } from "../../../components/Navbar";

export function CreateJobPage() {
  return (
    <>
      <Navbar />
      <CardJob />
      <Ball />
      <Footer />
    </>
  );
}
