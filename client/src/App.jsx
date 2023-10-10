import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import List from './Pages/List'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/list' element={<List/>}></Route>
    </Routes>
  )
}

export default App
