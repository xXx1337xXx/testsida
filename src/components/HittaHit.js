import "./hittaHit.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSubway} from "@fortawesome/free-solid-svg-icons";
export default function hittaHit() {
    return(
       <div>
         <h1 id="hittah1"  >HITTA HIT </h1>
         <p id="hitta">"Första gången kan bli ett litet äventyr"</p>
         <h1 id="spårvagnTitle">Planera din resa hit på bästa sätt!</h1>
   <div className="spårvagn">
      <div>
      <h1>SPÅRVAGN  <FontAwesomeIcon icon={faSubway}></FontAwesomeIcon> </h1>
         <p1>
              <span>Spårvagn 2 mot Högsbotorp</span>
                Hoppa av: Olivedalsgatan
                 Gång ca 3 min.
             <span>Spårvagn 1 mot Tynnered </span>
            Hoppa av: olivedalsgatan<br></br>
                - Promenera sedan till första korsgata & sväng antingen, höger om Nordic Wellness eller vänster om Café TinTIN.<br></br>
                  - Ser du den lååånga "gatan" upp, promenerar du upp för den  tills du kommer fram till den blå parkeringsautomaten, <br></br>
                  Strax nedanför Nordhemsskolan på Norhemsgatan 67, i Linnéstaden hittar du en unik oas vid namn Mandorla.   <br></br>
            </p1>
      </div>
      <div className="spårvagn2">
         <h1>SPÅRVAGN <FontAwesomeIcon icon={faSubway}></FontAwesomeIcon> </h1>
         <p1>
         <span>Spårvagn 2 mot Högsbotorp</span>
         Hoppa av: Olivedalsgatan 
         Gång ca 3 min. 
         </p1>
        </div>
   </div> 
          <div className="bottomText">
         <h1>STRESSA INTE! Behandlingen börjar alltid ca 10 min efter bokad tid.</h1>

         <p>Mandorla STIL SPA söker just nu en utbildad #sjuksköterksa /n 
          och diplomerad #massör som vill bli en del av vårt team?</p>
        <p>Ansök via mejl: info@mandorla.se /n
        Vi erbjuder i början - deltid timanställning. /n
        Om man visar sig ducktig blir man erbjuden vidare utveckling och fast anställning. /n
        OBS: jobbtider - främst vardagar 16,00-20,00.</p>
        </div>
        </div>
    )
}