import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SalesPage from './pages/SalesPage'
import ContactPage from './pages/ContactPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ofertas" element={<SalesPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App