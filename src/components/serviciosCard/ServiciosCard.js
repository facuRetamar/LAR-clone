import "./serviciosCard.css"

const ServiciosCard = ({data}) => {
  const {id, categoria, nombre, imagen} = data
  return (
    <div className="cardServicios" key={id} >
        <img src={imagen} className="imagenServicio" />
        <div className="overlayServicios">
          <p>{categoria}</p>
          <hr className="hrServicios" />
          <p>{nombre} </p>
        </div>
    </div>
  )
}

export default ServiciosCard