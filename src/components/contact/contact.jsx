import "./contact.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/maiez-ahmed-dhia-eddine-b75ba4180/"
          className="contact linkedin"
          target={"blank"}
        >
          <AiOutlineLinkedin className="icon" />
          <h2>
            linkedin <span>Maiez Ahmed Dhia Eddine</span>
          </h2>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=21653874245&text=Hi"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+216 53 874 245</span>
          </h2>
        </a>

        <a href="https://www.facebook.com/DhiaMaiez/" className="contact facebook" target={"blank"}>
          <AiOutlineFacebook className="icon" />
          <h2>
            facebook <span>Ahmed Maiez</span>
          </h2>
        </a> 


        <a href="https://github.com/AhmedMaiez-am" className="contact github" target={"blank"}>
          <AiOutlineGithub className="icon" />
          <h2>
            github <span>AhmedMaiez-am</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
