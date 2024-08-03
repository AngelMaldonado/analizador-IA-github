"use client"

import Input from "@/components/Input";
import { createGoogleGenerativeAI, google } from '@ai-sdk/google'
import { generateText } from "ai"
import { FaGithubAlt, FaGoogle } from "react-icons/fa";
import { FormEvent, useState } from "react";
import "./app.css"

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [apiKeyError, setApiKeyError] = useState('')
  const [userError, setUserError] = useState('')

  return (
    <main className="flex-column">
      <h1>Revisador de GitHub</h1>
      <section>
        <img src="owl.svg" alt="Caricatura de un búho" />
        <h3>
          Escribe un perfil de GitHub y recibe retroalimentación sobre el desarrollador.
        </h3>
        <form onSubmit={handleSubmit} className="flex-column">
          <Input required icon={<FaGoogle />} error={apiKeyError} placeholder={"Google Gemini API key"} title={"API key de Google Gemini"} type={"password"} name={"apikey"} id={"apikey"} />
          <Input required icon={<FaGithubAlt />} error={userError} placeholder={"Ingresa el usuario de GitHub"} title={"Usuario de GitHub"} type={"text"} name={"user"} id={"user"} />
          <button type="submit">
            <span>🔎</span>
            {loading ? "Cargando..." : "Revisar"}
          </button>
        </form>
      </section>
    </main>
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setLoading(true)
    event.preventDefault()

    const user = new FormData(event.target as HTMLFormElement).get("user") as string
    const apiKey = new FormData(event.target as HTMLFormElement).get("apikey") as string
    const provider = createGoogleGenerativeAI({ apiKey: apiKey })
    let text = ""

    try {
      const res = await fetch(`https://api.github.com/users/${user}`)

      if (res.status === 200)
        // Redirigir a la página de resultados
        console.log(await res.json())
      else if (res.status === 404) {
        setUserError("Usuario no encontrado")
        setTimeout(() => setUserError(""), 3000)
      }
      else {
        setUserError("Error desconocido con Github")
        setTimeout(() => setUserError(""), 3000)
      }

      text = (await generateText({ model: provider("models/gemini-1.5-flash-latest"), prompt: "Just answer Ok" })).text
    } catch (_) {
      if (text.length === 0) {
        setApiKeyError("API key inválida")
        setTimeout(() => setApiKeyError(""), 3000)
      }
    }

    setLoading(false)
  }
}
