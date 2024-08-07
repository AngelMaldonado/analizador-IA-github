import { Event } from "./models/Event";
import { GithubUser } from "./models/GithubUser";
import { Repo } from "./models/Repo";
import { z } from 'zod';
import { generateObject } from "ai"
import { google } from "@ai-sdk/google"

export async function analyzeUser(user: GithubUser, repos: Array<Repo>, events: Array<Event>) {
  const { topLangs, topics, descriptions, bestRepos } = processRepos(repos.filter(r => r.size > 0))
  const model = google("models/gemini-1.5-pro-latest")
  const { object: { specialties } } = await generateObject({
    model: model,
    schema: z.object({
      specialties: z.array(
        z.object({
          title: z.string(),
          description: z.string()
        })
      ),
    }),
    prompt: `
      ## Análisis de Perfil de GitHub: Especialidades

      **Objetivo:** Identificar las áreas y subáreas de especialización del usuario de GitHub.

      **Datos del Usuario:**

      * **Nombre:** ${user.name}
      * **Username:** ${user.login}
      * **Bio:** ${user.bio}
      * **Mejores Lenguajes:** ${topLangs.toString()}
      * **Etiquetas/temas de los repositorios:** ${[...topics].toString()}
      * **Descripciones de los Repositorios:** ${descriptions.toString()}


      **Instrucciones:**

      1. **Analiza los Mejores Lenguajes**. Estos representan las principales habilidades técnicas del usuario.
      2. **Examina las descripciones de los repositorios y las etiquetas/temas  readme" fields**, identifica palabras clave y frases que indiquen las áreas de especialidad con base en los lenguajes de programación o habilidades técnicas mencionadas (por ejemplo, Desarrollo Web, Aprendizaje Automático, Ciencia de Datos, Desarrollo Móvil), ten en cuenta que pueden estar escritas en inglés o en cualquier otro idioma.
      3. **Considera la "bio" del usuario** para identificar otras pistas para describir las áreas de expertise.

      **Salida:**

      Proporciona un resumen conciso de las especialidades identificadas del usuario en un arreglo de objetos JSON, siguiendo este esquema:

      {
        specialty: string // nombre de la especialidad (Desarrollo web, Cloud Computing, etc)
        description: string // descripción adaptada al usuario de acuerdo con el análisis realizado (por ejemplo, [nombre] ha realizado distintos projectos en los que ha aplicado esta habilidad...
      }

      Podrías recibir información en múltiples idiomas, pero los atributos del objeto es necesario que los pongas en español, con excepción de terminologías técnicas o áreas que tienen su origen en inglés.
    `
  })

  const { object: { projects } } = await generateObject({
    model: model,
    schema: z.object({
      projects: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          languages: z.array(z.string()),
          stars: z.number(),
          forks: z.number()
        })
      ),
    }),
    prompt: `
      ## Análisis de Perfil de GitHub: Proyectos

      **Objetivo:** Identificar los proyectos de mayor impacto y relevancia del usuario de GitHub (máximo 5 proyectos).

      **Datos del Usuario:**

      * **Nombre:** ${user.name}
      * **Username:** ${user.login}
      * **Repositorios (solo repositorios propios):**

      ${JSON.stringify(bestRepos, null, 2)}

      **Instrucciones:**

      1. **Analiza los Mejores Lenguajes**. Estos representan las principales habilidades técnicas del usuario.
      2. **Examina las descripciones de los repositorios y las etiquetas/temas  readme" fields**, identifica palabras clave y frases que indiquen las áreas de especialidad con base en los lenguajes de programación o habilidades técnicas mencionadas (por ejemplo, Desarrollo Web, Aprendizaje Automático, Ciencia de Datos, Desarrollo Móvil), ten en cuenta que pueden estar escritas en inglés o en cualquier otro idioma.
      3. **Considera la "bio" del usuario** para identificar otras pistas para describir las áreas de expertise.

      **Criterios de ranking:**

      Rankea lor proyectos con base en una combinación de los siguientes factores, dando mayor peso a actividad reciente y participacion de otros usuarios:

      1. **Actividad reciente:** Otorga mayor prioridad a los proyectos con las marcas más recientes de "pushed_at", indicando el desarrollo más actual.
      2. **Participación de los usuarios:** Considera los atributos "stargazers_count" y "forks_count" como indicadores de la popularidad del proyecto, impacto, y uso por parte de la comunidad.
      3. **Descripción del proyecto:** Analiza el atributo "description" para comprender el propósito del proyecto y ,potencialmente, inferir su significado.
      4. **Atributos de habilidades y lenguaje: ** Analiza el atributo de "language", "topics", y cualquier otro que te sea de ayuda para inferir lenguajes de programación y/o habilidades técnicas (desarrollo web, IA, cómputo en la nube, etc) que se aplican en el proyecto.
      4. **Otros atributos:** Analiza cualquier otro atributo que consideres importante en caso de que alguno de los anteriores no se encuentren, de forma que puedas realizar tu análisis lo más completo.

      **Salida**

      Proporciona un arreglo de objetos JSON donde resumas la información que reuniste de los proyectos de mayor impacto y relevancia del usuario, siguiendo este esquema:

      {
        name: string // Nombre del proyecto
        description: string // Este es el atributo de mayor importancia, ya que aquí almacenarás la conclusión de tu análisis sobre el Proyecto y el usuario, como el proceso de Desarrollo, aprendizaje, desafíos y otros aspectos que consideres importante relacionando al usuario con el Proyecto en cuestión.
        languages: string[] // En este atributo etiquetarás los lenguajes de programación y/o habilidades técnicas que hayas identificado.
        stars: number // Número de estrellas adquirido
        forks: number // Número de forks del proyecto
      }

      Podrías recibir información en múltiples idiomas, pero los atributos del objeto es necesario que los pongas en español, con excepción de terminologías técnicas o áreas que tienen su origen en inglés.
    `
  })

  const max_events = 10
  const { object: personality } = await generateObject({
    model: model,
    schema: z.object({
      introduction: z.string(),
      summary: z.string(),
      strengths: z.array(z.string()),
      weaknesses: z.array(z.string()),
    }),
    prompt: `
      ## Análisis de Perfil de GitHub: Personalidad
      Gain insights into the user's potential professional qualities and work style based on their public GitHub activity.

      **Objetivo:** Obtener información sobre las potenciales cualidades profesionales del usuario, además de su estilo del trabajo basado en su actividad pública en Github

      **Datos del Usuario:**

      * **Username:** ${user.login}
      * **Nombre:** ${user.name}
      * **Bio:** ${user.bio}
      * **Repositorios: **

      ${JSON.stringify(bestRepos, null, 2)}

      * **Eventos: **

      ${JSON.stringify(events.slice(0, events.length > max_events ? max_events : events.length), null, 2)}

      **Foco de Análisis:**

      Además de hacer juicios amplios sobre la personalidad, también se deben de identificar posibles cualidades profesionales que puedan respaldarse con evidencia de la actividad de GitHub del usuario. Por ejemplo:

      * **Colaboración:** ¿El usuario contribuye activamente a proyectos de código abierto? ¿Participa en debates sobre problemas y solicitudes de pull requests?
      * **Comunicación:** ¿Su estilo de comunicación en commits, issues y PRs es claro, conciso y respetuoso?
      * **Persistencia/dedicación:** ¿Tiene un historial de contribución constante en proyectos a lo largo del tiempo? ¿Van los proyectos hasta su finalización?
      * **Solución de problemas:** ¿Abre o contribuye con frecuencia a problemas relacionados con correcciones de errores o solicitudes de funcionalidades?
      * **Profundidad Técnica:** ¿Trabaja con una variedad de lenguajes y tecnologías, o se especializan en un área específica?
      * **Otras áreas de Fortaleza:** Identifica qué otras áreas, cualidades, y aptitudes tiene el usuario con base en la información brindada.

      ** Salida **

      1. **Analiza los Mejores Lenguajes**. Estos representan las principales habilidades técnicas del usuario.
      2. **Examina las descripciones de los repositorios y las etiquetas/temas  readme" fields**, identifica palabras clave y frases que indiquen las áreas de especialidad con base en los lenguajes de programación o habilidades técnicas mencionadas (por ejemplo, Desarrollo Web, Aprendizaje Automático, Ciencia de Datos, Desarrollo Móvil), ten en cuenta que pueden estar escritas en inglés o en cualquier otro idioma.
      3. **Considera la "bio" del usuario** para identificar otras pistas para describir las áreas de expertise.

      **Criterios de ranking:**

      Rankea lor proyectos con base en una combinación de los siguientes factores, dando mayor peso a actividad reciente y participacion de otros usuarios:

      1. **Actividad reciente:** Otorga mayor prioridad a los proyectos con las marcas más recientes de "pushed_at", indicando el desarrollo más actual.
      2. **Participación de los usuarios:** Considera los atributos "stargazers_count" y "forks_count" como indicadores de la popularidad del proyecto, impacto, y uso por parte de la comunidad.
      3. **Descripción del proyecto:** Analiza el atributo "description" para comprender el propósito del proyecto y ,potencialmente, inferir su significado.
      4. **Atributos de habilidades y lenguaje: ** Analiza el atributo de "language", "topics", y cualquier otro que te sea de ayuda para inferir lenguajes de programación y/o habilidades técnicas (desarrollo web, IA, cómputo en la nube, etc) que se aplican en el proyecto.
      4. **Otros atributos:** Analiza cualquier otro atributo que consideres importante en caso de que alguno de los anteriores no se encuentren, de forma que puedas realizar tu análisis lo más completo.

      **Salida**

      Proporciona un objeto JSON donde resumas la información que reuniste sobre las cualidades, aptitues, y personalidad del usuario, siguiendo este esquema:

      {
        introduction: string // Un párrafo introductorio lo más extenso posible presentando al usuario
        summary: string // Breve resumen de las conclusiones e inferencias realizadas sobre el usuario
        strengths: string[] // Un arreglo de cadenas con las fortalezas identificadas del usuario, además de escribir la fortaleza también explica el porqué
        weaknesses: string[] // Al igual que el arreglo de fortalezas, escribe la debilidad y su porqué.
      }

      Podrías recibir información en múltiples idiomas, pero los atributos del objeto es necesario que los pongas en español, con excepción de terminologías técnicas o áreas que tienen su origen en inglés.
    `
  })

  return { specialties, projects, personality, topLangs }
}

