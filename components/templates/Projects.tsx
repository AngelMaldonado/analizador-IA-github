import { Project } from "@/lib/types/Project"
import "./Projects.css"

type ProjectsProps = {
  projects: Project[]
}

export default function Projects(props: ProjectsProps) {
  return (
    <div>
      <h2>Proyectos</h2>
      <ul className="projects">
        {props.projects.length > 0 ? props.projects.map((project, index) =>
          <li key={`project-${index}`}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="stats">
              <p className="stars">{project.stars} Estrellas✨</p>
              <p className="forks">{project.forks} Forks🍴</p>
            </div>
            <ul className="badges-list">
              {project.languages.map((language, index) =>
                <li key={`language-${index}`}>{language}</li>
              )}
            </ul>
          </li>
        ) : <li>No hay suficiente información para generar los proyectos 🥺</li>}
      </ul>
    </div>
  )
}
