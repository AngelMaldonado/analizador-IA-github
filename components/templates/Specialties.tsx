import { Specialty } from "@/lib/models/Specialty"

type SpecialtiesProps = {
  specialties: Specialty[]
}

export default function Specialties(props: SpecialtiesProps) {
  return (
    <ul>
      {props.specialties.map((specialty, index) =>
        <li key={`specialty-${index}`}>
          <header>{specialty.title}</header>
          <p>{specialty.description}</p>
        </li>
      )}
    </ul>
  )
}
