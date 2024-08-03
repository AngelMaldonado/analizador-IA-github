type PersonalityProps = {
  personality: string[]
}

export default function Personality(props: PersonalityProps) {
  return (
    <ul>
      {props.personality.map((personality, index) =>
        <li key={`personality-${index}`}>{personality}</li>
      )}
    </ul>
  )
}
