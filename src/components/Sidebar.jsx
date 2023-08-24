import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import AuthContext from "../contexts/AuthContext"

export default function Sidebar() {
    const [receitas, setReceitas] = useState([])
    const navigate = useNavigate()
    const {token} = useContext(AuthContext)

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get(`${import.meta.env.VITE_API_URL}/receitas`, config)
        .then(res => setReceitas(res.data))
        .catch(err => console.log(err.response))
    }, [])

    return (
        <div className="sidebar">
            <div className="titulo">Tastecamp</div>
            <div className="contador">Qtd de Receitas: {receitas.length}</div>
            <ul className="receitas">
                {receitas.map(rec => (
                    <li key={rec.id} onClick={() => navigate(`/recipe/${rec.id}`)}>
                        <ion-icon name="fast-food-outline"></ion-icon>
                        {rec.titulo}
                    </li>
                ))}
            </ul>
        </div>
    )
}