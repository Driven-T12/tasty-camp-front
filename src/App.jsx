import AddRecipePage from "./pages/AddRecipePage"
import RecipeDetailPage from "./pages/RecipeDetailPage"
import SignPage from "./pages/SignPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthContext from "./contexts/AuthContext"
import { useState } from 'react'

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path="/" element={<SignPage />}/>
          <Route path="/add" element={<AddRecipePage />}/>
          <Route path="/recipe/:id" element={<RecipeDetailPage />}/>
        </Routes>
      </ AuthContext.Provider>
    </BrowserRouter>
  )
}