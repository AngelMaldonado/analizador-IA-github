type ProjectsProps = {
  projects: string[]
}

export default function Projects(props: ProjectsProps) {
  return (
    <ul>
      {props.projects.map((project, index) =>
        <li key={`project-${index}`}>{project}</li>
      )}
    </ul>
  )
}
