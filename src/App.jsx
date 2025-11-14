import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { CreateThriftStorePage } from "./pages/CreatePage"
import { DetailsThriftStorePage } from "./pages/DetailsPage"
import { Layout } from "./components/Layout"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/brecho/:id" element={<DetailsThriftStorePage />} />
        <Route path="/novo-brecho" element={<CreateThriftStorePage />} />
      </Route>
    </Routes>
  )
}

export default App