import "./novedades.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {useEffect, useRef} from "react"

gsap.registerPlugin(ScrollTrigger)

const Novedades = () => {

  let gridContainer = useRef(null)

useEffect(()=>{

  gsap.from([gridContainer.firstChild, gridContainer.children[1],gridContainer.children[2],gridContainer.children[3],gridContainer.children[4],gridContainer.lastChild],{ y:150, opacity:0, duration:.5, stagger:.2, ease:"steps(12)", scrollTrigger:{
    trigger: gridContainer,
    start: "top 80%"
  }})

},[])


  return (
    <div className="novedadesContainer" id="novedades">
        <div className="titleWrapper">
          <div className="firstLine"></div>
            <h2 className="novedadesTitle">novedades</h2>
        <div className="secondLine"></div>
        </div>
        <div className="gridContainer" ref={e=>gridContainer = e}>
            <div className="firstNews">
              <img src="/firstNews.jpg" className="imagenNews"/>
            <div className="overlayNews">
              <p>04/07/2022</p>
              <h3>La Escuela 105 Patria Libre se quedó con la Primera Edición del Premio Anual Las Artes y el Cooperat</h3>
              <p>La actividad se desarrolló el sábado por la tarde, en el salón del colegio Sagrado Corazón. Fue organizada por la Fundación La Agrícola Regional[...] </p>
              </div>
            </div>
            <div className="secondNews">
            <img src="/secondNews.jpg" className="imagenNews"/>
              <div className="overlayNews">
              <p>02/07/2022</p>
              <h3>Feliz Día de las Cooperativas</h3>
              <p>Desde La Agrícola Regional Coop. Ltda hacemos llegar un fraternal saludo a todas las Cooperativas hermanas y a sus asociados, con motivo de[...]</p>
              </div>
            </div>
            <div className="thirdNews">
            <img src="/thirdNews.jpg" className="imagenNews"/>
               <div className="overlayNews">
               <p>30/06/2022</p>
              <h3>Ariel Guarco: “Las Cooperativas Construyen un Mundo Mejor”</h3>
              <p>Ariel Guarco, recientemente reelegido como presidente de la ACI, emitió un mensaje en referencia a la celebración del próximo sábado; do[...]</p>
               </div>
            </div>
            <div className="fourthNews">
            <img src="/fourthNews.jpg" className="imagenNews"/>
               <div className="overlayNews">
               <p>29/06/2022</p>
              <h3>Fontenla, en el marco del Día de las Cooperativas: "Volver a lo esencial"</h3>
              <p>Las cooperativas de todo el mundo celebrarán, el próximo 2 de julio, la edición número 100 del Día Internacional de las Cooperativas. En[...]</p>
               </div>
            </div>
            <div className="fifthNews">
            <img src="/fifthNews.jpg" className="imagenNews"/>
               <div className="overlayNews">
               <p>23/06/2022</p>
              <h3>LAR entregó materiales al Centro de Formación Profesional</h3>
              <p>Se trata de elementos necesarios para la segunda actividad que desarrollará el Centro de Formación Profesional, que funciona en la ciudad de [...]</p>
               </div>
            </div>
            <div className="sixthNews">
            <img src="/sixthNews.jpg" className="imagenNews"/>
               <div className="overlayNews">
               <p>24/05/2022</p>
              <h3>LAR adquirió la planta de acopio de cereales del Doll</h3>
              <p>El día de hoy, se firmó la escritura por la adquisición de la planta de acopio de cereales emplazada sobre Ruta 11. Un nuevo paso que con[...]</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Novedades