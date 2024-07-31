import Input from "@/components/Input";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <h1>Revisador de GitHub</h1>
      <section>
        <img src="" alt="" />
        <h3>
          Escribe un perfil de GitHub y recibe retroalimentación sobre el desarrollador.
        </h3>
        <Input icono={<FaGithubAlt />} placeholder={"Ingresa el usuario de GitHub"} title={"Usuario de GitHub"} type={"text"} name={"github"} id={"github"} />
        <Input icono={<FaGoogle />} placeholder={"Google Gemini API key"} title={"API key de Google Gemini"} type={"password"} name={"apikey"} id={"apikey"} />
      </section>
    </main>
  );
}
