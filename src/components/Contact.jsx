import "./Contact.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowUp,
  faAt,
  faBuilding,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <div className="header">
      <div className="header-up">
        <div className="header-up-child"></div>
        <p className="header-first-text">Hakan KARAYILMAZ</p>
        <p className="header-second-text">FRONT-END DEVELOPER</p>
        <p className="header-third-text">"Just İmagine..."</p>
        <p className="index-one">Contact</p>
        <p className="index-two">Home > Contact</p>
      </div>
      <div className="contactme">
        <div className="contactme-left">
          <p style={{ marginBottom: "0px", fontWeight: "600" }}>
            <FontAwesomeIcon fade size="lg" icon={faAt} /> E-Mail :
          </p>
          <p>hkankyilmazz@gmail.com</p>
          <p style={{ marginBottom: "0px", fontWeight: "600" }}>
            <FontAwesomeIcon fade size="lg" icon={faPhone} /> Phone :
          </p>
          <p>0551 553 98 72</p>
        </div>
        <div className="contactme-right">
          <div className="name-email-div">
            <TextField
              sx={{ marginRight: "20px", marginBottom: "20px" }}
              variant="outlined"
              id="outlined-helperText"
              label="Name"
              size="small"
            />
            <TextField
              sx={{ marginBottom: "20px" }}
              variant="outlined"
              id="outlined-helperText"
              label="E-mail"
              size="small"
            />
          </div>

          <TextField
            sx={{ marginBottom: "20px" }}
            variant="outlined"
            id="outlined-helperText"
            label="Subject"
            size="small"
          />
          <TextField
            sx={{ marginBottom: "20px" }}
            multiline
            variant="outlined"
            id="outlined-helperText"
            label="Message"
            rows={5}
            size="small"
          />
          <Button sx={{ maxWidth: "200px" }} size="small" variant="contained">
            Send Message
          </Button>
        </div>
        <p className="create-text">Contact Me for new Project...🚀</p>
      </div>
    </div>
  );
};

export default Contact;
