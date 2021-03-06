import "./Portfolio.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

import imgLawFirm from "../images/lawfirm.gif";
import imgMovieApp from "../images/eshop.gif";
import imgEshop from "../images/movieapp.gif";
import imgPortfolio from "../images/port.png";
import imgTicToc from "../images/tictoc.png";
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
        <PreWievWorkSmall
          url="https://github.com/hkankyilmaz/eshopapp.git"
          pages="https://eshopapp-two.vercel.app/"
          textHead="E-shop App"
          text="E-shop app for e-commerce.Some Used Technologies;React Props, ReactHooks, ReactContext, Metarial UI, Firebase"
          img={imgMovieApp}
        />
        <PreWievWorkSmall
          url="https://github.com/hkankyilmaz/lawfirmwebsite.git"
          pages="https://000-kocaerhukukburosu.vercel.app/"
          textHead="Law Firm Website"
          text="Website for a law firm.Some used Technogies; React Props, ReactHooks, ReactRouter, FontAwesome UI, Metarial UI"
          img={imgLawFirm}
        />
        <PreWievWorkSmall
          url="https://github.com/hkankyilmaz/movieapp.git"
          pages="https://007-movieapp-r5ypmbcpp-hkankyilmazz-gmailcom.vercel.app/"
          textHead="Movie App"
          text="Add your list which your favourite movie and don't forget name of the movie.Some used Technogies;REST API, ReactHooks..."
          className="last"
          img={imgEshop}
        />

        <PreWievWorkSmall
          url="https://github.com/hkankyilmaz/myportfoliowebsite.git"
          pages="https://hkankyilmaz.vercel.app/"
          textHead="Portfolio Website"
          text="Personel Website.Some used Technologies;React Props, ReactHooks, ReactPortal, Metarial UI, FontAwesome UI"
          img={imgPortfolio}
        />
        <PreWievWorkSmall
          url="https://github.com/hkankyilmaz/tictocgame.git"
          pages="https://tictocgame-kr5ft5b1v-hkankyilmazz-gmailcom.vercel.app/"
          textHead="TicToc Game"
          text="Basic TicToc game.Some Used Technologies;React Props, ReactHooks, ReactContext, Metarial UI, Firebase    "
          img={imgTicToc}
        />
      </div>
      <FontAwesomeIcon className="up-button" size="2x" icon={faCircleArrowUp} />
    </div>
  );
};

export default Portfolio;
