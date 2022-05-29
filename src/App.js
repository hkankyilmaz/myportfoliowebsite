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
  console.log(document.URL);

  console.log(document.URL);

  useEffect(() => {
    if (
      document.URL ==
      "https://myportfoliowebsite-git-first-branc-4a68e8-hkankyilmazz-gmailcom.vercel.app/"
    ) {
      let idxOne = 1;
      let idxTwo = 1;
      let idxThree = 1;
      let idxFour = 1;
      const textOneDiv = document.querySelector(".aboutme-first-text");
      const textTwoDiv = document.querySelector(".aboutme-second-text");
      const textThreeDiv = document.querySelector(".portfolio-first-text");
      const textFourDiv = document.querySelector(".portfolio-second-text");

      textOneDiv.innerHTML = "";
      textTwoDiv.innerHTML = "";
      textThreeDiv.innerHTML = "";
      textFourDiv.innerHTML = "";

      const textOne = "About Me";
      const textTwo = `I have been developing myself as a frontend developer about a year.I have been working on React.js. I love teamwork, spending  time on computer ,mostly learning and applying new stuff.`;

      const textThree = "My Portfolio";
      const textFour = `Let's Check Out My Work...`;

      const writeTextOne = () => {
        textOneDiv.innerHTML = textOne.slice(0, idxOne);
        idxOne++;
        if (idxOne <= textOne.length) {
          setTimeout(writeTextOne, 20);
        }
      };
      writeTextOne();
      const writeTextTwo = () => {
        textTwoDiv.innerHTML = textTwo.slice(0, idxTwo);
        idxTwo++;
        if (idxTwo <= textTwo.length) {
          setTimeout(writeTextTwo, 20);
        }
      };
      setTimeout(writeTextTwo, 500);

      const writeTextThree = () => {
        textThreeDiv.innerHTML = textThree.slice(0, idxThree);
        idxThree++;
        if (idxThree <= textThree.length) {
          setTimeout(writeTextThree, 20);
        }
      };
      setTimeout(writeTextThree, 5200);
      const writeTextFour = () => {
        textFourDiv.innerHTML = textFour.slice(0, idxFour);
        idxFour++;
        if (idxFour <= textFour.length) {
          setTimeout(writeTextFour, 20);
        }
      };
      setTimeout(writeTextFour, 6000);

      document.querySelector(".buttons").style.display = "none";

      const showButtons = () => {
        document.querySelector(".buttons").style.display = "flex";
      };

      setTimeout(showButtons, 8000);

      document.querySelector(".small-work8500").style.display = "none";
      document.querySelector(".small-work9000").style.display = "none";
      document.querySelector(".small-work9500").style.display = "none";

      const firstsmallWorkShow = () => {
        document.querySelector(".small-work8500").style.display = "flex";
      };
      const secondsmallWorkShow = () => {
        document.querySelector(".small-work9000").style.display = "flex";
      };
      const thirdsmallWorkShow = () => {
        document.querySelector(".small-work9500").style.display = "flex";
      };

      setTimeout(firstsmallWorkShow, 7000);
      setTimeout(secondsmallWorkShow, 7000);
      setTimeout(thirdsmallWorkShow, 7000);
    }
  }, []);

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
                  <hr style={{ color: "#ad8e02" }}></hr>
                </Link>
              </li>
              <li>
                <Link to="allworks">
                  Portfolio
                  <hr style={{ color: "#ad8e02" }}></hr>
                </Link>
              </li>
              <li>
                <a onClick={handleOpenPortalTwo} href="#">
                  CV
                  <hr style={{ color: "#ad8e02" }}></hr>
                </a>
              </li>
              <li>
                <Link style={{ marginBottom: "20px" }} to="contact">
                  Contact
                  <hr style={{ color: "#ad8e02" }}></hr>
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
