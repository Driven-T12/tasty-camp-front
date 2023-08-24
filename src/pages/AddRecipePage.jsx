import Sidebar from "../components/Sidebar"
import LogoutButton from "../components/LogoutButton"
import { useState, useEffect, useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export default function AddRecipePage() {
  const [form, setForm] = useState({ titulo: "", ingredientes: "", preparo: "" })
  const {token} = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate("/")
    }
  }, [])

  function handleForm(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function criarReceita(e) {
    e.preventDefault()
    console.log(form)
    // TODO
  }

  return (
    <div className="app">
      <Sidebar />

      <form className="pagina adicionar-receita" onSubmit={criarReceita}>
        <div className="titulo">Adicionar receita</div>

        <div className="entrada">
          <div className="label">Nome da Receita</div>
          <input
            className="nome-receita"
            name="titulo"
            value={form.titulo}
            onChange={handleForm}
          />
        </div>

        <div className="entrada">
          <div className="label">Ingredientes</div>
          <textarea
            className="ingredientes-receita"
            name="ingredientes"
            value={form.ingredientes}
            onChange={handleForm}
          />
        </div>

        <div className="entrada">
          <div className="label">Modo de Preparo</div>
          <textarea
            className="modo-preparo-receita"
            name="preparo"
            value={form.preparo}
            onChange={handleForm} />
        </div>

        <button className="salvar" type="submit">
          <ion-icon name="save"></ion-icon>
          Adicionar receita
        </button>
      </form>

      <LogoutButton />
    </div>
  )
}