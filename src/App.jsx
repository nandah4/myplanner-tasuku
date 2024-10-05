import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'
import AppLayout from './pages/AppLayout'
import { DataProvider } from './context/DataContext'
import Home from './pages/Home'
import MyTasks from './pages/MyTasks'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <Routes>
            <Route path='/' element={<AppLayout />} >
              <Route index element={<Navigate replace to='home' />} />
              <Route path='home' element={<Home />} />
              <Route path='mytasks' element={<MyTasks />} />
              <Route path='about' element={<AboutPage />} />
            </Route>
          </Routes>
        </Router>
      </DataProvider>
    </>
  )
}

export default App
