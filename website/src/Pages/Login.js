import globalStyle from "../Styles/GlobalStyle.css"
import loginStyle from "../Styles/loginStyle.css"

function useDarkMode(){
    return(
      <div>
      {window.matchMedia('(prefers-color-scheme: dark)')}
      </div>
    );
  }

//main function containing home page
function Login(){
    return(
        <>
        <h1>login</h1>
        </>
    );
 }

 export default Login;