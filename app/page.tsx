import Form from "@/components/Form";
import "./app.css"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analizador IA Github",
  description: "Analizador de perfiles de Github con Vercel AI SDK y Google Gemini 1.5Pro",
}

export default async function Home() {
  return (
    <main className="flex-column">
      <h1>Revisador de GitHub</h1>
      <section>
        <img src="owl.svg" alt="Caricatura de un búho" />
        <h3>
          Escribe un perfil de GitHub y recibe retroalimentación sobre el desarrollador.
        </h3>
        <Form />
      </section>
    </main>
  );
}
