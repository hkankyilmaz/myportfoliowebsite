import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideNavbar from "./components/SideNavbar";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [isOpenPortalTwo, setIsOpenPortalTwo] = useState(false);
  const handleOpenPortalTwo = () => {
    setIsOpenPortalTwo(true);
  };
  console.log(window.location.pathname);

  console.log(document.URL);

  useEffect(() => {
    const open_btn = document.querySelector(".open-btn");
    const close_btn = document.querySelector(".close-btn");
    const nav = document.querySelectorAll(".nav_");
    const links = document.querySelectorAll("a");

    open_btn.addEventListener("click", () => {
      document.querySelector(".open-btn").classList.add("open-btn-de-active");
      document.querySelector(".open-btn").classList.remove("open-btn-active");
      nav.forEach((nav_el) => nav_el.classList.add("visible"));
    });

    close_btn.addEventListener("click", () => {
      const delay = () => {
        open_btn.classList.remove("open-btn-de-active");
        open_btn.classList.add("open-btn-active");
      };

      setTimeout(delay, 500);

      nav.forEach((nav_el) => nav_el.classList.remove("visible"));
    });

    links.forEach((element) => {
      const delay = () => {
        open_btn.classList.remove("open-btn-de-active");
        open_btn.classList.add("open-btn-active");
      };
      element.addEventListener("click", () => {
        setTimeout(delay, 1000);
        nav.forEach((nav_el) => nav_el.classList.remove("visible"));
      });
    });
  });

  return (
    <div className="App">
      <SideNavbar
        setIsOpenPortalTwo={setIsOpenPortalTwo}
        isOpenPortalTwo={isOpenPortalTwo}
      />

      <button class="nav_-btn open-btn">
        <FontAwesomeIcon className="bars" icon={faBars} size="2x" />
      </button>

      <div class="nav_ nav_-black">
        <div class="nav_ nav_-red">
          <div class="nav_ nav_-white">
            <button class="nav_-btn close-btn">
              <FontAwesomeIcon
                icon={faXmark}
                size="2x"
                style={{ color: "black", zIndex: "12" }}
              />
            </button>
            <ul className="list-two">
              <li>
                <Link to="/" className="current">
                  Home
                  <hr></hr>
                </Link>
              </li>
              <li>
                <Link to="allworks">
                  Portfolio
                  <hr></hr>
                </Link>
              </li>
              <li>
                <a onClick={handleOpenPortalTwo} href="#">
                  CV
                  <hr></hr>
                </a>
              </li>
              <li>
                <Link style={{ marginBottom: "20px" }} to="contact">
                  Contact
                  <hr></hr>
                </Link>
              </li>

              <h5 className="logo">
                <Link to="/">
                  <span className="brand-text-two">
                    Hakan KARAYILMAZ <hr className="avatar-hr"></hr>
                  </span>
                </Link>
              </h5>
            </ul>
          </div>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
            </>
          }
        />
        <Route
          path="allworks"
          element={
            <>
              <Portfolio />
            </>
          }
        />
        <Route
          path="contact"
          element={
            <>
              <Contact />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
