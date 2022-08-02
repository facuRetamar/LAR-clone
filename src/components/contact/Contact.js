import "./contact.css"
import {GrMail} from "react-icons/gr"
import {BsFillTelephoneFill} from "react-icons/bs"
import {FaMapMarkerAlt} from "react-icons/fa"
import {MapContainer, TileLayer, Marker} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
const Contacto = () => {
  const position = [-32.0318131,-60.3080000]
  const marker = new L.icon({
    iconUrl : require("../images/marker.png"),
    iconSize: [35,40]
  })

  return (
    <div id="contacto">
         <div className="titleWrapper">
          <div className="firstLine"></div>
            <h2 className="contactoTitle">contacto</h2>
        <div className="secondLine"></div>
        </div>
        <div className="infoContainer">

        <MapContainer center={position} zoom={13} className="mapContainerLeaflet">
          <TileLayer 
           url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
           <Marker position={position} icon={marker}></Marker>
        </MapContainer>

        <div className="formContainer">
          <p>para contactarnos</p>
          <div className="contactInfo">
            <FaMapMarkerAlt className="icono" />
            <p>Moreno 1404, Crespo, Entre Ríos - Argentina</p>
          </div>
          <div className="contactInfo">
          <BsFillTelephoneFill className="icono" />
          <p>+54 0343 4958 000 y rotativas</p>
          </div>
          <div className="contactInfo">
            <GrMail className="icono" />
            <p>lar@laagricolaregional.com.ar</p>
          </div>
          <form className="form">
            <input type="text" placeholder="nombre..." />
            <input type="email" placeholder="email..." />
            <textarea name="mensaje" id="mensaje"  rows="5" placeholder="su mensaje..."></textarea>
            <button>enviar</button>
          </form>
        </div>
      
        </div>
    </div>
  )
}

export default Contacto