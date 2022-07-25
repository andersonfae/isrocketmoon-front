import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className="text-center text-white bg-black">
        <div classNameName="container p-6"></div>
        <div className="text-center pt-6 pb-7 text-xs">
          COPYRIGHT © 2022 Rocket Moon. ALL RIGHTS RESERVED.
        </div>
        <div className="">
          <p className="flex justify-center items-center pb-6 text-xs">
            <Link to={"/credits"}>
              <p>✨ Credits!</p>
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
