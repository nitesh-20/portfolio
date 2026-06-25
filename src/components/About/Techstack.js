import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiExpress, 
  SiGooglecloud, 
  SiHtml5, 
  SiCss3, 
  SiMysql
} from "react-icons/si";
import { FaBrain, FaServer, FaProjectDiagram, FaRobot } from "react-icons/fa";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";

function Techstack() {
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: Javascript, isSvg: true },
        { name: "C++", icon: C, isSvg: true },
        { name: "SQL", icon: SQL, isSvg: true }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: ReactIcon, isSvg: true },
        { name: "TypeScript", icon: Typescript, isSvg: true },
        { name: "HTML5", icon: <SiHtml5 size={24} /> },
        { name: "CSS3", icon: <SiCss3 size={24} /> }
      ]
    },
    {
      title: "Backend & Architecture",
      skills: [
        { name: "Node.js", icon: Node, isSvg: true },
        { name: "Express.js", icon: <SiExpress size={24} /> },
        { name: "REST APIs", icon: <FaServer size={24} /> },
        { name: "MVC Architecture", icon: <FaProjectDiagram size={24} /> }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql size={24} /> },
        { name: "Firebase Firestore", icon: Firebase, isSvg: true }
      ]
    },
    {
      title: "Cloud & AI",
      skills: [
        { name: "Google Cloud Platform", icon: <SiGooglecloud size={24} /> },
        { name: "Firebase", icon: Firebase, isSvg: true },
        { name: "RAG", icon: <FaBrain size={24} /> },
        { name: "LangChain", icon: <FaProjectDiagram size={24} style={{ color: "#c084f5" }} /> },
        { name: "LLMs", icon: <FaRobot size={24} /> },
        { name: "Gemini", icon: <FaBrain size={24} style={{ color: "#c084f5" }} /> }
      ]
    }
  ];

  return (
    <div style={{ paddingBottom: "30px" }}>
      {categories.map((cat, idx) => (
        <div key={idx} style={{ marginBottom: "40px" }}>
          <h3 className="project-heading" style={{ fontSize: "1.6em", textAlign: "center", paddingBottom: "15px", opacity: 0.9 }}>
            {cat.title}
          </h3>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {cat.skills.map((skill, sIdx) => (
              <Col key={sIdx} xs={4} md={2} className="tech-icons">
                {skill.isSvg ? (
                  <img src={skill.icon} alt={skill.name} className="tech-icon-images" />
                ) : (
                  skill.icon
                )}
                <div className="tech-icons-text">{skill.name}</div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
