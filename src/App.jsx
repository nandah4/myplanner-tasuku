import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import AppLayout from './pages/AppLayout'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <Routes>
            <Route index path='/' element={<AppLayout />} />
          </Routes>
        </Router>
      </DataProvider>
    </>
  )
}

export default App
