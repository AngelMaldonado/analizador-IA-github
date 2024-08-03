import { Contribution } from "@/lib/models/Contribution"

type ContributionsProps = {
  contributions: Contribution[]
}

export default function Contributions(props: ContributionsProps) {
  return (
    <ul>
      {props.contributions.map((contribution, index) =>
        <li key={`contribution-${index}`}>
          <h3>{contribution.name}</h3>
          <p>{contribution.contribution_percentage}% de contribución</p>
          <p>{contribution.contribution}</p>
          <ul>
            {contribution.languages.map((language, index) =>
              <li key={`language-${index}`}>{language}</li>
            )}
          </ul>
        </li>
      )}
    </ul>
  )
}
