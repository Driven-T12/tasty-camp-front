import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Sidebar() {
    const [receitas, setReceitas] = useState([{ id: 1, titulo: "Pão com ovo", ingredientes: "Pão e ovo", preparo: "Faça o pão e o ovo" }])
    const navigate = useNavigate()

    useEffect(() => {
        // TODO
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