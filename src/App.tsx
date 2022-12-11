import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/erjoni" element={<Header />} />
      </Routes>
    </div>
  )
}

export default App
