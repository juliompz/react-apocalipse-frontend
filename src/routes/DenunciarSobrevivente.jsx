import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import Navbar from '../components/navbar'
import blogfetch from '../axios/conifg'
import Footer from '../components/Footer'

const DenunciarSobrevivente = () => {

  const navigate = useNavigate()

  const [sobreviventes, setSobreviventes] = useState([])
  const [sobreviventeSelecionado, setSobreviventeSelecionado] = useState('')

  useEffect(() => {
    const getSobreviventes = async () => {
      try{
        const response = await blogfetch.get("/sobrevivente/")
        console.log(response.data)
        setSobreviventes(response.data)
      }catch(error){
        console.log(error)
      }
    }
    getSobreviventes()

  }, [])

  const denunciarSobrevivente = (event) => {
    event.preventDefault()

    blogfetch.put(`/sobrevivente/${sobreviventeSelecionado}/votar-infectado`)
      .then(response => console.log(response))
      .catch(error => console.error(error));
      
    navigate("/")
  }


  return (
    <div className='container-denunciar'>
      <Navbar/>
      <div className="denunciar-sobrevivente">
        <div className="text-denunciar">
          <h1>Denunciar sobrevivente</h1>
          <p>Avistou algum sobrevivente registrado que foi infectado?</p>
        </div>
        <div className="formulario-denunciar">
          <form onSubmit={denunciarSobrevivente}>
            <h2>Denuncie</h2>
          <p>Informe o sobrevivente infectado</p>
          <select name="sobrevivente" id="sobrevivente" value={sobreviventeSelecionado} 
            onChange={(e) => (setSobreviventeSelecionado(e.target.value))}>
            {sobreviventes.filter((sobrevivente) => 
            sobrevivente.infectado === false).map(sobrevivente => 
            <option key={sobrevivente.id} value={sobrevivente.id}>{sobrevivente.nome}</option>)}
          </select>
          
          <button type="submit" className='botao'>Denunciar</button>
        </form>
        </div>

      </div>
        <Footer/>
    </div>
  )
}

export default DenunciarSobrevivente