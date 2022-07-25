import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <>
      <h1>Connecting the jobs with the best gamers</h1>;
      <Link to={"/signup"}>
        <button>Sign Up</button>
      </Link>
      <Footer />
    </>
  );
}
