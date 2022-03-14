import "./navbar.css"
import {Link} from "react-router-dom";
export default function navbar() {
    return(
       
      
        <div>
         
        <div className="navbar">
        <div className="navLeft">
             <img id="mandorlaLogo" src={require("../images/mandorlaLogo.jpg")} alt="Mandorla logo"/>
               <img id="mandorla10" src={require("../images/mandorla10.jpg")} alt="Mandorla logo"/>
                </div>
            <div className="navRight">
            <Link  to="/"  className="navItem">Hem</Link>
            <Link  to="/hittahit" className="navItem">Hitta hit </Link>
            <Link  to="/massage" className="navItem">Massage & Parmassage</Link>
            <Link  to="/present" className="navItem">Presentkort, Gåvor , Friskvård</Link>
            <Link  to="/hudvard" className="navItem">Hudvård, Solarium, Epilering</Link>
            </div>
          
        </div>
     
        <img id="sverige" src={require("../images/sverigeIcon.png")} alt="SwedishFlag"/>
        <img  id="england" src={require("../images/englandIcon.png")} alt="EnglishFlag"/>
        </div>
    )
}