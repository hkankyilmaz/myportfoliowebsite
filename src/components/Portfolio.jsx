import "./Portfolio.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

import imgLawFirm from "../images/lawfirm.gif";
import imgMovieApp from "../images/eshop.gif";
import imgEshop from "../images/movieapp.gif";
import Button from "@mui/material/Button";
import PreWievWorkSmall from "./PreWievWorkSmall";
import $ from "jquery";

const Portfolio = () => {
  useEffect(() => {
    document.querySelectorAll(".small-work").forEach((element) => {
      element.style.display = "block";
    });
  });
  useEffect(() => {
    const scrollHandler = () => {
      if (document.querySelector(".all-works").scrollTop > 100) {
        document.querySelector(".up-button").style.display = "block";
      } else {
        document.querySelector(".up-button").style.display = "none";
      }
    };
    document
      .querySelector(".all-works")
      .addEventListener("scroll", scrollHandler);
  });
  useEffect(() => {
    $(".up-button").on("click", function () {
      $(".all-works").animate({ scrollTop: 0 }, 1000);
    });
  });
  return (
    <div className="header">
      <div className="header-up">
        <div className="header-up-child"></div>
        <p className="header-first-text">Hakan KARAYILMAZ</p>
        <p className="header-second-text">FRONT-END DEVELOPER</p>
        <p className="header-third-text">"Just İmagine..."</p>
        <p className="index-one">Portfolio</p>
        <p className="index-two">Home > Portfolio</p>
      </div>
      <div className="all-works">
        <PreWievWorkSmall img={imgMovieApp} />
        <PreWievWorkSmall img={imgLawFirm} />
        <PreWievWorkSmall img={imgEshop} />

        <PreWievWorkSmall img={imgMovieApp} />
        <PreWievWorkSmall img={imgLawFirm} />
        <PreWievWorkSmall img={imgEshop} />

        <PreWievWorkSmall img={imgMovieApp} />
        <PreWievWorkSmall img={imgLawFirm} />
        <PreWievWorkSmall img={imgEshop} />
      </div>
      <FontAwesomeIcon className="up-button" size="2x" icon={faCircleArrowUp} />
    </div>
  );
};

export default Portfolio;
