import { createPortal } from "react-dom";
import Cv from "../images/cv.png";
import "./Portal.css";
import CloseIcon from "@mui/icons-material/Close";

const Portal = ({
  isOpenPortal,
  setIsOpenPortal,
  setIsOpenPortalTwo,
  isOpenPortalTwo,
}) => {
  console.log(isOpenPortalTwo);
  if (!isOpenPortal && !isOpenPortalTwo) return null;

  return createPortal(
    <div className="modal-container">
      <img src={Cv} />
      <button
        onClick={() => {
          setIsOpenPortal(false);
          setIsOpenPortalTwo(false);
        }}
      >
        <CloseIcon />
      </button>
    </div>,
    document.getElementById("portal")
  );
};

export default Portal;
