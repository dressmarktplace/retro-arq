import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { CreateThriftStorePage } from "./pages/CreatePage"
import { DetailsThriftStorePage } from "./pages/DetailsPage"
import { Layout } from "./components/Layout"
import { ToastContainer } from "react-toastify"
import { Bounce } from "react-toastify"

const App = () => {
  return (

    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/brecho/:id" element={<DetailsThriftStorePage />} />
          <Route path="/novo-brecho" element={<CreateThriftStorePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App