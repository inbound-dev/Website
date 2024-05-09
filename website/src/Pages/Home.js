import style from "../Styles/GlobalStyle.css"

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
        <div>
            <useDarkMode />
            <h1>Hello World!</h1>
        </div>
    );
 }

 export default Home;