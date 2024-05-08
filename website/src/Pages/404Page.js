

//allows users to use dark mode (browser prefrence settings)
function useDarkMode(){
    return(
      <div>
      {window.matchMedia('(prefers-color-scheme: dark)')}
      </div>
    );
  }

//main function containing 404 Error
function PageNotFoundPage(){
    return(
        <div>
            <useDarkMode />
            <h1>404 Page Not Found!</h1>
        </div>
    );
 }

 export default PageNotFoundPage;