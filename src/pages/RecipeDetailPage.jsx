import Sidebar from "../components/Sidebar"
import LogoutButton from "../components/LogoutButton"
import AddRecipeButton from "../components/AddRecipeButton"
import { useEffect, useState } from "react"

export default function RecipeDetailPage() {
  const [receita, setReceita] = useState({ id: 1, titulo: "Pão com ovo", ingredientes: "Pão e ovo", preparo: "Faça o pão e o ovo" })

  useEffect(() => {
    // TODO
  }, [])

  return (
    <div className="app">
      <Sidebar />

      <div className="pagina receita">
        <div className="titulo titulo-pagina-receita">{receita.titulo}</div>

        <div className="ingredientes">
          <div className="titulo">Ingredientes</div>
          <div className="destaque destaque-ingredientes">
            {receita.ingredientes}
          </div>
        </div>

        <div className="modo-de-preparo">
          <div className="titulo">Modo de Preparos</div>
          <div className="destaque destaque-preparo">
            {receita.preparo}
          </div>
        </div>
      </div>

      <AddRecipeButton />
      <LogoutButton />
    </div>
  )
}