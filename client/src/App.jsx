import Home from "./pages/Home"
import About from "./pages/about"
import PrivacyPolicy from "./pages/privacy"
import TermsConditions from "./components/terms"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App() {
  return (
     <>
        <Router>
          <switch>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
          </Routes>
          </switch>
        </Router>
     </>
  )
}
