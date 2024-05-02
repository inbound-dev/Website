import { Content, Finlandica } from "next/font/google";
import './globals.css';

function useDarkMode(){
  return(
    <div>
    {window.matchMedia('(prefers-color-scheme: dark)')}
    </div>
  );
}


export default function Home() {
  return (
    <main className="Header">

      <useDarkMode />
      
      <div className="Header">
        <h1>Jordan's Website</h1>
      </div>

    </main>
  );
}
