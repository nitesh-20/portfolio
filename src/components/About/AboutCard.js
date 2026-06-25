import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Nitesh Sahu</span>{" "}
            from <span className="purple">Raipur, Chhattisgarh, India</span>.
            <br />
            I’m currently a B.Tech in Computer Science and Engineering undergraduate at{" "}
            <span className="purple">SSIPMT Raipur (CSVTU)</span> (2023–2027).
            <br />
            I am also the <span className="purple">GDG Lead</span> at{" "}
            <span className="purple">SSIPMT Raipur</span>, leading student communities and developer events.
            <br />
            <br />
            Key milestones and achievements from my journey:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Winner — Google Build Blog Marathon 2025
            </li>
            <li className="about-activity">
              <ImPointRight /> Finalist — Google Cloud Agentic AI Day 2025
            </li>
            <li className="about-activity">
              <ImPointRight /> Finalist — Paytm Hackathon 2026
            </li>
            <li className="about-activity">
              <ImPointRight /> Finalist — East India Blockchain Hackathon, IIT Kharagpur
            </li>
            <li className="about-activity">
              <ImPointRight /> 4th Rank — ESG Invest Hackathon, IIT Bombay
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
// Card styles applied
