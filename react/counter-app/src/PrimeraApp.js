//componentes de dos tipos: funcionales y de clase
//se van a usar los funcionales, pero podrían encontrarse los de clase
//los componentes se escriben la primera en mayúscula

//import React, { Fragment } from "react"; opción más antigua con <Fragment></Fragment>
import React from "react"; //en principio ya no hace falta
import PropTypes from "prop-types";
                    //desestructuración
const PrimeraApp = ({nombre, apellidos}) => { //(props)   otra forma de poner un valor predeterminado: apellidos='García'
    let n = 1+1;
    let b = false; //no lo muestra
    let o = {nombre:"María", edad:"28"}; //da fallo, necesita stringify o llamar a una propiedad solo
    let s = "hola";
    const variables = [n,b,s,o.nombre, JSON.stringify(o)]; 
    if(!apellidos){
        throw new Error('Los apellidos son requeridos');
    }
    return ( //solo puede devolverse un elemento
        <>
            <h1>Hola Mundo</h1>
            <h2>{variables}</h2>
            <h2>Adiós {nombre} {apellidos}</h2>
        </>
    )//cuidado con los saltos de lína porque pone ; automáticamente
}
PrimeraApp.propTypes = {
    nombre: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    apellidos: 'García'
}


export default PrimeraApp;