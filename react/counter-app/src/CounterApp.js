//escribir rfc y la extensión genera código base
import PropTypes from "prop-types";
import React, { useState } from "react";

//las propiedades de react son inmutables, no se pueden modificar directamente
const CounterApp = ({value}) => {
    let [counter, setCounter] = useState(value); //propiedad y función que modifica la propiedad, por convenio x y setx
    
    const changeCounter = (e)=>{
        if(e.target.value ==="+"){
            setCounter( counter +1)
        }else if(e.target.value ==="-"){
            setCounter( counter -1)
        }else{
            setCounter(counter = value)
        }
    }

    return(
        <>
            <h1>CounterApp</h1>
        
            <button onClick={changeCounter} value="-" class="btn btn-danger">-1</button>
            <h2> { counter } </h2>
            <button onClick={changeCounter} value="+" class="btn btn-success">+1</button>
            
            <button onClick={changeCounter} value="r" class="btn btn-warning">Resetear</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;