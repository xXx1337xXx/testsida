import "./Slider.css" ;

import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";


export default function BtnSlider({direction,moveSlide}) {
    console.log(direction, moveSlide)
    return ( 
        <button className="btn-slide">
            <img src={rightArrow}></img>
        </button>
    )
}