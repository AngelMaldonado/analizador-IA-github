import Form from "@/components/Form";
import "./app.css"

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
