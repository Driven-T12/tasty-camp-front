import { useNavigate } from "react-router-dom"

export default function LogoutButton() {
    const navigate = useNavigate()

    return (
        <div className="botao fechar" onClick={() => navigate("/")}>
            <ion-icon name="log-out-outline"></ion-icon>
        </div>
    )
}