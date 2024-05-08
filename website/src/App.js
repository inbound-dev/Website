import logo from './logo.svg';
import './App.css';
import {
  Link,
  Route,
  Routes,
  BrowserRouter as Router,
  useParams
} from "react-router-dom";

//import all the pages
import Home from "../src/Pages/Home"

//uses the react router to render all pages
function App(){
    return(
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
}

export default App;
