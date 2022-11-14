import "./Home.scss";
import { Container } from "react-bootstrap";
import { useRef } from "react";
import ListadoBotinesJugador from "../../containers/ListadoBotinesJugador";
import TituloSeccion from "../tituloSeccion/TituloSeccion";
import Carousel from "../carousel/Carousel";
import Estilos from "../estilos/Estilos";
import Posiciones from "../posiciones/Posiciones";




const Home = () => {

    const scrollSelecciones = useRef();
    const controlScrollSelecciones = () => {
    scrollSelecciones.current?.scrollIntoView({behavior: 'smooth'});
    };

    const scrollEstilos = useRef();
    const controlScrollEstilos = () => {
    scrollEstilos.current?.scrollIntoView({behavior: 'smooth'});
    };

    const scrollPosiciones = useRef();
    const controlScrollPosiciones = () => {
    scrollPosiciones.current?.scrollIntoView({behavior: 'smooth'});
    };

    const scrollJugador = useRef();
    const controlScrollJugador = () => {
    scrollJugador.current?.scrollIntoView({behavior: 'smooth'});
    };


    
    

    return (
        <Container fluid className="home">

            <header>
                <div className="contenedor-imagenes">
                    <img src= {require ("../../Multimedia/inicio-selecciones.png")} alt="" onClick={controlScrollSelecciones}/>
                    <img src= {require ("../../Multimedia/inicio-estilos.png")} alt="" onClick={controlScrollEstilos}/>
                    <img src= {require ("../../Multimedia/inicio-posiciones.png")} alt="" onClick={controlScrollPosiciones}/>
                    <img src= {require ("../../Multimedia/inicio-jugador.png")} alt="" onClick={controlScrollJugador}/>
                </div>

            </header>
            
            
            <section className="seccion-busqueda-selecciones" ref={scrollSelecciones}>
                <TituloSeccion text="Iniciar juego por selección" className="contenedor-titulo contenedor-titulo-selecciones"/>


                <h3>Elegí una selección nacional</h3>

                <Carousel></Carousel>

                <h5 className="titulo-selector-grupos">
                    GRUPOS QATAR 2022
                </h5> 
                
            </section>
           
            <section className="seccion-busqueda-estilos" ref={scrollEstilos}>
                <TituloSeccion text="Iniciar juego por estilos" className="contenedor-titulo contenedor-titulo-estilos"/>

                <h3 className="subtitulo-estilos">Elegí tu estilo para afrontar un partido</h3>

                <Estilos></Estilos>

            </section>
      
            <section className="seccion-busqueda-posiciones"ref={scrollPosiciones} >
                <TituloSeccion text="Iniciar juego por posición" className="contenedor-titulo contenedor-titulo-posiciones"/>

                <h3>Elegí tu posición en la cancha</h3>

                <Posiciones></Posiciones>

            </section>
      
            
            <section className="seccion-busqueda-jugador" ref={scrollJugador}>
                <TituloSeccion text="Iniciar juego por jugador" className="contenedor-titulo contenedor-titulo-jugador"/>

                <ListadoBotinesJugador></ListadoBotinesJugador>
            </section>
            
        </Container>
    )
}

export default Home;


      