import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/ahmed-dhia-eddine-maiez-b75ba4180/"
          target={"blank"}
        >
          <BsLinkedin className="social" />
        </a>
        <a href="https://www.facebook.com/DhiaMaiez/" target={"blank"}>
          {" "}
          <FaFacebookF className="social" />
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=21653874245&text=Hi"
          target={"blank"}
        >
          <BsWhatsapp className="social" />
        </a>

        <a href="https://github.com/AhmedMaiez-am" target={"blank"}>
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
