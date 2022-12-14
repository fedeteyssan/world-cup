import "./ListadoBotinesPosiciones.scss";
import React, { useState, useEffect } from "react";
import { useHistory, Link} from "react-router-dom";
import { Container } from "react-bootstrap";
import baseFinal from "../baseFinal.json";
import Item from "../components/item/Item";
import { useQuery } from "../hooks/useQuery";
import ScrollToTop from "../components/ScrollToTop";


const ListadoBotinesPosiciones = () => {
    
    const query = useQuery();

    const estiloID = query.get("estilo");
    const seleccionID = query.get("seleccion");
    const posicionID = query.get("posicion");
    const marcaID = query.get("marca");

    const [botines, setBotines] = useState([]);
    const[filteredBotines, setFilteredBotines]= useState([]);

    const [flagSeleccion,setFlagSeleccion]=useState(false);
    const handleClick =() =>{
        setFlagSeleccion(flagSeleccion?false:true);
    }

    const [flagEstilo,setFlagEstilo]=useState(false);
    const handleClick2 =() =>{
        setFlagEstilo(flagEstilo?false:true);
    }

    const [flagMarca,setFlagMarca]=useState(false);
    const handleClick3 =() =>{
        setFlagMarca(flagMarca?false:true);
    }

    let history = useHistory();
    function handleChange(value) {
        history.push(`/posicion?posicion=${posicionID}&estilo=${estiloID}&marca=${marcaID}&seleccion=${value}`);
        window.scrollTo(0, 0);
    }

    function handleChangeSeleccion(value) {
        history.push(`/posicion?posicion=${posicionID}&estilo=${estiloID}&marca=${marcaID}&seleccion=${value}`);
        window.scrollTo(0, 0);
    }

    function handleChangeEstilo(value) {
        history.push(`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&marca=${marcaID}&estilo=${value}`);
        window.scrollTo(0, 0);
    }

    function handleChangeMarca(value) {
        history.push(`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&estilo=${estiloID}&marca=${value}`);
        window.scrollTo(0, 0);
    }


    const getbotines = (dataBase) => 
        new Promise((resolve, reject) => {
           
            if (dataBase) {
                resolve(dataBase);
            } else {
                reject("No se han encontrado productos");
            };
            
    });
    useEffect(() => {
        getbotines(baseFinal)
        .then((result) => {
            posicionID
            ? setBotines(result.filter((product) => product.posicion === posicionID))
            : setBotines(baseFinal);
        })
        .catch((err) => console.log(err));
    }, [posicionID]);

    useEffect(() => {
        if (!botines) return;
        let filteredProducts = botines;

        if(estiloID&&estiloID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.estilo1 === estiloID || product.estilo2 === estiloID); 
        }

        if(seleccionID&&seleccionID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.seleccion === seleccionID);   
        }
        if(marcaID&&marcaID!=="null"){
            filteredProducts = filteredProducts.filter((product)=>product.marca === marcaID);   
        }

        setFilteredBotines(filteredProducts)

    },[botines,seleccionID,estiloID,marcaID]);


    return (

        <div>

            <ScrollToTop />

            <div className="fondo"></div>

            <Container fluid className="contenedor-botines-posiciones">   

                <div className="contenedor-titulo-plp">
                    <div className="banner"></div>
                    <h3>Botines de jugadores con posici??n {posicionID.replace(/-/g, ' ')}</h3>
                    <Link to="/home"><img className="home" src= {require ("../Multimedia/home.png")} alt="" /></Link>
                    <img className="logo" src= {require ("../Multimedia/logo.png")} alt="" />
                </div>

                <div className="drawer">

                    <h4>FILTROS <img className="filter-icon" src= {require ("../Multimedia/filter-icon.png")} alt="" /></h4>

                    <div className="contenedor-selectores">

                        <select onChange={event => handleChangeSeleccion(event.target.value)}>
                            <option value="null">SELECCI??N</option>
                            <option value="Alemania">Alemania</option>
                            <option value="Arabia-Saudita">Arabia Saudita</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Australia">Australia</option>
                            <option value="B??lgica">B??lgica</option>
                            <option value="Brasil">Brasil</option>
                            <option value="Camer??n">Camer??n</option>
                            <option value="Canad??">Canad??</option>
                            <option value="Corea">Corea</option>
                            <option value="Costa-Rica">Costa Rica</option>
                            <option value="Croacia">Croacia</option>
                            <option value="Dinamarca">Dinamarca</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Espa??a">Espa??a</option>
                            <option value="Estados-Unidos">Estados Unidos</option>
                            <option value="Francia">Francia</option>
                            <option value="Gales">Gales</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Pa??ses-Bajos">Pa??ses Bajos</option>
                            <option value="Inglaterra">Inglaterra</option>
                            <option value="Ir??n">Ir??n</option>
                            <option value="Jap??n">Jap??n</option>
                            <option value="Marruecos">Marruecos</option>
                            <option value="M??xico">M??xico</option>
                            <option value="Polonia">Polonia</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Suiza">Suiza</option>
                            <option value="T??nez">T??nez</option>
                            <option value="Uruguay">Uruguay</option>
                        </select>  

                        <select onChange={event => handleChangeEstilo(event.target.value)}>
                            <option value="null">ESTILO</option>
                            <option value="Elegante">Elegante</option>
                            <option value="Dominante">Dominante</option>
                            <option value="Imparable">Imparable</option>
                            <option value="Estratega">Estratega</option>
                            <option value="Desafiante">Desafiante</option>
                            <option value="Intuitivo">Intuitivo</option>
                        </select>

                        <select onChange={event => handleChangeMarca(event.target.value)}>
                            <option value="null">MARCA</option>
                            <option value="adidas">adidas</option>
                            <option value="Nike">Nike</option>
                            <option value="Puma">Puma</option>
                        </select>  

                    </div>
                </div>

                <aside className="controlador">

                    <h4>FILTROS <img className="ms-3" src= {require ("../Multimedia/filter-icon.png")} alt="" /></h4>

                    <div className="contenedor-filtros">

                        <div className="filtro filtro1">
                            <span>ESTILO DE JUEGO</span>
                            <img className={flagEstilo?"open flecha1":"close flecha1"} onClick={handleClick2} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                        </div>

                        {flagEstilo && (<div className="contenedor-estilos">

                            <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&marca=${marcaID}`} onClick={handleClick2}><button className="reset">{estiloID!=="null"?estiloID:""} X</button></Link> 

                            <div className="contenedor-botones">
                                <div className="botones-estilo">
                                    <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&marca=${marcaID}&estilo=Elegante`}><input type="button" id="Elegante"></input></Link>
                                    <label for="Elegante">ELEGANTE</label>
                                </div>

                                <div className="botones-estilo">
                                    <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&marca=${marcaID}&estilo=Dominante`}><input type="button" id="Dominante"></input></Link>
                                    <label for="Dominante">DOMINANTE</label>
                                </div>
                                
                                <div className="botones-estilo">
                                    <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&marca=${marcaID}&estilo=Imparable`}><input type="button" id="Imparable"></input></Link>
                                    <label for="Imparable">IMPARABLE</label>
                                </div>  
                                
                            </div>

                            <div className="contenedor-botones">
                                <div className="botones-estilo">
                                    <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&marca=${marcaID}&estilo=Estratega`}><input type="button" id="Estratega"></input></Link>
                                    <label for="Estratega">ESTRATEGA</label>
                                </div>

                                <div className="botones-estilo">
                                    <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&marca=${marcaID}&estilo=Desafiante`}><input type="button" id="Desafiante"></input></Link>
                                    <label for="Desafiante">DESAFIANTE</label>
                                </div>
                                
                                <div className="botones-estilo">
                                    <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&marca=${marcaID}&estilo=Intuitivo`}><input type="button" id="Intuitivo"></input></Link>
                                    <label for="Intuitivo">INTUITIVO</label>
                                </div>  
                                
                            </div>

                        </div>
                        )}

                        <div className="filtro">
                            <span>SELECCI??N</span>
                            <img className={flagSeleccion?"open":"close"} onClick={handleClick} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                        </div>

                        {flagSeleccion && (<div className="contenedor-selector-paises">
                            <select size="32"onChange={event => handleChange(event.target.value)}>
                                <option value="null">TODOS</option>
                                <option value="Alemania">Alemania</option>
                                <option value="Arabia-Saudita">Arabia Saudita</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Australia">Australia</option>
                                <option value="B??lgica">B??lgica</option>
                                <option value="Brasil">Brasil</option>
                                <option value="Camer??n">Camer??n</option>
                                <option value="Canad??">Canad??</option>
                                <option value="Corea">Corea</option>
                                <option value="Costa-Rica">Costa Rica</option>
                                <option value="Croacia">Croacia</option>
                                <option value="Dinamarca">Dinamarca</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Espa??a">Espa??a</option>
                                <option value="Estados-Unidos">Estados Unidos</option>
                                <option value="Francia">Francia</option>
                                <option value="Gales">Gales</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Pa??ses-Bajos">Pa??ses Bajos</option>
                                <option value="Inglaterra">Inglaterra</option>
                                <option value="Ir??n">Ir??n</option>
                                <option value="Jap??n">Jap??n</option>
                                <option value="Marruecos">Marruecos</option>
                                <option value="M??xico">M??xico</option>
                                <option value="Polonia">Polonia</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Suiza">Suiza</option>
                                <option value="T??nez">T??nez</option>
                                <option value="Uruguay">Uruguay</option>
                            </select>
                        </div>
                        )}

                        <div className="filtro filtro3">
                            <span>MARCA</span>
                            <img className={flagMarca?"open flecha3":"close flecha3"} onClick={handleClick3} src= {require ("../Multimedia/arrowDown.png")} alt="" />                
                        </div>

                        {flagMarca && (<div className="contenedor-marcas">

                            <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&estilo=${estiloID}`} onClick={handleClick3}><button className="reset">{marcaID!=="null"?marcaID:""} X</button></Link> 

                            <div className="contenedor-botones">
                                <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&estilo=${estiloID}&marca=adidas`}>
                                    <div className="botones-marcas">
                                        <img className="logo-marca" src= {require ("../Multimedia/logo-adidas.png")} alt="" />
                                        <label for="adidas">adidas</label>
                                    </div>
                                </Link>

                                <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&estilo=${estiloID}&marca=Nike`}>
                                    <div className="botones-marcas">
                                        <img className="logo-marca" src= {require ("../Multimedia/logo-nike.png")} alt="" />
                                        <label for="Nike">Nike</label>
                                    </div>
                                </Link>
                                
                                <Link to={`/posicion?posicion=${posicionID}&seleccion=${seleccionID}&estilo=${estiloID}&marca=Puma`}>
                                    <div className="botones-marcas">
                                        <img className="logo-marca" src= {require ("../Multimedia/logo-puma.png")} alt="" />
                                        <label for="Puma">Puma</label>
                                    </div> 
                                </Link> 
                                
                            </div>

                        </div>
                        )}


                    </div>

                </aside>

                <div className="contenedor-cards">
                    {filteredBotines.length
                    ? filteredBotines.map((botin) => <Item item={botin}/>)
                    : <div className="error-msg"><p>...No hay jugadores con la combinaci??n elegida ...</p></div>  
                    }    
                </div>

            </Container>

        </div>

        
    );
};
 
export default ListadoBotinesPosiciones;