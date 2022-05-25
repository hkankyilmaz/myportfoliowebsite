import "./SideNavbar.css";
import { Link } from "react-router-dom";
import Avatar from "../images/ben.JPG";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import { useState } from "react";
import Portal from "./Portal";

const SideNavbar = ({ isOpenPortalTwo, setIsOpenPortalTwo }) => {
  const [isOpenPortal, setIsOpenPortal] = useState(false);

  const handleOpenPortal = () => {
    setIsOpenPortal(true);
  };

  return (
    <div className="side-bar-container">
      <div className="side-header">
        <img className="avatar" src={Avatar} />
        <p>Hakan KARAYILMAZ</p>
      </div>
      <div className="side-middle">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="allworks">Portfolio</Link>
          </li>
          <li>
            <a href="#" onClick={handleOpenPortal}>
              CV
            </a>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <Portal
          setIsOpenPortalTwo={setIsOpenPortalTwo}
          isOpenPortalTwo={isOpenPortalTwo}
          isOpenPortal={isOpenPortal}
          setIsOpenPortal={setIsOpenPortal}
        />
      </div>
      <div className="side-footer">
        <div>
          <a
            target="_blank"
            href="https://linkedin.com/in/hakan-karayilmaz-6b012a152"
          >
            <LinkedInIcon
              className="linked icon"
              fontSize="large"
              color="primary"
            />
          </a>
          <a target="_blank" href="https://github.com/hkankyilmaz">
            <GitHubIcon
              className="github icon"
              fontSize="large"
              color="secondary"
            />
          </a>
        </div>
        <p>Copyright @ 2022</p>
      </div>
    </div>
  );
};

export default SideNavbar;
