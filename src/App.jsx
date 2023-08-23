import AddRecipePage from "./pages/AddRecipePage"
import RecipeDetailPage from "./pages/RecipeDetailPage"
import SignPage from "./pages/SignPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignPage />}/>
        <Route path="/add" element={<AddRecipePage />}/>
        <Route path="/recipe/:id" element={<RecipeDetailPage />}/>
      </Routes>
    </BrowserRouter>
  )
}