import React from 'react'
import { Imagen } from './Imagen'

export const Comentario = (props) => {
  return (
    <div className='media'>
        <Imagen urlImage={props.urlImage} />
        <div className="media-body">
            <h5 className="mt-0">{props.persona}</h5>
            {props.comentario}
        </div>
    </div>
  )
}
