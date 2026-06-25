import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <b className="purple">Computer Science undergraduate</b> and <b className="purple">GDG Lead at SSIPMT Raipur</b>.
              I am highly passionate about building scalable web applications and AI-powered solutions.
              <br />
              <br />
              I have developed proficiency in core development languages and frameworks:
              <i>
                <b className="purple"> JavaScript, C++, SQL, React.js, and Node.js</b>
              </i>.
              <br />
              <br />
              My professional interest lies in building real-world projects across
              <i>
                <b className="purple"> Agriculture, Legal Tech, and FinTech domains</b>
              </i>,
              with a strong interest in backend engineering, cloud technologies, and intelligent systems.
              <br />
              <br />
              Whenever possible, I love applying my skills in
              <i>
                <b className="purple"> RAG (Retrieval-Augmented Generation), LLMs, and Gemini</b>
              </i>
              to create smart, user-centric solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
// End of Home2 module
