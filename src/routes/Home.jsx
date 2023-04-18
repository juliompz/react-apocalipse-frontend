import React, { useEffect, useState } from 'react'
import blogfetch from '../axios/conifg'

import { Link, Outlet } from 'react-router-dom'

import CrudSobrevivente from '../components/CrudSobrevivente'
import Tela from '../components/Tela'
import VerSobreviventes from '../components/VerSobreviventes'
import Footer from '../components/Footer'






const Home = () => {

  const [sobreviventes, setSobreviventes] = useState([])

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




  return (
    <div className="App">
    <div className="container">
      <Outlet/>
      <Tela />
        <div className="secao-versobreviventes">
          <h1 className='title-versobreviventes'>Sobreviventes</h1>
          <div className="versobreviventes">
            {sobreviventes.length === 0 ? (
              <p className='loading'></p>
            ): (
              sobreviventes.filter(((sobrevivente) => sobrevivente.infectado === false))
              .map((sobrevivente) => {
                return (
                  
                  <Link key={sobrevivente.id} to={`/sobrevivente/${sobrevivente.id}`}>
                    <VerSobreviventes
                    key={sobrevivente.id}
                    nome={sobrevivente.nome}
                    idade={sobrevivente.idade}
                    sexo={sobrevivente.sexo}
                    votos_infectado={sobrevivente.votos_infectado}
                     />
                  </Link>

     
                  
                )
              })
            )}

          </div>
          <h3 className='title-versobreviventes'>Infectados</h3>
          <div className="versobreviventes">
              {sobreviventes.length === 0 ? (
              <p className=''></p>
            ) : (
              sobreviventes.filter((sobrevivente) => sobrevivente.infectado === true)
              .map((sobrevivente) => {
                return (
                  <Link key={sobrevivente.id} to={`/sobrevivente/${sobrevivente.id}`}>
                    <VerSobreviventes
                    key={sobrevivente.id}
                    nome={sobrevivente.nome}
                    idade={sobrevivente.idade}
                    sexo={sobrevivente.sexo}
                    votos_infectado={sobrevivente.votos_infectado}
                    />
                  </Link>

                  
 
                )
              })
            )}
          </div>
          
        </div>

      <div className="crud">
        <CrudSobrevivente 
        h3='Novo Sobrevivente'
        p='Cadastre-se ou cadastre outros sobreviventes'
        link='novo-sobrevivente'
        linkNome='Cadastrar'
        />
        <CrudSobrevivente 
        h3='Denunciar sobrevivente'
        p='Viu algum sobrevivente cadastrado que foi infectado?'
        link='denunciar-sobrevivente'
        linkNome='Denunciar'
        />
        <CrudSobrevivente 
        h3='Negociar item'
        p='Faça uma troca justa de itens com outros sobreviventes.'
        link='negociar'
        linkNome='Negociar'
        />
      </div>

    </div>

    <Footer/>
  </div>
  )
}

export default Home