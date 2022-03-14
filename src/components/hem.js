import "./hem.css"
import React from 'react';



export default function hem() {
  

  
  
  
  return(
        <div>
      
        
       <div className="homeMain">
       <div className="slide-container">
     </div>
              <h1 id="homeMainTitle"> Friskvård & Estetik</h1>
              <img  id="ryggmassage" src= {require("../images/ryggmassage.jpg")} className="center" ></img>
              <div className="surround">
              <div className="rating">
              <h2>Bokadirekt</h2>
              <h1>4,4 </h1>
              <p>⭐⭐⭐⭐</p>
              <p>434 röster </p>

              </div>
              <div className="rating">
              <h2>Facebook</h2>
              <h1>4,6</h1>
              <p>⭐⭐⭐⭐⭐</p>
              <p>47 röster </p>
              </div>
              <div className="rating">
              <h2>Google</h2>
              <h1>4</h1>
              <p>⭐⭐⭐⭐</p>
              <p>48 röster </p>
           


              <p></p>

              </div>
            </div>


              <h2>I hjärtat av Linnéstaden, där trendiga butiker och restauranger möter den vackra Slottsskogens natur,
               hittar du en unik och mysig oas  på Nordhemsgatan 67, i Göteborg. </h2>
              <h2>Mandorla har sedan 2009 varit omtyckta för sin Jademassage, djupgående massagepaket och parmassage. Experter på muskler och anatomi.

              </h2>
              <h2>Idag erbjuds dessutom avancerade skönhetsbehandlingar med naturligt och långvarigt resultat.</h2>
              <h2>-Vi hos Mandorla tror på en balans mellan skönhet och hälsa. Därför avänder vi endast de bästa produkterna för våra kunders säkerhet. </h2>
              <h1>Prova något nytt, spännande & framförallt välgörande!   </h1>
              <h1>ETT STEG NÄRMARE BÄTTRE HÄLSA!</h1>
            
      </div>
     
        <div className="hemSecond">
         <div className="öppettider">
                 <h1>ÖPPETTIDER</h1>
                <ul>
                <li>Mån - Tors 11:30-18:30</li>
                <li>Fredag:11:30–17:00</li>
                <li>Lör: 13:00–17.00 (3g/ mån)</li>
                <li>Sön: 14:00-18:00 (1g /mån)</li>
                </ul>
                <p>STÄNGT: 20-24 Jan-Dec månad.</p>
         </div>
       <div className="onlinekalender">
                 <h1>BOKNING</h1>
                 <h2>sker främst via vår onlinekalender där du enkelt <br></br> kan se alla tillgängliga tider för behandlingarna.</h2> 
                 <p>Har du ytterligare frågor eller vill boka en tid,  <br></br>
                 mejla oss på info@mandorla.se eller ring 0739 864 888. <br></br>
                 Meddela oss önskemål på tider som passar dig, vad som <br></br>
                 ingår i din behandling samt id kod på värdebeviset <br></br>
                 (om du har ett sådant) så hjälper vi dig vidare.</p>

                 <h4>Besök oss för att få en paus från omvärlden. Skäm bort dig själv.<br></br> Tysta dina tankar och vila ditt sinne.

                 Ge din kropp ny energi.</h4>
       </div>
       </div>
   
       <h1 className="center"> ERBJUDANDE!</h1>

     <div className="homeBottom massageSurround ">
        <div className="erbjudande massageComponent " >
            <h1>Massagepaket 60min 3 tillfällen </h1>
             <p>#massagegöteborg #friskvardgoteborg #actiway #epassi #parmassage</p>
             <h2>Gå ensam eller ta med dig någon!</h2>
             <h1>Pris 1 299:-  <span>(ord pris 2 370:-)</span></h1>
             <p>Omfattar; Djupgående, Svensk, klassisk, ryggmassage inkl massage av axlar, nacke, skulderblad, armar & lend-rygg <br></br>
                Jademassage som vi har haft i över 10 år. En unik kombination av akupressur, kiropraktik samt infrarött-värme som<br></br>
                ökar blodcirkulationen i hela kroppen.Böjer & sträcker ut hela ryggen samt ger en rakare rygg & bättre hållning. <br></br>
                Avslutas med uppfriskande mask eller fotmassage. </p>
              <ul>
              <li>Klassisk/Djup Ryggmassage (20-min)   </li>
              <li>Jademassage (30 - 40min)
              </li>
              <li>Mask inkl hårbottenmassage (10 min )  </li>
              </ul>
               <h1>Köp ditt ditt presentkort idag via <br></br> Swish 1230927400: meddelande : MP60x3  eller mejla oss   </h1>
               <p>info@mandorla.se</p>
               <p>Höjdpunkter:
              (Ej personligt, kan ge bort en gång eller bjuda med en kompis #parmassage ) </p>
               </div>

               <div className="mörkaÖgon massageComponent"  >
                <h1>Mörka ringar under ögonen?</h1>
                <p1>Bli av med mörka ringar under ögonen<br></br> 
                med Skinboosters. En behandling som reducerar <br></br> 
                djupa foror & mörka ringar under ögonen. <br></br>
                Naturligt resultat som håller ca 18 mån.</p1>
                <h2>Just nu 2 behandlingar för
                1 999:-</h2>
                    <h1>Köp via Swish: 123 0927  400 meddelande: Ögonx2 </h1>
            </div>
        </div>   
</div>
    )
}