import { Route, Routes } from "react-router-dom"
import { Form, Navbar, Table } from "./components"

export const App = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/new-employee" element={<Form />} />
          <Route path="/edit-employee/:id" element={<Form />} />
        </Routes>
      </div>
    </div>
  )
}
