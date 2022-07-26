import { CardEditJob } from "../../../components/Cards/CardJobs/CardEditJob";
import { Footer } from "../../../components/Footer";
import { Ball } from "../../../components/GradientBall";
import { Navbar } from "../../../components/Navbar";

export function EditJobPage() {
  return (
    <>
      <Navbar />
      <CardEditJob />
      <Ball />
      <Footer />
    </>
  );
}
