import {useState, useEffect, useRef} from 'react'
import data from "../data"
import "./categorias.css"
import ServiciosCard from "../serviciosCard/ServiciosCard"


const Categorias = () => {
    let servicio = useRef(null)
    const [serv, setServ] = useState("")

    const [info] = useState(data)

    useEffect(()=>{
      setServ("inicial")
  
    },[])
  
    const activo = {
      color: "red",
      fontWeight: 600
    }
    const normal = {
      color: "gray",
      fontWeight: 300
    }

    function  filtrarConsumo(){
        setServ("consumo")
        
      }
      function filtrarProduccion(){
        setServ("produccion")
      }
      function filtrarServicios(){
        setServ("servicios")
      }
      function filtrarTodas(){
        setServ("todas")
      }
  return (
    <div id="section">
        <div className="filter">
        <p onClick={filtrarTodas} style={serv === "todas" ? activo : normal} ref={e=>servicio=e}> Todas</p>
        <span>/</span>
        <p onClick={filtrarConsumo} style={serv === "consumo" ? activo : normal} >Consumo</p>
        <span>/</span>
        <p onClick={filtrarProduccion} style={serv === "produccion" ? activo : normal} >Producción</p>
        <span>/</span>
        <p onClick={filtrarServicios} style={serv === "servicios" ? activo : normal} >Servicios</p> 
        </div>
        
        <div className="gridContainerCategorias">
          {serv === "inicial" && info.slice(0,7).map((data)=><ServiciosCard data={data} key={data.id} />)}
          {serv === "inicial" && <button className="mostrarTodas" onClick={filtrarTodas} >mostrar todas</button>}

          {serv === "todas" && info.map((data)=><ServiciosCard data={data} key={data.id}/>)}
          {serv === "consumo" && info.filter(i => i.categoria === "consumo").map((data)=><ServiciosCard data={data} key={data.id}/>)}
          {serv === "produccion" && info.filter(i => i.categoria === "produccion").map((data)=><ServiciosCard data={data} key={data.id}/>)}
          {serv === "servicios" && info.filter(i => i.categoria === "servicios").map((data)=><ServiciosCard data={data} key={data.id}/>)}

          </div>
    </div>
  )
}

export default Categorias