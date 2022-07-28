import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className="text-center text-white">
        <div className="container p-6"></div>
        <div className="text-center pt-6 pb-7 text-xs">
          COPYRIGHT © 2022 Rocket Moon. ALL RIGHTS RESERVED.
        </div>
        <div className="flex justify-center items-center pb-6 text-xs underline">
          <Link to={"/credits"}>
            <span>✨ Credits!</span>
          </Link>
        </div>
      </footer>
    </>
  );
}
