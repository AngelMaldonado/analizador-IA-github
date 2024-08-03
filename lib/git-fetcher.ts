import { Event } from "./models/Event"
import { GithubUser } from "./models/GithubUser"
import { Repo } from "./models/Repo"

export async function getGithubUser(user: string): Promise<GithubUser> {
  const response = await fetch(`https://api.github.com/users/${user}`)
  const data = await response.json() as GithubUser
  return data
}

export async function getUserRepos(user: string) {
  const response = await fetch(`https://api.github.com/users/${user}/repos`)
  const data = await response.json() as Array<Repo>
  return data
}

export async function getUserEvents(user: string) {
  const response = await fetch(`https://api.github.com/users/${user}/events`)
  const data = await response.json() as Array<Event>
  return data
}
