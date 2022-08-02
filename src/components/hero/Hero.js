import { Parallax } from 'react-parallax';
import bgImagen from "../images/parallax.jpg"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./hero.css"
const Hero = () => {
  
 
  return (
  <div  id="inicio"> 
    <div className='separador'></div>
  <Parallax bgImage={bgImagen} strength={400}>
      <div className='banner'>
      <Splide aria-label="My Favorite Images" className='splideParallax' options={{rewind: true}}
     >
        <SplideSlide className='splideSlide'>
          <h2>Desde 1910, con convicción y coraje, somos parte de tu historia.</h2>
        </SplideSlide>
        <SplideSlide className='splideSlide'>
        <h2>La Agrícola Regional, identidad cooperativa en cada acción.</h2>
        </SplideSlide>
        <SplideSlide className='splideSlide'>
        <h2>Nuestra responsabilidad es hacia cada persona, el medioambiente y su trabajo.</h2>
        </SplideSlide>
      </Splide>
      </div>
  </Parallax>

 
      </div>)
}

export default Hero