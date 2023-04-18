import React from 'react'
import { Link } from 'react-router-dom'
const CrudSobrevivente = (props) => {
  return (
        <div className="crud-item">
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
            <Link to={props.link}>
            <input type="button" value={props.linkNome} className='botao' />
            </Link>
            
        </div>
  )
}

export default CrudSobrevivente
