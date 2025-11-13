import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { CreateThriftStorePage } from "./pages/CreatePage"
import { DetailsThriftStorePage } from "./pages/DetailsPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/novo-brecho" element={<CreateThriftStorePage />} />
      <Route path="/:id" element={<DetailsThriftStorePage />} />
    </Routes>
  )
}

export default App