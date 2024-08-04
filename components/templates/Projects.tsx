import { Project } from "@/lib/models/Project"
import "./Projects.css"

type ProjectsProps = {
  projects: Project[]
}

export default function Projects(props: ProjectsProps) {
  return (
    <div>
      <h2>Proyectos</h2>
      <ul className="projects">
        {props.projects.map((project, index) =>
          <li key={`project-${index}`}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="stats">
              <p className="stars">{project.stars} Estrellas✨</p>
              <p className="forks">{project.forks} Forks🍴</p>
            </div>
            <ul>
              {project.languages.map((language, index) =>
                <li key={`language-${index}`}>{language}</li>
              )}
            </ul>
          </li>
        )}
      </ul>
    </div>
  )
}
