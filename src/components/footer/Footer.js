import "./footer.css"
import {AiFillFacebook} from "react-icons/ai"
import {SiYoutube} from "react-icons/si"

const Footer = () => {
  return (
    <div className="containerFooter">
        <h3>seguinos en las redes</h3>
        <div className="socialMedia">
            <AiFillFacebook className="facebook" />
            <SiYoutube className="youtube"/>
        </div>
        <button><a href="#inicio">IR ARRIBA</a></button>
        <div className="copyRight">
            <p>Copyright © 2022</p>
            <span>La Agrícola Regional Coop. Ltda.</span>
            -
            <span>Libro de Visitas</span>
            -
            <span>Protección de Datos Personales</span>
            -
            <span>Mapa del Sitio</span>
        </div>
    </div>
  )
}

export default Footer