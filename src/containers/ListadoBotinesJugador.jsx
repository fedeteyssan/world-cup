import "./ListadoBotinesJugador.scss";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import baseFinal from "../baseFinal.json";
import Item from "../components/item/Item";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";

const ListadoBotinesJugador = () => {

    const [botines, setBotines] = useState([]);

    const [tablaBotines, setTablaBotines]= useState([]);
    const [busqueda, setBusqueda]= useState("");

    const getbotines = (dataBase) => 
    new Promise((resolve, reject) => {
       
        if (dataBase) {
            resolve(dataBase);
        } else {
            reject("No se han encontrado productos");
        };
        
    });


    const handleChange = e =>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) =>{
        let resultadoBusqueda = tablaBotines.filter((elemento) => 
            elemento.jugador.toString().toLowerCase().normalize('NFD')
            .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
            .normalize().includes(terminoBusqueda.toLowerCase().trim())
        );
        setBotines(resultadoBusqueda);
       
    }
    
    useEffect(() => {
        getbotines(baseFinal)
        .then((result) => {
            setBotines(baseFinal);
            setTablaBotines(baseFinal);
        })
        .catch((err) => console.log(err));
    }, []);


    return (

        <div>

            <ScrollToTop />

            <div className="fondo"></div>

            <Container fluid className="contenedor-botines-jugadores">

                <div className="contenedor-titulo-plp">
                    <div className="banner"></div>
                    <Link to="/home"><img className="home" src= {require ("../Multimedia/home.png")} alt="" /></Link>
                    <img className="logo" src= {require ("../Multimedia/logo.png")} alt="" />
                </div>

                <div className="container-input">
                    <input  type="search" className="form-control input-buscar" placeholder="nombre jugador" autoFocus onChange={handleChange} value={busqueda}/>
                </div>

                <div className="contenedor-cards">
                    {botines.length
                    ? busqueda && botines.map((botin) => <Item item={botin}/>)
                    : <div className="error-msg"><p>...ESTE JUGADOR NO FUE CONVOCADO...</p></div>  
                    }    
                </div>

            </Container>


        </div>

       
     );
 };
 
 export default ListadoBotinesJugador;