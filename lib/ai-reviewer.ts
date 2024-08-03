import { Contribution } from "./models/Contribution";
import { Event } from "./models/Event";
import { GithubUser } from "./models/GithubUser";
import { Personality } from "./models/Personality";
import { Project } from "./models/Project";
import { Repo } from "./models/Repo";
import { Specialty } from "./models/Specialty";
import { promises as fs } from "fs"

export async function analyzeUser(user: GithubUser, repos: Array<Repo>, events: Array<Event>) {
  const specialties = JSON.parse(await fs.readFile(process.cwd() + "/public/specialties.json", "utf-8")) as Array<Specialty>
  const projects = JSON.parse(await fs.readFile(process.cwd() + "/public/projects.json", "utf-8")) as Array<Project>
  const contributions = JSON.parse(await fs.readFile(process.cwd() + "/public/contributions.json", "utf-8")) as Array<Contribution>
  const personality = JSON.parse(await fs.readFile(process.cwd() + "/public/personality.json", "utf-8")) as Array<Personality>
  return { specialties, projects, contributions, personality }
}
