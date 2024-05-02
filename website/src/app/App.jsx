import { Content, Finlandica } from "next/font/google"
import './globals.css'
import Home from './index'
import Login from './pages/loginPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//renders the index page
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
