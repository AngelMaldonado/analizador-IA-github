type SpecialtiesProps = {
  specialties: string[]
}

export default function Specialties(props: SpecialtiesProps) {
  return (
    <ul>
      {props.specialties.map((specialty, index) =>
        <li key={`specialty-${index}`}>{specialty}</li>
      )}
    </ul>
  )
}
