import globalStyle from "../Styles/GlobalStyle.css"
import style from "../Styles/HomeStyle.module.css"

//allows users to use dark mode (browser prefrence settings)
//still needs css implementation
function useDarkMode(){
    return(
      <div>
      {window.matchMedia('(prefers-color-scheme: dark)')}
      </div>
    );
  }

//main function containing home page
function Home(){
    return(
        <>
        <div className={style.header}>
            <div className={style.headerText}>
                <h1>Hello, I'm Jordan.</h1>
                <h2>I am a full stack developer, photographer, and content creator.</h2>
            </div>
        </div>
        </>
    );
 }

 export default Home;