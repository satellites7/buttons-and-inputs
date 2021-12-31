import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Buttons from './component/Buttons/Buttons'
import NavAside from './component/NavAside/NavAside'
import Inputs from './component/Inputs/Inputs'
import './App.css'

const App = () => {
  return (
    <Router>
        <main>
          <NavAside/>
          <Routes>
            <Route path="/buttons" element={<Buttons/>}/>
            <Route path="/inputs" element={<Inputs/>} />
          </Routes>
        </main>
    </Router>
    
  )
}

export default App

