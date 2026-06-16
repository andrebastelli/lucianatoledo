import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ObrigadoPage from './pages/Obrigado'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/obrigado" element={<ObrigadoPage />} />
    </Routes>
  )
}
