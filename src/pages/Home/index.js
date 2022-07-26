import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <>
      <Navbar />
      <h1>Connecting the jobs with the best gamers</h1>;
      <Link to={"/signup"}>
        <button>Sign Up</button>
      </Link>
      <Footer />
    </>
  );
}

// Teste branch
