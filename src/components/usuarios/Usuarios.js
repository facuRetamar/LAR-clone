import "./usuarios.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {useEffect, useRef} from "react"

gsap.registerPlugin(ScrollTrigger)

const Usuarios = () => {

    let card1 = useRef(null)
    let card2 = useRef(null)
    let card3 = useRef(null)

    useEffect(()=>{
        gsap.from(card1,{opacity: 0, y: 50, x: -50, duration: 1, scale: .4, rotation: 45,rotateX:"90deg", rotateY: "90deg", scrollTrigger:{
            trigger: card1,
            start: "top 70%"
        }})
        gsap.from(card2,{opacity: 0, y: 50, x: -50, duration: 1, scale: .4, rotation: 45,rotateX:"90deg", rotateY: "90deg", delay: .2, scrollTrigger:{
            trigger: card2,
            start: "top 70%"
        }})
        gsap.from(card3,{opacity: 0, y: 50, x: -50, duration: 1, scale: .4, rotation: 45,rotateX:"90deg", rotateY: "90deg", delay: .4, scrollTrigger:{
            trigger: card3,
            start: "top 70%"
        }})
    },[])

  return (
    <div className="usuarioContainer" id="usuarios">
         <div className="titleWrapper">
            <div className="firstLine"></div>
            <h2 className="usuariosTitle">usuarios</h2>
            <div className="secondLine"></div>
        </div>


        <div className="cardSection">
            
        <div className="card" ref={e=>card1=e}> 
            <div className="cardHeader cardHeaderNuestra">
                <img src="/cardNuestra.png" className="imagenUsuarios" alt="cardNuestra" />
                <h2>TARJETA NUESTRA</h2>
            </div>
            <p className="description">En el año 2006, La Agrícola Regional Coop. Ltda., con el objetivo de premiar a los asociados y clientes que confían cada día en sus productos y servicios, presentó NUESTRA, la primera tarjeta de beneficios de la región.
            <br />
            <br />
            Mes a mes miles de usuarios han aceptado la propuesta, aportando dinamismo a este programa de beneficios diseñado y administrado desde LAR.
            </p>
            <button>CONSULTAR</button>
        </div>
        <div className="card" ref={e=>card2=e}> 
            <div className="cardHeader cardHeaderInfo">
                <img src="/info.png" className="imagenUsuarios" alt="info"/>
                <h2>CUENTA CORRIENTE</h2>
            </div>
            <p className="description">Con solo completar un formulario de conformidad, los asociados y clientes de La Agrícola Regional Coop. Ltda. pueden solicitar una clave de acceso para consultar el estado de cuenta corriente y la disponibilidad de cereales.
            <br />
            <br />
            Si ya posee su clave, acceda desde aquí, de lo contrario, diríjase a la sección Administración de La Agrícola Regional Coop. Ltda. y solicítela.
            </p>
            <button>CONSULTAR</button>
        </div>
        <div className="card" ref={e=>card3=e}> 
            <div className="cardHeader cardHeaderApp">
                <img src="/app.png" className="imagenUsuarios" alt="app" />
                <h2>APLICACION MOVIL</h2>
            </div>
            <p className="description">Con la nueva App de LAR puede acceder al estado de cuenta corriente, capital social y existencia de cereales, directamente desde el celular, como así también a las últimas novedades de la cooperativa.
            <br />
            <br />
            Se accede a dicha consulta con el mismo usuario (número de cuenta) y clave de la consulta que LAR ya posee en nuestra página web.
            </p>
            <button>CONSULTAR</button>
        </div>
            
            
        </div>
        <div className="branchesContainer">
            <ul className="ul">
                <li>Hernandez</li>
                <li>Nogoyá</li>
                <li>Tabossi</li>
                <li>Alcaráz</li>
                <li>Federal</li>
                <li>Valle María</li>
                <li>María Grande</li>
                <li>Diamante</li>
                <li>Strobel</li>
                <li>Isletas</li>
                <li>Libertador San Martín</li>
                <li>Paraná</li>
            </ul>
        </div>
        </div>
    
  )
}

export default Usuarios