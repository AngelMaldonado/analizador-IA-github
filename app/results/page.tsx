import Input from "@/components/Input";
import { FaGithubAlt } from "react-icons/fa";
import "./page.css"

export default function Results() {
  return <>
    <header>
      <Input icon={<FaGithubAlt />} placeholder={"Ingresa el usuario de GitHub"} title={"Usuario de GitHub"} type={"text"} name={"github"} id={"github"} />
    </header>
    <section>
      <img className="rounded-circle" src="http://placehold.co/400" alt="" />
      <div className="profile-info flex-column">
        <h2>Nombre Completo Del Usuario</h2>
        <p>(Usuario de GitHub)</p>
        <ul>
          <li>📬 Correo</li>
          <li>🗃️ Repos</li>
          <li>⭐ Estrellas</li>
        </ul>
        <div className="profile-info__langs">
          <p>Top 4 lenguajes:</p>
          <img src="https://img.shields.io/badge/Blogger-FF5722?style=for-the-badge&logo=blogger&logoColor=white" alt="" />
          <img src="https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white" alt="" />
          <img src="https://img.shields.io/badge/Adobe%20Lightroom-31A8FF.svg?style=for-the-badge&logo=Adobe%20Lightroom&logoColor=white" alt="" />
          <img src="https://img.shields.io/badge/CodeChef-%23964B00.svg?style=for-the-badge&logo=CodeChef&logoColor=white" alt="" />
        </div>
      </div>
      <main className="flex-column">
        <header><p>Análisis de Perfil</p></header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis vero porro, aperiam similique, consequatur fuga possimus qui minima libero unde? Rem aut eum labore, eius officiis molestias maxime atque?
        </p>
        <div className="buttons">
          <button type="button"><span>🌟</span>Especialidades</button>
          <button type="button"><span>🚀</span>Proyectos</button>
          <button type="button"><span>🤝</span>Contribuciones</button>
          <button type="button"><span>🧐</span>Personalidad</button>
        </div>
      </main>
      <dialog>
        <p>Modal de información</p>
        <form method="dialog">
          <button>Ok</button>
        </form>
      </dialog>
    </section>
  </>
}
