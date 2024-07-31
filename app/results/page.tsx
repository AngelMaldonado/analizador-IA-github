import Input from "@/components/Input";
import { FaGithubAlt } from "react-icons/fa";

export default function Results() {
  return <>
    <header>
      <Input icono={<FaGithubAlt />} placeholder={"Ingresa el usuario de GitHub"} title={"Usuario de GitHub"} type={"text"} name={"github"} id={"github"} />
    </header>
    <section>
      <img src="http://placehold.co/400" alt="" />
      <div>
        <h3>Nombre Completo Del Usuario</h3>
        <p>Usuario de GitHub</p>
        <ul>
          <li>📬 Correo</li>
          <li>🗃️ Repos</li>
          <li>⭐ Estrellas</li>
        </ul>
        <div>
          <p>Top 4 lenguajes:</p>
          <img src="https://img.shields.io/badge/Blogger-FF5722?style=for-the-badge&logo=blogger&logoColor=white" alt="" />
          <img src="https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white" alt="" />
          <img src="https://img.shields.io/badge/Adobe%20Lightroom-31A8FF.svg?style=for-the-badge&logo=Adobe%20Lightroom&logoColor=white" alt="" />
          <img src="https://img.shields.io/badge/CodeChef-%23964B00.svg?style=for-the-badge&logo=CodeChef&logoColor=white" alt="" />
        </div>
      </div>
      <main>
        <header><p>Análisis de Perfil</p></header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis vero porro, aperiam similique, consequatur fuga possimus qui minima libero unde? Rem aut eum labore, eius officiis molestias maxime atque?
        </p>
        <button>🌟 Especialidades</button>
        <button>🚀 Proyectos</button>
        <button>🤝 Contribuciones</button>
        <button>🧐 Personalidad</button>
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
