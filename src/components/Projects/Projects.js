import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Agrisahayak – AI Agriculture Assistant"
              description="Finalist project at Google Cloud Agentic AI Day 2025. Built AI workflows to deliver real-time crop guidance, weather alerts, and market insights. Designed scalable, cloud-based recommendation systems focused on farmer usability."
              ghLink="https://github.com/nitesh-20"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="LawGPT – AI Legal Assistant"
              description="Developed an AI-powered system for legal document analysis and question answering. Implemented Retrieval-Augmented Generation (RAG) with vector search to reduce hallucinations. Enabled semantic search across multi-page legal PDFs."
              ghLink="https://github.com/nitesh-20"
              demoLink="https://law-gpt-1c925.firebaseapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Airline-Backend-System"
              description="Designed and implemented a scalable backend system for airline and flight management. Modeled relational data using MySQL for Airlines, Flights, Airports, and Cities. Built RESTful APIs using Node.js and Express.js following MVC architecture."
              ghLink="https://github.com/nitesh-20"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
