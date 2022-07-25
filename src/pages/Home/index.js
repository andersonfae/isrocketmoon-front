import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Connecting the jobs with the best gamers</h1>;
      <Link to={"/signup"}>
        <button>Sign Up</button>
      </Link>
    </>
  );
}

// Teste branch
