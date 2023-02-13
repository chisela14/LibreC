import React from 'react'; //{ useState }
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    //const [images, setImages] = useState([]);

    //renombrar la propiedad de la desestructuración
    const {data:images, loading} = useFetchGifs(category);

    // useEffect(()=>{
    //     getGifs(category)
    //     //.then((imgs) => setImages(imgs))
    //     //reducción posible cuando en una función de flecha
    //     //la respuesta es el parametro que usamos en la función
    //     .then(setImages)
    // }, [])

    return (
        <>
            <h3>{category}</h3>
            {/* {loading ? 'Cargando...': 'Datos cargados'} */}
            {/*Si se cumple lo muestra*/
                loading && <div className="spinner-border text-primary"></div>}
            
            <div className='card-grid'>
               {
                    images.map((img)=> 
                    <GifGridItem
                             key={img.id}
                             {...img}/>)
                } 
                {/* images.map((img)=>
                        <div className='card' key={img.id}>
                            <img src={img.url} alt={img.title}/>
                        </div>
                    ) */}
            </div>
        </>
    )
}
