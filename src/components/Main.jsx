import "./Main.css";
import { useEffect } from "react";
import PreWievWorkSmall from "./PreWievWorkSmall";
import imgLawFirm from "../images/lawfirm.gif";
import imgMovieApp from "../images/eshop.gif";
import imgEshop from "../images/movieapp.gif";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Main = (props) => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        document.querySelector(".small-work9500").style.display = "none";
        console.log(window.innerWidth);
      } else {
        document.querySelector(".small-work9500").style.display = "flex";
      }
    });
  });
  return (
    <div className="header">
      <div className="header-up">
        <div className="header-up-child"></div>
        <p className="header-first-text">Hakan KARAYILMAZ</p>
        <p className="header-second-text">FRONT-END DEVELOPER</p>
        <p className="header-third-text">"Just İmagine..."</p>
        <p className="index-one">Home</p>
      </div>
      <div className="header-down">
        <div className="aboutme">
          <div className="aboutme-first-text">About Me</div>
          <div className="aboutme-second-text">
            I have been developing myself as a frontend developer about a year.I
            have been working on React.js. I love teamwork, spending time on
            computer ,mostly learning and applying new stuff.
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-first-text">My Portfolio</div>
          <div className="portfolio-second-text">
            Let's Check Out My Work...
          </div>
        </div>
        <div className="works">
          <PreWievWorkSmall
            textHead="E-shop App"
            text="E-shop app for e-commerce.Some Used Technologies;React Props, ReactHooks, ReactContext, Metarial UI, Firebase"
            img={imgMovieApp}
            time="8500"
          />
          <PreWievWorkSmall
            textHead="Law Firm Website"
            text="Website for a law firm.Some used Technogies; React Props, ReactHooks, ReactRouter, FontAwesome UI, Metarial UI"
            img={imgLawFirm}
            time="9000"
          />
          <PreWievWorkSmall
            textHead="Movie App"
            text="Add your list which your favourite movie and don't forget name of the movie.Some used Technogies;REST API, ReactHooks..."
            className="last"
            img={imgEshop}
            time="9500"
          />
        </div>
        <div style={{ display: "flex" }} className="buttons">
          <Link style={{ textDecoration: "none" }} to="allworks">
            <Button
              size="small"
              sx={{ marginRight: "10px" }}
              variant="contained"
            >
              View All Works
            </Button>
          </Link>

          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://github.com/hkankyilmaz"
          >
            <Button size="small" variant="contained">
              Go GitHub Profile
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
