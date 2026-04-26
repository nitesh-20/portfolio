import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Nitesh Kumar Sahu</span>{" "}
            from <span className="purple">Raipur, Chhattisgarh, India</span>.
            <br />
            I’m currently a B.Tech in CSE undergraduate at{" "}
            <span className="purple">SSIPMT Raipur (CSVTU)</span>.
            <br />
            I previously worked as a{" "}
            <span className="purple">Frontend Developer Intern</span> at{" "}
            <span className="purple">Internship Studio</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Community Leading (GDG Lead)
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nitesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
