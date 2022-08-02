import "./quote.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {useEffect, useRef} from "react"

gsap.registerPlugin(ScrollTrigger)

const Quote = () => {
    const tl = gsap.timeline()
    let franja = useRef(null)
    let container = useRef(null)

    useEffect(()=>{
      tl.from(franja,{x:"-120%", duration: 1, delay: .2, ease:"power4.out", scrollTrigger:{
        trigger: franja,
        start: "top 60%"
      }})
      .from(container.firstChild,{opacity: 0, y: 150, duration: .7, ease:"power4.out"})
      .from(container.lastChild,{ opacity: 0, duration: 1.7, ease:"power4.out" },"-=.5")
    },[])
    
  return (
    <div className="container" ref={e=>franja=e} >
        <div className="quoteContainer" ref={e=>container=e}>
            <div className="iconsContainer">
                <img src="/quote.png" className="quoteImage" alt="quoteImage"/>
            </div>
            <div className="phraseContainer">
                <span>No existe una mejor prueba del progreso de una civilización que la del progreso de la cooperación.</span>
                <span className="span">John Stuart Mill</span>
            </div>
        </div>
    </div>
  )
}

export default Quote