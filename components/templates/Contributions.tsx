import { Contribution } from "@/lib/models/Contribution"
import "./Contributions.css"

type ContributionsProps = {
  contributions: Contribution[]
}

export default function Contributions(props: ContributionsProps) {
  return (
    <div>
      <ul className="contributions">
        {props.contributions.map((contribution, index) =>
          <li key={`contribution-${index}`}>
            <p className="contribution-level">{contribution.contribution_percentage}% de contribución</p>
            <h3>{contribution.name}</h3>
            <p>{contribution.contribution}</p>
            <ul className="badges-list">
              {contribution.languages.map((language, index) =>
                <li key={`language-${index}`}>{language}</li>
              )}
            </ul>
          </li>
        )}
      </ul>
    </div>
  )
}
