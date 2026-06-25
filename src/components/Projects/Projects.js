import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import vaaniAi from "../../Assets/Projects/vaani_ai_preview.png";
import rioPreview from "../../Assets/Projects/rio_preview.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the main projects from my portfolio.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rioPreview}
              isBlog={false}
              title="Regulatory Intelligence OS (RIO)"
              description="AI-powered multi-agent compliance platform that continuously monitors regulatory updates and circulars. Implemented Retrieval-Augmented Generation (RAG) and semantic search using LangChain and Google Gemini to automate compliance tracking, policy risk analysis, and report generation."
              ghLink="https://github.com/nitesh-20/Regulatory-Intelligence-OS-RIO-"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="LawGPT — AI Legal Assistant"
              description="Developed an AI-powered legal document analysis and question-answering platform. Implemented Retrieval-Augmented Generation (RAG) with vector search to enable semantic search and contextual querying across legal PDFs, improving workflow accuracy."
              ghLink="https://github.com/nitesh-20"
              demoLink="https://law-gpt-1c925.firebaseapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vaaniAi}
              isBlog={false}
              title="Vaani.AI — Voice AI for Merchant Intelligence"
              description="Built a voice-first AI assistant helping merchants understand settlements, deductions, and transaction insights. Developed a transaction-aware RAG system integrating Gemini workflows for financial query resolution. Finalist project at Paytm Hackathon 2026."
              ghLink="https://github.com/nitesh-20"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Agrisahayak — AI Agriculture Assistant"
              description="Built an AI-powered platform providing crop guidance, weather alerts, and market intelligence. Integrated cloud-based recommendation systems to assist farmers in decision-making. Finalist project at Google Cloud Agentic AI Day 2025."
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
