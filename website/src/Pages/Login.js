import globalStyle from "../Styles/GlobalStyle.css";
import style from "../Styles/loginStyle.css";
import { Link } from "react-router-dom";

function useDarkMode(){
    return(
      <div>
      {window.matchMedia('(prefers-color-scheme: dark)')}
      </div>
    );
  }

//main function containing Login page
function Login(){
    return(
        <>
        <Link to="/">Home</Link>
        <body>
            <h1>login</h1>
        </body>
        </>
    );
 }

 export default Login;