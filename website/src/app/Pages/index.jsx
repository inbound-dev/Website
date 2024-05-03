import style from '../globals.css'

//allows users to use dark mode (browser prefrence settings)
function useDarkMode(){
  return(
    <div>
    {window.matchMedia('(prefers-color-scheme: dark)')}
    </div>
  );
}

function index(){
    return(
        <>
          <div className="Top">
            <useDarkMode />

      <nav className="Navigation">
        <ul className="NavigationList">
          <li className="NavItem">
            <a href="https://www.youtube.com/@InboundG" target="blank">Youtube</a>  
          </li> 
          <li className="NavItem">
            <a href="https://github.com/inbound-dev" target="blank">Github</a>
          </li> 
          <li className="NavItem">
            <a href="https://www.linkedin.com/in/jordan-hamilton-dev/" target="blank">LinkedIn</a>
          </li>
          <li className="NavItem">
            <a href="">Projects</a>
          </li>
          <li className="NavItem">
            <Link to={"/loginPage"}>Login</Link>
          </li>
        </ul>  
      </nav>

      <div className="Header">
        <h1>Hi, I'm Jordan!</h1>
      </div>

      <p>I am a Programmer, Photographer, and Content Creator</p>

      <div>
        {/*reserved for mini gallery*/}
      </div>
    </div>
    {/*bottom of landing page*/}
  </>
    )
}