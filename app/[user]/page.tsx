import "./page.css"
import { getGithubUser, getUserEvents, getUserRepos } from "@/lib/git-fetcher";
import Modal from "@/components/Modal";
import Specialties from "@/components/templates/Specialties";
import Projects from "@/components/templates/Projects";
import PersonalityStats from "@/components/templates/PersonalityStats";
import { analyzeUser } from "@/lib/ai-reviewer";
import Form from "@/components/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analizador IA Github - Resultados",
  description: "Analizador de perfiles de Github con Vercel AI SDK y Google Gemini 1.5Pro",
}

export const maxDuration = 59

export default async function Results({ params }: { params: { user: string } }) {
  const user = await getGithubUser(params.user)
  const repos = await getUserRepos(params.user)
  const events = await getUserEvents(params.user)

  const { specialties, projects, personality, topLangs } = await analyzeUser(user, repos, events)

  return <>
    <header>
      <Form />
    </header>
    <section>
      <img className="rounded-circle" src={user.avatar_url} alt="" />
      <div className="profile-info flex-column">
        <h2>{user.name}</h2>
        <p>({user.login})</p>
        <ul>
          <li hidden={!user.company ? true : false}>🏢 {user.company}</li>
          <li hidden={!user.location ? true : false}>📍 {user.location}</li>
          <li>🗃️ {user.public_repos} repos públicos</li>
          <li>🤩 {user.followers} seguidores</li>
        </ul>
        <div className="profile-info__langs">
          <p>Top {topLangs.length} lenguajes/tecnologías:</p>
          {topLangs.length > 0 ? topLangs.map(lang =>
            <p key={lang + " badge"}>{lang}</p>
          ) : null}
        </div>
      </div>
      <main className="flex-column">
        <header><p>Análisis de Perfil</p></header>
        <p>{personality.introduction}</p>
        <div className="buttons">
          <Modal html={<Specialties specialties={specialties} />}><span>🌟</span>Especialidades</Modal>
          <Modal html={<Projects projects={projects} />}><span>🚀</span>Proyectos</Modal>
          <Modal html={<PersonalityStats personality={personality} />}><span>🧐</span>Personalidad</Modal>
        </div>
      </main>
    </section>
  </>
}
