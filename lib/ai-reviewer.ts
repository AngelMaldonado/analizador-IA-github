import { FormEvent } from "react"
import { GithubUser } from "./models/GithubUser"

export async function getGithubUser(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()

  const user = new FormData(event.target as HTMLFormElement).get("user") as string
  const apiKey = new FormData(event.target as HTMLFormElement).get("apikey") as string

  const res = await fetch(`https://api.github.com/users/${user}`)
  const githubUser: GithubUser = await res.json()
  return githubUser
}
