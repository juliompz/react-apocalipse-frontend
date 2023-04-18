import React from 'react'

const VerSobreviventes = (props) => {
  return (
    <div className='card-sobrevivente'>
        <img src="/usericon.png" alt="img" />
        <h3 className="nome">{props.nome}</h3>
        <h4>Perfil:</h4>
        <p>{props.idade} Anos</p>
        {props.sexo === 'M' ? (
          <p>Masculino</p>
        ):(
          <p>Feminino</p>
        )}
        <p>Denuncias: {props.votos_infectado}</p>
    </div>
  )
}

export default VerSobreviventes