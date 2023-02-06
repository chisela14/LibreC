import React, { useState } from 'react'

export const GifGrid = ({category}) => {
    
    const [images, setImages] = useState([]);
    const getGifs = async() => {                                                                    //encondeURI genera bien la url con espacios o caracteres especiales
        const url = `https://api.giphy.com/v1/gifs/search?api_key=aH2XSvGGFMXE2blRH2teLk1zi10TFsuz&q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=en`
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        return gifs;
    }

    getGifs()
        .then((imgs) => setImages(imgs))

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
               {
                images.map((img)=>
                <div className='card' key={img.id}>
                    <img src={img.url} alt={img.title}/>
                </div>
                )
                } 
            </div>
        </>
    )
}
