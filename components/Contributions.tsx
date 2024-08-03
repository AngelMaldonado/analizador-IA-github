type ContributionsProps = {
  contributions: string[]
}

export default function Contributions(props: ContributionsProps) {
  return (
    <ul>
      {props.contributions.map((contribution, index) =>
        <li key={`contribution-${index}`}>{contribution}</li>
      )}
    </ul>
  )
}
