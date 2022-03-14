import "./massage.css"
import React, {useState} from 'react'

export default function Massage() {

   const [isHovering, setIsHovering] = useState(false);


  function handleMouseEnter(e) {
      setIsHovering(true);
      console.log(isHovering)

    }

    function crossClass() {
      console.log("class?")
      return ` ${isHovering ? "massageComponent:hover" : "massageComponent"} `;
      
    }




    return(
<div >
       
        <h1 className="center">Det finns bara en du så ta hand om dig!</h1>
        <h2 className="center">Ryggen är utan tvekan  en av de viktigaste delarna av vår kropp. Stelhet i ryggen och ryggåkommor är ett vanligt problem i Västvärlden.<br></br>
         Ryggen påverkar de olika organen i kroppen och den generella hälsan avsevärt. Både i ett förebyggande samt behandlande syfte är det viktigt att hålla din <br></br>
        rygg mjuk och smidig för att få ett bra samspel mellan leder, muskler och nervsystem, så att kroppen och dess inre organ kan fungera normalt.<br></br>
        </h2>
        
      <div class="massageSurround" >
      <div  className="massageComponent" >
    <h1 className="massage">SWEDISH MASSAGE</h1>
      <h2 className="massageTitle">Klassisk - Djupgående- ryggmassage</h2>
        <p className="massageInfo">
        En välgörande massagebehandling som alla kan behöva.
        Fokus ligger på Axlar, nacke skulderblad & rygg.<br></br>
        Bli av med stora muskelknutor i axlar och nacke samt skulderblad. Även massage av armar, händer och ländrygg ingår i behandlingen.
        </p>
        <h1 className="pris">Pris</h1>
        <p className="prislapp">25 min: 445 :- </p> 
        <p className="prislapp">30 min:   499:- </p>
        <p>Tillägg: 10 min extra   99kr 
        <ul>
        <li>Helkroppsmassage</li>
        <li>Fotmassage inkl vader och halva ben.
        </li>
        </ul></p>
        <button class="boka">Boka tid</button>
    </div>

    <div  className="massageComponent2">
      <h1  className="massage">KLASSISK MASSAGE</h1>
         <h2 className="massageTitle">Avslappnande Aromamassage eller Helkroppsmassage</h2>
        <p className="massageInfo">Klassisk massage används i förebyggande syfte och mjukar upp stela och ömma muskler samt ger en skön, avslappnande känsla. 
        Perfekt för dig som vill avnjuta en mjuk och avslappnande behandling. Massage av musklerna frigör en mängd viktiga ämnen i kroppen som påverkar vårt 
        immunförsvar och även vårt psyke och välbefinnande.
        Vid halvkroppsmassage: rygg, ländrygg, axlar och nacke.
        Vid helkroppmassage dessutom: armar, händer, lår och ben. </p>
        <h1 className="pris">Pris</h1>
        <p className="prislapp"> Halvkroppsmassage 45min 695:-</p> 
        <p className="prislapp"> Helkroppsmassage 50 min 799:- </p>
        <p className="prislapp" > 
        <ul className="tilläg">
        <li>Extra lång massage 10 min för 99 kr</li>
        <li>Fotmassage </li>
        <li>Hårbottenmassage</li>
        </ul></p>
        <button className="boka">Boka tid</button>
    </div>
    




    <div className="massageComponent3">
      <h1 className="massage">UNIK KOMBOMASSAGE 40-50 min</h1>
         <h2 className="massageTitle">En kombination av våra två populäraste behandlingar. Halva tiden får du Jademassage och andra halva klassisk halvkroppsmassage.</h2>
        <p className="massageInfo">Medan infravärmen ger en behaglig värme djupt in i din kropp och förbättrar blodcirkulationen,
         hjälper jadestenarna till med att trycka ut muskelknutor som sitter 
        längs med ryggraden och skulderbladen. Fokus ligger på din rygg då man stretchar och böjer ryggen för att återställa 
        samspelet mellan leder, muskler och nervsystem. Akupressuren korrigerar sedan energiflödet i kroppen. Spänningarna löses upp 
        samtidigt som du får en ljuvlig upplevelse med djup avslappning.
        Massagen avslutas eller påbörjas med en klassisk halvkroppsmassage då fokus ligger mycket på nacke, axlar och ländrygg. </p>
        <h1 className="pris">Pris</h1>
        <p className="prislapp"> Solo 1 pers.   
        40 min.    495 kr      
        50 min.    595 kr           </p> 
        <p className="prislapp">Duo 2 pers.
        40 min.  990 kr 495 kr per pers.
        50 min. 1 190 kr 595 kr per pers.</p> 
        <p className="prislapp" > 
        <ul className="tilläg">Tillägg: 99 kr extra 10 min längre!
        <li>Fotmassage populär</li>
        <li>Axlar nacke ryggmassage </li>
        <li>Ansiktsmask inkl hårbottenmassage</li>
        </ul></p>
        <button className="boka">Boka tid</button>
    
    
    <div className="massageComponent4">
      <h1 className="massage">UNIK SPAMASSAGE</h1>
         <h2 className="massageTitle">Avkopplade ansiktsmassage inkl. hårbottenmassage. varav halva tiden välgörande judemassage.

         </h2>
        <p className="massageInfo"> Under ansiktsmassagen dräneras vätska från ansiktet en upp-piggande och samtidigt väldigt avslappnande behandling. 
        Avslutas med 5min hårbottenmassage.
        
    Jademassagen baseras på en unik metod av infravärme, akupressur och kiropraktik. Stretchar hela ryggen, stimulerar blodcirkulationen,
     korrigerar mellanrummet mellan kotorna i ryggraden vilket 
    kommer att göra dig mer rörlig och rakare i ryggen. Behandlingen fungerar även som en detox för hela kroppen.
    Tips! Du kan även välja att lägga till en ansiktsmask:

    Deep Clean Clay Mask som lugnar huden och stabiliserar hudens fetthalt med en renande verkan.
    Revitalising Mask förser huden med antioxidanter som ger ökad lyster</p>
        <h1 className="pris"> Pris OBS: Skriv i rutan med noteringar om bokning gäller en eller två personer. Om det gäller två personer så är priset det dubble.
        </h1>
        <p className="prislapp">40-50min 499kr/person</p> 
        <p className="prislapp" > Tillägg
        <ul className="tilläg">
        <li>Ansiktsmask 99 kr</li>
        <li> Djuprengörande skrubb och peeling inkl. ansiktsmask 149 kr
        </li>
        </ul></p>
        <button className="boka">Boka tid</button>
        </div>
        

        </div>

     


    <div className="massageComponent5">
      <h1 className="massage">ANSIKTSMASSAGE</h1>
         <h2 className="massageTitle">En riktigt härlig ansiktsmassage med cirkulationsökande, dränerande och uppstramande effekt som kan framhäva dina kinder och kindben.         </h2>
        <p className="massageInfo"> Lugna nerverna, stilla ditt sinne och boka en unik massage som kommer att ge din hud sin smidighet och spänst 
        tillbaka samt hjälper till att förebygga oönskade rynkor. Du kan även inkludera en axelmassage och behandlingen avslutas
         med 5 minuters hårbottenmassage och en färsk ekologisk ansiktsmask anpassad efter din hudtyp.
         Produkter: Kanu Nature, Kiehl's, LR och Gilda Cosmetics.
         TIPS: Lägg till ansiktsmask + djuprengörande skrubb och peeling för 149 kr extra.</p>
        <h1 className="pris">Pris</h1>
        <p className="prislapp">30 min.   499 kr</p> 
        <button className="boka">Boka Tid</button>
    </div>

    <div className="massageComponent6">
      <h1 className="massage">FOTMASSAGE Kombo</h1>
         <h2 className="massageTitle"> Unna dig energifyllda och avslappnande fötter med vår unika fot kombination
         Ont i ryggen eller trött i fötterna? Prova en härlig kombination av fotmassage och jademassage. Med fokus på rygg, ländrygg nacke och fötter. 
         </h2>
        <p className="massageInfo"> Mängder av nervbanor slutar i foten vilket gör att du inte bara behandlar en kroppsdel när du genomgår en fotbehandling – du behandar hela kroppen! 
        Så skäm bort dina fötter med en unik massage. Bra för alla som vill ge fötterna det där lilla extra.
        Ingår:fotmassage    15 min jade massage 40 min</p>
        <h1 className="pris">Pris</h1>
        <p className="prislapp">1 pers. 40 min 495 kr </p> 
        <button className="boka">boka tid</button>
    </div>
    <div className="massageComponent7">
    <h1 className="massage">JADEMASSAGE</h1>
       <h2 className="massageTitle">En av Göteborgs hetaste massagebehandlingar!</h2>
      <p className="massageInfo"> Jademassagen utförs med hjälp av 50 grader varma jadestenar och baseras på en unik kombination av infravärme, 
      akupressur och kiropraktik. Det är en både tuff och avslappnande massagebehandling, som är välgörande för kropp och sinne. 
      Ett måste för alla som har problem med ryggen, känner sig stela eller bara vill koppla av.
      Jade Massage är bra för dig som;
      Har du ont i ryggen, eller har ryggsmärta som ligger i släkten.
      Inte gillar klassisk ryggmassage
      Har ryggskott
      Vill förebygga skador & förslitningar som kommer med åldrandet.
      Fokus ligger på din rygg, då behandlingen stretchar och böjer ryggen för att återställa samspelet mellan leder, muskler och nervsystem samtidigt som energiflödet i kroppen återställs.
      Har du ett presentkort på vår Jademassage kan du även uppgradera behandlingen till en unik Kombomassage för endast 199 kr.
         Behandlingen utförs på massagesäng NM500.
        OBS: Behandlingen rekommenderas inte för gravida eller personer med vikt över 105 kg. </p>
      <h1 className="pris">Pris för en person:                             </h1>
      <p className="prislapp">40 min  299 kr     </p> 
      <p className="prislapp">60 min  399 kr          </p>
      <p className="prislapp" > 
      <ul className="tilläg">Tillägg:  99 kr extra 10 min längre!
      <li>Fotmassage populär</li>
      <li>Axlar nacke ryggmassage</li>
      <li>Ansiktsmask inkl hårbottenmassage</li>
      </ul></p>
      <button className="boka">Boka tid</button>
  </div>
        </div>

        <div className="textCenter">
    <h1>LETAR DU EFTER EN HÄRLIG PRESENT TILL DINA ÄLSKADE?
          SKICKA MEJL TILL OSS!  </h1>
          <h2>SPA-ritual & MASSAGEPAKET</h2>
          <p>För dig och en av dina nära och kära!</p>
          <p>Dröm dig bort en stund, slappna av och låt någon tar hand om dig! Mandorlas populära - Massagepaket är perfekt för dig som har ont på flera olika ställen i kroppen 
            eller för dig som bara vill koppla av under en längre tid, själv eller tillsammans med någon.</p>
          <p>Känner du dig trött och stressad och vill helt enkelt koppla av i en härlig miljö? Då ska du välja ett av våra spa & massagepaket, speciellt anpassade till dina behov.    </p>
          </div>
          <div className="massagePaket">
    <div className="paket">
    <h2 className="massagePaketTitle">Massagepaket 60 -70 min</h2>
        <h3 className="antalBehandlingar">3 magiska behandlingar</h3>
        <p className="paketBeskrivning">
        Klassisk ryggmassage 20 min
        Jademassage 30 min
        Ansiktsbehandling eller fotmassage 10-15 min
        </p>
        <p className="paketPris">Pris 790 kr / person</p>
        <button className="boka">Boka 1 eller 2 pers </button>
    </div>
       <div className="paket">
        <h2 className="massagePaketTitle">Lyxigt Massagepaket 70-80 min</h2>
        <h3 className="antalBehandlingar">4 magiska behandlingar</h3>
        <p className="paketBeskrivning">Klassisk ryggmassage inkl. Axlar, Nacke skulderblad, rygg 20 min

        Jademassage, med 60 c varma stenar som gör ryggen rakare. ca 40 min
        
        Ansiktsbehandling ca 15 min &
        
        Mycket välgörande fotmassage . ca 10 min</p>
        <p className="paketPris">1 pers: 899 kr /person</p>
        <button className="boka">Boka 1 eller 2 pers </button>
       </div>
        <div className="paket">
        <h2 className="massagePaketTitle">SPA-paket: Absolut RELAX. 90 min 1 person</h2>
        <h2 className="antalBehandlingar">info</h2>
        <p className="paketBeskrivning">Klassisk Helkroppsmasage  ca 30 min

        Ansiktsmask inkl hårbottenmassage ca 15-20 min
        
        Jademassage med 70 grader varma jadestenar. Ca 40 min </p>
        <p className="paketPris">999kr /person </p>
        <button className="boka">Boka tid</button>

    </div>
    </div>
    <div id="massageSurround">
        <h1 className="massage">SPA-Ritual  Pheonix from ashes! 120 min
        </h1>
         <h2 className="massageTitle">Som en Pheonix ur askan kommer du att känna dig som en ny människa efter denna magiska behandling!</h2>
        <p className="massageInfo"> Denna ultimata SPA & Massagepaket för både kropp & ansikte kommer att få dig att känna dig som en ny människa. -- <br></br>
        Lugna nerverna, stilla ditt sinne & njut av en unik behandling som hjälper dig att slappna av på djupet.<br></br> 
        Samtidigt får du en detox för hela kroppen och blir av med oönskade muskelknutor. Dessutom får din hy en stålande ny glöd! <br></br>
        Omfattar; Klassisk ryggmassage eller Klassisk ansiktsbehandling inkl djuprengöring, skön peeling ansiktsmask. Efter komne du att få ligga på 70 grader varma jade stenar <br></br>
         som vi har haft i över 10 år nu och fungerar som en detox för hela kroppen där fokus ligger på ryggrad & ökad rörlighet. <br></br>
        Avslutningsvis får du spendera n tid i vårt detox #solarium med röda rör som återfuktar & ökar kollogen i huden.<br></br>
        Klassisk Ryggmassage ca 25 min<br></br>

        Klassisk Ansikstbehanling ca 25 min <br></br>

        Jademassage ca 40 min<br></br>

        Ljusterapi 10 min<br></br>

        Fotmassage ca 10 min <br></br>
        </p>
        <p className="prislapp" > 
        <ul className="tilläg">Tillägg: 10 minuter extra massage 99kr   du får 10 min jademassage på köpet
        
             <p className="list">• Massage av axlar & nacke</p>
             <p className="list">• Helkroppsmassage</p>
             <p className="list">• soltid</p>
        </ul></p>
        <button className="boka">Boka för 1 eller 2</button>
    </div>
    <h1 className="möhippa center">För Möhippa eller annat event där ni vill komma 4-10 personer  </h1>
    <p className="mail center">BOKA VIA EMAIL: info@mandorla.se</p>

</div>
    )
}