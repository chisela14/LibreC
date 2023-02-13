import React from 'react'

export const GifGridItem = ({id, title, url}) => { //{img}
  return (
    <div className='card'>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}
