import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className="text-center text-white bg-black">
        <div classNameName="container p-6">
          <div className="">
            <p className="flex justify-center items-center">
              <div className="text-center p-4">
                COPYRIGHT © 2022 Rocket Moon. ALL RIGHTS RESERVED.
              </div>
              <Link to={"/credits"}>
                <p>✨ Credits!</p>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
