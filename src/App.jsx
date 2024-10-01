import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import AppLayout from './pages/AppLayout'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path='/' element={<AppLayout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
