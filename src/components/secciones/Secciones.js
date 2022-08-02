import "./secciones.css"

const Secciones = ({info}) => {

  return (
    <div  className="seccionContainer" >
        <div className="gridContainer" >
            {info.map((data)=><h2>{data.nombre} </h2>
            )}
        </div>
    </div>
  )
}

export default Secciones

