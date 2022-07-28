import { CardTestemonialCreate } from "../../../components/Cards/CardTestemonialsAll/CardTestemonialCreate";
import { Footer } from "../../../components/Footer";
import { Ball } from "../../../components/GradientBall";
import { Navbar } from "../../../components/Navbar";

export function CreateTestemonialPage() {
  return (
    <>
      <Navbar />
      <CardTestemonialCreate />
      <Ball />
      <Footer />
    </>
  );
}
