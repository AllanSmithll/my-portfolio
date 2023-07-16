import "../styles/components/technologiescontainer.sass";

import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
  } from "react-icons/di";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "HTML avançado" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, text: "Estilos avançados" },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Javascript avançado" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text: "NodeJS Avançado" },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, text: "MySQL Avançado" },
    { id: "react", name: "React", icon: <DiReact />, text: "React avançado" },
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;