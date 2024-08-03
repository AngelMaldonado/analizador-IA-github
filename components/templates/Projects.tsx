import { Project } from "@/lib/models/Project"

type ProjectsProps = {
  projects: Project[]
}

export default function Projects(props: ProjectsProps) {
  return (
    <ul>
      {props.projects.map((project, index) =>
        <li key={`project-${index}`}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul>
            {project.languages.map((language, index) =>
              <li key={`language-${index}`}>{language}</li>
            )}
          </ul>
          <p>{project.stars} ⭐</p>
          <p>{project.forks} 🍴</p>
        </li>
      )}
    </ul>
  )
}
