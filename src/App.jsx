import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Create from './Components/Create'
import Edit from './Components/Edit'
import Read from './Components/Read'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/Read' element={<Read />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App