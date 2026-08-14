import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Artes from './pages/Artes';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artes" element={<Artes />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  )
}

export default App
