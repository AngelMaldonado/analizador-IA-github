"use client"
import Input from "@/components/Input";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation"
import "./app.css"
import { getGithubUser } from "@/lib/ai-reviewer";

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex-column">
      <h1>Revisador de GitHub</h1>
      <section>
        <img src="owl.svg" alt="Caricatura de un búho" />
        <h3>
          Escribe un perfil de GitHub y recibe retroalimentación sobre el desarrollador.
        </h3>
        <form onSubmit={getGithubUser} className="flex-column">
          <Input required icon={<FaGoogle />} placeholder={"Google Gemini API key"} title={"API key de Google Gemini"} type={"password"} name={"apikey"} id={"apikey"} />
          <Input required icon={<FaGithubAlt />} placeholder={"Ingresa el usuario de GitHub"} title={"Usuario de GitHub"} type={"text"} name={"user"} id={"user"} />
          <button type="submit">
            <span>🔎</span>
            Revisar
          </button>
        </form>
      </section>
    </main>
  );
}
