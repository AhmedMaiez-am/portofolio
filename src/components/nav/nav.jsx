import "./nav.css";
import { AiOutlineUser } from "react-icons/ai";
import { BsBookmarkStar } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineUser className="icon active-nav" />
      </a>
      <a href="#about">
        <BsBookmarkStar className="icon" />
      </a>
      <a href="#members">
        <AiOutlineFundProjectionScreen className="icon" />
      </a>
      <a href="#timeline">
        <AiOutlineDeploymentUnit className="icon" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
