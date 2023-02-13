import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {
  let [categories, setCategories] = useState(['Honda', 'Yamaha', 'Ford']);

  // const addCategory = () => {
  //   //modifico la lista
  //   //categories.push("Kawashaki");
  //   //añado la lista en su nuevo estado
  //   //setCategories([...categories]);
  //   setCategories([...categories, 'Suzuki']);
  //    setCategories(cats => [...cats, 'Suzuki'])
  //}
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
        <AddCategory setCategories={setCategories}/>

        {/* <div align="right">
          <button onClick={addCategory} className="btn btn-primary">Añadir categoría</button>
        </div> */}
        
          {
            categories.map((category) => //{return <GifGrid ... />}
              <GifGrid
                key={category}
                category={category}/>
            )

            // categories.map((category, index)=>{
            //             //las key deben ser diferentes, cuidado con listas con elementos repetidos
            //   return <li key={index}>{category}</li>
            // })
          }
        
        <div className="d-flex">
          <button onClick={removeCategory} className="btn btn-danger" value="last">Eliminar última categoría</button>
          <button onClick={removeCategory} className="btn btn-danger" value="first">Eliminar primera categoría</button>
        </div>
    </>
  )
}
