import { useState, useContext } from "react";
import Logo from "../../images/rocketLogo.png";
import Moon from "../../images/logo-moon-wobg.svg";
import { AuthContext } from "../../contexts/authContext";

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { loggedInUser } = useContext(AuthContext);

  console.log(loggedInUser);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 bg-black text-white pt-8 pl-4 pr-4 pb-9">
      <a href="/">
        <span className="flex items-center text-4xl uppercase font-logo">
          Rocket M{" "}
          <img
            src={Moon}
            alt="logo"
            className="animate-spin"
            style={{
              animation: "spin 8s linear infinite",
            }}
          />
          on
        </span>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden bg-black">
          <button> Sign in</button>
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8">
                <a href="/">Home</a>
              </li>
              <li className="border-b border-gray-400 my-8">
                <a href="/jobs">Jobs</a>
              </li>
              <li>
                <a href="/login">Sign in</a>
              </li>
              <li className="border-b border-gray-400 my-8">
                {loggedInUser ? (
                  <a href="/profile">Sign Out</a>
                ) : (
                  <a href="/signup">Sign Up</a>
                )}
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/jobs">Jobs</a>
          </li>
          <li>
            <a href="/login">Sign in</a>
          </li>
          <li>
            {loggedInUser ? (
              <a href="/profile">Sign Out</a>
            ) : (
              <a href="/signup">Sign Up</a>
            )}
          </li>
          {loggedInUser && (
            <li>
              <a href="/profile">Your Profile</a>
            </li>
          )}
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: black;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
