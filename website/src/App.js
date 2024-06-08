import {
  Link,
  Route,
  Routes,
  BrowserRouter as Router,
  useParams
} from "react-router-dom";

//import all the pages
//has red lines in vs but compiles :}
import Home from "../src/Pages/Home"
import PageNotFoundPage from "../src/Pages/404Page"
import Login from "../src/Pages/Login"

//uses the react router to render all pages
function App(){
    return(
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </Router>
    );
}

export default App;
