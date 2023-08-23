import { useNavigate } from "react-router-dom"

export default function AddRecipeButton() {
    const navigate = useNavigate()

    return (
        <div className="botao adicionar" onClick={() => navigate("/add")}>
            <ion-icon name="add"></ion-icon>
        </div>
    )
}