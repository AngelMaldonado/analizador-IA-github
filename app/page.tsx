import Input from "@/components/Input";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";
import "./app.css"

export default function Home() {
  return (
    <main className="flex-column">
      <h1>Revisador de GitHub</h1>
      <section>
        <img src="owl.svg" alt="Caricatura de un búho" />
        <h3>
          Escribe un perfil de GitHub y recibe retroalimentación sobre el desarrollador.
        </h3>
        <form className="flex-column">
          <Input icono={<FaGithubAlt />} placeholder={"Ingresa el usuario de GitHub"} title={"Usuario de GitHub"} type={"text"} name={"github"} id={"github"} />
          <Input icono={<FaGoogle />} placeholder={"Google Gemini API key"} title={"API key de Google Gemini"} type={"password"} name={"apikey"} id={"apikey"} />
        </form>
      </section>
    </main>
  );
}
