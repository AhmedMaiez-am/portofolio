import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <main>
        <h2>
          <span>My Projects</span> <br />
        </h2>
      </main>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Municipalité Ras Jebel</h1>
          <h3 className="position">MERN Stack</h3>
          <h4 className="about">
            ● Host institution : Tunisia Smart Technoparks
            <br />
            <br />
            ● Date : Jul 2022- Sep 2022 | Tunis
            <br />
            <br />
            Planning, Design and Development of a web application for task and
            resource management from the municipality of Ras Jebel
          </h4>
          <a
            href="https://github.com/RJInnovationCenter/Municipalite-MERN_Stack"
            className="contact-member"
            target={"blank"}
          >
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">E-Learning Application</h1>
          <h3 className="position">JavaFx - Symfony - CodeNameOne</h3>
          <h4 className="about">
            ● Host institution : ESPRIT
            <br />
            <br />
            ● Date : Jan 2021- May 2021 | Tunis
            <br />
            <br />
            Planning, design and realization of a hybrid E-Learning application
            available in 3 version : Desktop, web and mobile
          </h4>
          <a
            href="https://github.com/AhmedMaiez-am/Web-Masters-PIDEV"
            className="contact-member"
            target={"blank"}
          >
            <span>Github Web</span>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://github.com/AhmedMaiez-am/PIDEV-JAVAFX"
            className="contact-member"
            target={"blank"}
          >
            <span>Github Desktop</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">E-learning Website</h1>
          <h3 className="position">MERN Stack</h3>
          <h4 className="about">
            ● Host institution : ESPRIT
            <br />
            <br />
            ● Date : Jan 2022- May 2022| Tunis
            <br />
            <br />
            Planning, design and realization of a online E-Learning platform
            with MERN Stack (MongoDB, ExpressJs, ReactJs, NodeJs)
          </h4>
          <a
            href="https://github.com/Maryem726/BesTest"
            className="contact-member"
            target={"blank"}
          >
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">DevOps Pipeline</h1>
          <h3 className="position">DevOps Tools</h3>
          <h4 className="about">
            ● Host institution : ESPRIT
            <br />
            <br />
            ● Date : Sep 2022- Nov 2022| Tunis
            <br />
            <br />
            - Spring Boot application management with maven
            <br />
            - Git and GitHub for source code management
            <br />
            - Managing unit tests with JUnit
            <br />
            - Code quality management with SonarQube
            <br />
            - Continuous integration with Jenkins pipeline
            <br />
            - Management of work environments with Docker and Docker Compose
            <br />
            - Versioning with Nexus
            <br />- Project analysis with Prometheus and Grafana
          </h4>
          <a
            href="https://github.com/AhmedMaiez-am/DevOps-Backend"
            className="contact-member"
            target={"blank"}
          >
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
