import Mainpage from 'pages/Mainpage'
import Signpage from 'pages/Signpage'
import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Mainpage />}></Route>
            <Route path='/account' element={<Signpage />}></Route>
        </Routes>
    </>
  )
}

export default App
