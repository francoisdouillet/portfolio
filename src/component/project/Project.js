import { useState } from "react";
import lolchampion from "../../images/lolchampion.jpg";
import omf from "../../images/omf.png";
import reservia from "../../images/reservia.png";
import LinkIcon from '@mui/icons-material/Link';

const Project = () => {
  const [projects, setProjects] = useState([
    { name: "LOL-CHAMPION", image: lolchampion, isHovered: false, techno: 'ReactJS, NodeJS, MangoDB', href: 'https://lolchampions-six.vercel.app/' },
    { name: "OhMyFood", image: omf, isHovered: false, techno: 'HTML, CSS, SASS', href: 'https://francoisdouillet.github.io/DOUILLETFrancois_3_01-02-2021/' },
    { name: "Reservia", image: reservia, isHovered: false, techno: 'HTML, CSS, SASS', href: "https://francoisdouillet.github.io/DOUILLETFrancois_2_27-12-2020/" },
  ]);

  const handleMouseEnter = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].isHovered = true;
    setProjects(updatedProjects);
  };

  const handleMouseLeave = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].isHovered = false;
    setProjects(updatedProjects);
  };

  return (
    <div className="project">
      <div className="project__image">
        {projects.map((project, index) => (
          <img
            key={index}
            src={project.image}
            alt={project.name}
            style={{
              opacity: project.isHovered ? 1 : 0,
              transform: project.isHovered ? "scale(1.02)" : "scale(1)",
              transition: "opacity 0.3s, transform 0.3s",
            }}
          />
        ))}
      </div>
      <div className="project__content">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="project__content--box"
          >
            <h2>{project.name}</h2>
            <div>
              <h3>Technos :</h3>
              <p>{project.techno}</p>
            </div>
            <a href={project.href} target="blank"><LinkIcon /></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
