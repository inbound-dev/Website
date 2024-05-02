import { Content, Finlandica } from "next/font/google";
import './globals.css';
import './Pages/loginPage.jsx'

//allows users to use dark mode (browser prefrence settings)
function useDarkMode(){
  return(
    <div>
    {window.matchMedia('(prefers-color-scheme: dark)')}
    </div>
  );
}


export default function Home() {
  return (
    <main>
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
              <a href="">Login</a>
            </li>
          </ul>  
        </nav>

        <div className="Header">
          <h1>Jordan's Website</h1>
        </div>

        <p>I am a Programmer, Photographer, and Content Creator</p>
      </div>
      {/*bottom of landing page*/}

      <div className="Bottom">
        <h1>Hello World!</h1>
      </div>
    </main>
  );
}
