import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithub } from "react-icons/si";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import postman from "../../Assets/TechIcons/Postman.svg";
import git from "../../Assets/TechIcons/Git.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub size={24} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