function processRepos(repos: Repo[]) {
  const topLangsMap = new Map<string, number>()
  const topics = new Set<string>()
  const descriptions = new Array<string>()

  // if user has repos
  if (repos.length > 0) {
    // process each repo
    repos.forEach(repo => {
      // extract the repo's description
      if (repo.description && repo.description.length > 0)
        descriptions.push(repo.description)

      // extract the repo's topics
      if (repo.topics && repo.topics.length > 0)
        repo.topics.forEach(topic => topics.add(topic))

      // if the repo has an identified language add it to the count
      if (repo.language) {
        if (!topLangsMap.has(repo.language))
          topLangsMap.set(repo.language, 1)
        else
          topLangsMap.set(repo.language, topLangsMap.get(repo.language)! + 1)
      }
    })
  }

  // Select the best repos based on its stars, forks, and size (in that order), then trim it to maximum 10 elements
  const max_repos = 20
  const bestRepos = repos
    .sort(({ size: r1 }, { size: r2 }) => r2 - r1)
    .sort(({ forks_count: r1 }, { forks_count: r2 }) => r2 - r1)
    .sort(({ stargazers_count: r1 }, { stargazers_count: r2 }) => r2 - r1)
    .slice(0, repos.length > max_repos ? max_repos : repos.length)

  // Select the top languajes from the map count
  const max_langs = 5
  const topLangs = [...topLangsMap.entries()]
    .sort((l1, l2) => l2[1] - l1[1])
    .map(lang => lang[0])
    .slice(0, topLangsMap.size > max_langs ? max_langs : topLangsMap.size)

  return { topLangs, topics, descriptions, bestRepos }
}
