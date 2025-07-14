import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import Students from "./pages/Students"
import Results from "./pages/Results"
import Tests from "./pages/Tests"
import Lessons from "./pages/Lessons"
import Settings from "./pages/Settings"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/results" element={<Results />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App
