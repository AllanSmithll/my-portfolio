import "../styles/components/technologiescontainer.sass";

import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiPython,
    DiJava,
    DiPostgresql,
    DiMongodb,
    DiDocker,
    DiDotnet,
    DiSass,
    DiAngularSimple,
    DiMsqlServer,
    DiBootstrap,
    DiGit,
    DiGithub
  } from "react-icons/di";
  
  const technologies = [
    { id: "python", name: "Python", icon: <DiPython />, text: "Linguagem de programação" },
    { id: "java", name: "Java", icon: <DiJava />, text: "Linguagem de programação" },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Linguagem de programação" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text: "Ambiente de execução JavaScript " },
    { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "Linguagem de Marcação de Hipertexto" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, text: "Folhas de estilo para HTML" },
    { id: "sass", name: "SASS", icon: <DiSass />, text: "Folhas de estilo com uma sintaxe incrível" },
    { id: "react", name: "React", icon: <DiReact />, text: "Biblioteca de JavaScript" },
    { id: "angular", name: "Angular", icon: <DiAngularSimple />, text: "Framework Web" },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, text: "SGBD Relacional" },
    { id: "postgres", name: "PostgresSQL", icon: <DiPostgresql />, text: "SGBD Relacional" },
    { id: "sqlserver", name: "MS SQL Server", icon: <DiMsqlServer/>, text: "SGBD Relacional" },
    { id: "mongodb", name: "MongoDB", icon: <DiMongodb />, text: "SGBD Documental" },
    { id: "dotnet", name: ".NET Framework", icon: <DiDotnet />, text: "Plataforma de desenvolvimento" },
    { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />, text: "Framework CSS" },
    { id: "git", name: "Git", icon: <DiGit />, text: "Sistema de controle de versão de código distribuído" },
    { id: "github", name: "Github", icon: <DiGithub />, text: "Serviço baseado em hospedagem de código Git"},
    { id: "docker", name: "Docker", icon: <DiDocker />, text: "Criador e administrador de ambientes isolados em contâineres" },
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