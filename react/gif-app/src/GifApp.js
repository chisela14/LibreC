import React, { useState } from 'react'

export default function GifApp() {
  let [categories, setCategories] = useState(['Honda', 'Yamaha', 'Ford']);

  const addCategory = () => {
    //modifico la lista
    //categories.push("Kawashaki");
    //añado la lista en su nuevo estado
    //setCategories([...categories]);
    setCategories([...categories, 'Suzuki']);
  }
  const removeCategory = (e) => {
    if(e.target.value === 'first'){
      categories.shift();
    }else{
      categories.pop();
    }
    setCategories([...categories]);
  }

  return (
    <>
        <h2>GifApp</h2>
        <hr/>
        <div align="right">
          <button onClick={addCategory} className="btn btn-primary">Añadir categoría</button>
        </div>
        
        <ol>
          {
            categories.map((category, index)=>{
                        //las key deben ser diferentes, cuidado con listas con elementos repetidos
              return <li key={index}>{category}</li>
            })
          }
        </ol>
        <div className="d-flex">
          <button onClick={removeCategory} className="btn btn-danger" value="last">Eliminar última categoría</button> 
          <button onClick={removeCategory} className="btn btn-danger" value="first">Eliminar primera categoría</button>
        </div>
    </>
  )
}
