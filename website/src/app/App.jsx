import { Content, Finlandica } from "next/font/google"
import './globals.css'
import Home from './pages/index'
import Login from './pages/loginPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//renders the index page
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
