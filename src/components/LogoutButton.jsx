import { useNavigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"
import { useContext } from "react"
import axios from "axios"

export default function LogoutButton() {
    const navigate = useNavigate()
    const { token, setToken } = useContext(AuthContext)

    function logout() {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.delete(`${import.meta.env.VITE_API_URL}/sign-out`, config)
        .then(res => {
            localStorage.removeItem("token")
            setToken(undefined)
            navigate("/")
        })
        .catch(err => alert(err.response))
    }

    return (
        <div className="botao fechar" onClick={logout}>
            <ion-icon name="log-out-outline"></ion-icon>
        </div>
    )
}