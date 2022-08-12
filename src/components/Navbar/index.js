import { useState, useContext } from "react";
import Moon from "../../images/logo-moon-wobg.svg";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate, Link } from "react-router-dom";
import { i18next } from "../../translate/i18n";

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { loggedInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const I18N_STORAGE_KEY = "i18nextLng";

  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));

  const handleSelectChange = (event) => {
    window.localStorage.setItem(I18N_STORAGE_KEY, event.target.value);

    document.location.reload(true);
  };

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <header
      id="header"
      className="flex items-center justify-between fixed text-white px-4 py-4 z-50 right-0 left-0 top-0 bg-black/[.5]"
    >
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
        <section className="MOBILE-MENU flex lg:hidden items-center">
          <Link to={"/signup"}>
            {" "}
            <button className="flex shadow bg-[#8718E1] hover:bg-[#8718E1] focus:shadow-outline focus:outline-none text-white text-xs py-2.5 px-4 rounded mr-16 uppercase">
              {" "}
              {i18next.t("navbar.signUpHome")}
            </button>
          </Link>

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
              className="CROSS-ICON absolute top-11 right-4 px-5 py-5 rounded-full border-2
              border-white hover:bg-white text-white ml-4"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-white"
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
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-5xl font-serif">
              <li className="pt-14 pb-10">
                <a href="/">{i18next.t("navbar.home")}</a>
              </li>

              <li className="pb-10">
                <a href="/jobs">{i18next.t("navbar.jobs")}</a>
              </li>
              <span className="pb-10">
                {loggedInUser ? (
                  <a href="/profile">{i18next.t("navbar.yourProf")}</a>
                ) : (
                  <a href="/login">{i18next.t("navbar.login")}</a>
                )}
              </span>
              <li className="flex shadow bg-purple-600 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white py-2.5 px-4 rounded">
                {loggedInUser ? (
                  <a href="/" onClick={handleLogOut}>
                    {i18next.t("navbar.logout")}
                  </a>
                ) : (
                  <a href="/signup">{i18next.t("navbar.signUpHamb")}</a>
                )}
              </li>
              <br />
              <li>
                <select
                  onChange={handleSelectChange}
                  value={language}
                  className="bg-black"
                >
                  <option
                    className="text-gray-900 dark:text-gray-400"
                    value="en-US"
                  >
                    EN
                  </option>
                  <option
                    className="text-gray-900 dark:text-gray-400"
                    value="fr-FR"
                  >
                    FR
                  </option>
                </select>
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
          {loggedInUser ? (
            <a href="/profile">Your profile</a>
          ) : (
            <a href="/login">Sign in</a>
          )}
          <li className="flex shadow bg-purple-600 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white py-2.5 px-4 rounded">
            {loggedInUser ? (
              <a href="/" onClick={handleLogOut}>
                Logout
              </a>
            ) : (
              <a href="/signup">Sign Up</a>
            )}
          </li>
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
        z-index: 50;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </header>
  );
}
