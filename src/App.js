import Hero from "./components/hero/Hero"
import './App.css';
import Introduction from "./components/introduction/Introduction"
import Header from './components/header/Header';
import QuienesSomos from "./components/quienesSomos/QuienesSomos";
import Categorias from "./components/categorias/Categorias"
import Novedades from "./components/novedades/Novedades";
import Contact from "./components/contact/Contact"
import Quote from "./components/quote/Quote"
import Usuarios from "./components/usuarios/Usuarios"
import Footer from "./components/footer/Footer"



function App() {

 
  return (
    <div className="App">
      <Header />
      <Hero />
      <Introduction />
      <QuienesSomos />
      <Categorias />
      <Novedades />
      <Contact />
      <Quote />
      <Usuarios />
      <Footer />
    </div>
  );
}

export default App;
