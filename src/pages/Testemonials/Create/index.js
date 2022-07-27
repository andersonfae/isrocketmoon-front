import { CardTestemonialCreate } from "../../../components/Cards/CardTestemonialsAll/CardTestemonialCreate";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";

export function CreateTestemonialPage() {
  return (
    <>
      <Navbar />
      <CardTestemonialCreate />
      <Footer />
    </>
  );
}
