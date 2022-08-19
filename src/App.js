import './App.css'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyPlace from './components/MyPlace'
import AllSido from './components/AllSido'
import Favorite from './components/Favorite'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPlace />} />
        <Route path="/all" element={<AllSido />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
