import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Projects from './components/Projects'

const App = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App