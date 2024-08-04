import { Specialty } from "@/lib/models/Specialty"
import "./Specialties.css"

type SpecialtiesProps = {
  specialties: Specialty[]
}

export default function Specialties(props: SpecialtiesProps) {
  return (
    <div>
      <h2>Especialidades</h2>
      <ul className="specialties">
        {props.specialties.map((specialty, index) =>
          <li key={`specialty-${index}`}>
            <header><h3>{specialty.title}</h3></header>
            <p>{specialty.description}</p>
          </li>
        )}
      </ul>
    </div>
  )
}
