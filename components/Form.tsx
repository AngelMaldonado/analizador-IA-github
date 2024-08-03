"use client"

import { FormEvent, useState } from "react"
import Input from "./Input"
import { FaGithubAlt } from "react-icons/fa"

export default function Form() {
  const [loading, setLoading] = useState(false)
  const [userError, setUserError] = useState('')

  return (
    <form onSubmit={handleSubmit} className="flex-column">
      <Input required icon={<FaGithubAlt />} error={userError} placeholder={"Ingresa el usuario de GitHub"} title={"Usuario de GitHub"} type={"text"} name={"user"} id={"user"} />
      <button type="submit">
        <span>🔎</span>
        {loading ? "Cargando..." : "Revisar"}
      </button>
    </form>
  )

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setLoading(true)
    event.preventDefault()

    const user = new FormData(event.target as HTMLFormElement).get("user") as string

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
    setLoading(false)
  }
}
