import {BsCalendarDate} from "react-icons/bs"
import {ImCheckboxChecked} from "react-icons/im"
import {IoIosPeople} from "react-icons/io"
import "./introduction.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {useEffect, useRef} from "react"
gsap.registerPlugin(ScrollTrigger)

const Introduction = () => {
    let welcome = useRef(null)
    let cardSection = useRef(null)


  useEffect(()=>{
    gsap.from([welcome.firstChild, welcome.lastChild],{duration: .5, opacity: 0, y: 100, stagger: .2, scrollTrigger:{
      trigger: welcome.firstChild,
      start: "top 80%",
    }})

    gsap.from([cardSection.lastChild, cardSection.children[1], cardSection.firstChild],{x: -1500,ease:"power4.out", stagger: .3, duration: 1,scrollTrigger:{
      trigger: cardSection,
      start: "top 50%",
    } })

  },[])

  return (
    <div className="containerIntroduccion">
        <div className="introContainer" ref={e=>welcome=e}> 
            <h2 className="titleIntroduccion">bienvenido a <span className="spanIntroduccion">La Agricola Regional Coop. Ltda.</span> </h2>
            <i>Desde 1910 con la fuerza del cooperativismo.</i>
            
        </div>
        <div className="cardSectionIntroduccion" ref={e=>cardSection=e}>

            <div className="cardIntroduccion" > 
            <div className="cardHeader" >
                <BsCalendarDate className="icon"/>
                <h3>DESDE 1910</h3>
            </div>
            <p >La Agrícola Regional Coop. Ltda. nace como una sociedad de agricultores bajo la forma de Cooperativa Agrícola, el 29 de abril de 1910. Nuestra rica historia cooperativa surge con el sueño de un puñado de pioneros que, a partir del esfuerzo conjunto, buscaban mayores oportunidades para todos.
            </p>
            </div>

            <div className="cardIntroduccion"> 
            <div className="cardHeader" >
            <ImCheckboxChecked className="icon" />
            <h3>RESPONSABILIDAD</h3>
            </div>
            <p>La Responsabilidad Social Empresaria (RSE) está en el ADN del cooperativismo y declarada como 7° Principio: “Compromiso con la Comunidad” (ACI 1995). Nos transporta hacia la visión de la empresa respecto a su filosofía, metas y propósitos en el marco de una sociedad individualista y en constante cambio.</p>
            </div>
        
            <div className="cardIntroduccion"> 
            <div className="cardHeader">
            <IoIosPeople className="icon"/>
            <h3>ACCIÓN COOPERATIVA</h3>
            </div>
            <p >Nuestra preocupación por la comunidad y el medio ambiente, la educación, la salud y la cultura son cristalizados en proyectos constantes, beneficios y acciones destinados a nuestros diferentes grupos de interés, entre los que se destacan asociados y clientes, empleados y a la comunidad en general.</p>
            </div>

        </div>
    </div>
  )
}

export default Introduction
/*tl.from(cardHeader1.firstChild,{y: -100, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger:{
      trigger: cardHeader1.firstChild,
      start: "top 75%",
    }} )
    .from(cardHeader1.lastChild,{opacity: 0, duration: .7, ease: "power4.out"}, "-=.5")
    .from(parragraph1,{y: "110%", duration: .7, ease: "power4.out"}, "-=.3")

    tl2.from(cardHeader2.firstChild,{y: -100, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger:{
      trigger: cardHeader1.firstChild,
      start: "top 75%",
    }} )
    .from(cardHeader2.lastChild,{opacity: 0, duration: .7, ease: "power4.out"}, "-=.5")
    .from(parragraph2,{y: "110%", duration: .7, ease: "power4.out"}, "-=.3")

    tl3.from(cardHeader3.firstChild,{y: -100, opacity: 0, duration: 1, ease: "power4.out", scrollTrigger:{
      trigger: cardHeader3.firstChild,
      start: "top 75%",
    }} )
    .from(cardHeader3.lastChild,{opacity: 0, duration: .7, ease: "power4.out"}, "-=.5")
    .from(parragraph3,{y: "110%", duration: .7, ease: "power4.out"}, "-=.3")*/