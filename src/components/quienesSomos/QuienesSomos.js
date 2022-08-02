
import "./quienesSomos.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {useEffect, useRef} from "react"

gsap.registerPlugin(ScrollTrigger)


const QuienesSomos = () => {

  let titulo = useRef(null)
  let secondLine = useRef(null)
  let firstLine = useRef(null)
  let divParragraph = useRef(null)
  const tl = gsap.timeline()
  const tl2 = gsap.timeline()

  useEffect(()=>{
    tl.from(titulo,{opacity: 0, duration: 2, ease:"power4.out", delay: .5, scrollTrigger:{
      trigger: titulo,
      start:"top 75%",  
     
    } })
    .from(secondLine,{x:"-110%", duration: 1, ease:"power4.out"}, "-=1.7")
    .from(firstLine,{x:"110%", duration: 1, ease:"power4.out"}, "-=1.7")
   
    tl2.from(divParragraph,{opacity: 0, duration: 2, ease: "power4.out", delay: .5, scrollTrigger:{
      trigger: divParragraph,
      start: "top 70%"
    }})
    .from(divParragraph.firstChild, {y: 150, opacity: 0, duration: 1.2, ease: "power4.out"}, "-=.8")
    .from(divParragraph.lastChild,{opacity: 0, duration: 1.4, ease:"power4.out"}, "-=.5")

  },[])
  return (
    <div className="containerQuienesSomos" id="quienes">
        <div className="wrapper">
          <div className="titleWrapper">
            <div className="firstLineContainer">
          <div className="firstLine" ref={e=>firstLine=e}></div>
          </div>
        <h2 className="quienesTitle" ref={e=>titulo=e}>quienes somos</h2>
        <div className="secondLineContainer">
        <div className="secondLine" ref={e=>secondLine=e}></div>
        </div>
        </div>
        <div className="paragraph" ref={e=>divParragraph=e}>
        <p>Fue la visión de hombres y mujeres que supieron interpretar que las carencias individuales se superan con la virtud de la solidaridad y el bien común, las que dieron lugar a que La Agrícola Regional Cooperativa Limitada, Agropecuaria, de Consumo y de Servicios Públicos abra sus ojos un 29 de abril de 1910, bajo la forma de Cooperativa Agrícola.
          <br />
          <br />
        Actualmente opera en más de 25 actividades diferentes en el campo del consumo, la producción, la industria y los servicios, posicionada como una de las cooperativas multi  rubros más importantes del país.
        <br />
        <br />
        Con fuerte arraigo popular, es una empresa de propiedad conjunta democráticamente controlada por más de 5.000 asociados, representados por un Consejo de Administración, y administrada por una gerencia general que se sustenta en un grupo de gestión y el trabajo de más de medio millar de empleados.</p>
        <button>LEER MAS</button>
        </div>
        </div>
    </div>
  )
}

export default QuienesSomos