import { Content, Finlandica } from "next/font/google";
import './globals.css';
//import Home from './pages/index';
import Login from './pages/loginPage';
import {
  Link,
  Route,
  Routes,
  BrowserRouter as Router,
  useParams
} from "react-router-dom";

//renders the index page
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

function Home(){
  return(
    <div>
      <h1>hello</h1>
    </div>
  );
}