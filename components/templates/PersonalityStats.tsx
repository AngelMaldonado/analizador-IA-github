import { Personality } from "@/lib/models/Personality"

type PersonalityProps = {
  personality: Personality
}

export default function PersonalityStats(props: PersonalityProps) {
  return (
    <div>
      <h3>Personalidad</h3>
      <p>{props.personality.summary}</p>
      <h3>Fortalezas</h3>
      <ul>
        {props.personality.strengths.map((strength, index) =>
          <li key={`strength-${index}`}>{strength}</li>
        )}
      </ul>
      <h3>Debilidades</h3>
      <ul>
        {props.personality.weaknesses.map((weakness, index) =>
          <li key={`weakness-${index}`}>{weakness}</li>
        )}
      </ul>
    </div>
  )
}
