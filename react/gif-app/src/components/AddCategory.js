import React, { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('Patata');//''
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()){
            //declaras el valor actual de la función y le pasas una copia
            setCategories( cats => [inputValue, ...cats]); 
            setInputValue('');  
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
             <input 
                type="text"
                value={inputValue} 
                onChange={handleInputChange}/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}