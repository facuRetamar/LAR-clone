import "./header.css"
import { gsap } from "gsap"
import { useState, useEffect, useRef } from "react"





const Header = () => {
   let logo = useRef(null)
   let menuGsap = useRef(null)
   let menuFrame = useRef(null)
   const tl = gsap.timeline()
    const [menu, setMenu] = useState(false)
 
    function changeMenu(){
        setMenu(p=>!p)
        if(menu){
            gsap.to(menuFrame.firstChild,{rotate: "0", y: 0, duration: .4})
                gsap.to(menuFrame.children[1],{opacity: 1, duration: .4})
                gsap.to(menuFrame.lastChild,{rotate: "0", y: 0,  duration: .4})
        }else{ gsap.to(menuFrame.firstChild,{rotate: "45deg", y: 8, duration: .4})
                gsap.to(menuFrame.children[1],{opacity: 0, duration: .4})
                gsap.to(menuFrame.lastChild,{rotate: "-45deg", y: -8,  duration: .4})
    }
    }
    useEffect(()=>{
        tl.from(logo,{opacity: 0,scale: .5, duration: 1, delay: .5, ease: "power4.out"})
            .from([menuGsap.firstChild, menuGsap.children[1], menuGsap.children[2],menuGsap.children[3],menuGsap.children[4], menuGsap.lastChild],{  duration: .1, y: -50, opacity: 0, stagger: .1,}, "-=.7")

    },[])

  return (
   
       <div className="contenedorNavegador">
        <nav className="navContainer"  >
            <div className="logosWrapper">
            <div className="logoContainer"  id="logo" ref={e=>logo=e}>
            <img src="/logo.png" alt="logo"/>
            </div>
           <div className="menuFrame" onClick={changeMenu} ref={e=>menuFrame=e}>
                <div className="firstStick"></div>
                <div className="secondStick"></div>
                <div className="thirdStick"></div>
            </div>
            </div>
            <div className="navBar" id={!menu ? "hidden" : "visible"}>
                <ul className="navBarUl" id="menu" ref={e=>menuGsap=e}>
                    <li><a href="#inicio">inicio</a></li>
                    <li><a href="#quienes">quienes</a></li>
                    <li><a href="#section">secciones</a></li>
                    <li><a href="#novedades">novedades</a></li>
                    <li><a href="#contacto"> contacto </a></li>
                    <li className="acceso"><a href="#usuarios">acceso usuarios</a></li>
                </ul>
            </div>
        </nav>
        </div>
        
    
  )
}
export default Header