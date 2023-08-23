import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignPage() {
  const navigate = useNavigate()
  const [formCadastro, setFormCadastro] = useState({ nome: "", email: "", senha: "" })
  const [formLogin, setFormLogin] = useState({ email: "", senha: "" })

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
    console.log(formCadastro)
    // TODO
  }

  function fazerLogin(e) {
    e.preventDefault()
    console.log(formLogin)
    // TODO
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