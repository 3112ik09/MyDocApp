import { Button } from '@material-ui/core';
import React from 'react';
import './Card.css';
function Card({img , name ,desc ,contact} ) {
  return (
    <div className='card'>
        <div className='card__info'>
           <h2>{name}</h2>
           <p style={{maxWidth:"450px"}}>{desc}</p>
            {contact ?<Button >Connect</Button>:""}
        </div>
        <div className='card__img'>
          <img src={img}></img>
        
        </div>
    </div>
  )
}

export default Card