import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import AuthContext from "../contexts/AuthContext"

export default function SignPage() {
  const navigate = useNavigate()
  const [formCadastro, setFormCadastro] = useState({ nome: "", email: "", senha: "" })
  const [formLogin, setFormLogin] = useState({ email: "", senha: "" })
  const { setToken } = useContext(AuthContext)

  function handleFormCadastro(e) {
    const { name, value } = e.target
    setFormCadastro({ ...formCadastro, [name]: value })
  }

  function handleFormLogin(e) {
    const { name, value } = e.target
    setFormLogin({ ...formLogin, [name]: value })
  }

  function criarConta(e) {
    e.preventDefault()
    
    axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, formCadastro)
    .then(res => {
      alert("Cadastro criado!")
      setFormCadastro({ nome: "", email: "", senha: "" })
    })
    .catch(err => alert(err.response))
  }

  function fazerLogin(e) {
    e.preventDefault()
    
    axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, formLogin)
    .then(res => {
      setToken(res.data)
      localStorage.setItem("token", res.data)
      navigate("/add")
    })
    .catch(err => alert(err.response))
  }

  return (
    <div className="signin-signup">
      <div className="card">

        <form className="signup" onSubmit={criarConta}>
          <h3>Cadastrar</h3>
          <div className="entrada">
            <div className="label">Nome</div>
            <input
              className="nome"
              name="nome"
              value={formCadastro.nome}
              onChange={handleFormCadastro}
              required
            />
          </div>
          <div className="entrada">
            <div className="label">E-mail</div>
            <input
              className="email"
              name="email"
              value={formCadastro.email}
              onChange={handleFormCadastro}
            />
          </div>

          <div className="entrada">
            <div className="label">Senha</div>
            <input
              type="password"
              className="senha"
              name="senha"
              value={formCadastro.senha}
              onChange={handleFormCadastro}
            />
          </div>
          <button className="salvar" type="submit">Cadastrar</button>
        </form>

        <form className="signin" onSubmit={fazerLogin}>
          <h3>Entrar</h3>
          <div className="entrada">
            <div className="label">E-mail</div>
            <input
              className="email-login"
              name="email"
              value={formLogin.email}
              onChange={handleFormLogin}
            />
          </div>
          <div className="entrada">
            <div className="label">Senha</div>
            <input
              type="password"
              className="senha-login"
              name="senha"
              value={formLogin.senha}
              onChange={handleFormLogin}
            />
          </div>
          <button className="salvar" type="submit">Entrar</button>
        </form>

      </div>
    </div>
  )
}