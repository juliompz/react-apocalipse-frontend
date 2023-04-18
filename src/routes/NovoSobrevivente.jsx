import React, { useState } from 'react'

import blogfetch from '../axios/conifg'

import Navbar from '../components/navbar'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const NovoSobrevivente = () => {

  const navigate = useNavigate()

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('M');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [agua, setAgua] = useState('');
  const [alimento, setAlimento] = useState('');
  const [medicacao, setMedicacao] = useState('');
  const [municao, setMunicao] = useState('');

  const enviarFormulario = async (event) => {
    
    event.preventDefault()
    
    const inventario = {
      agua: parseInt(agua),
      alimento: parseInt(alimento),
      medicacao: parseInt(medicacao),
      municao: parseInt(municao)
    };

    const data = {nome, idade, sexo, latitude, longitude, inventario}

      blogfetch.post('/sobrevivente/', data)
      .then(response => console.log(response))
      .catch(error => console.error(error));

      navigate('/')
  }


  return (
    <div className='novo-sobrevivente'>
      <Navbar/>
      <div className="formulario">
        <div className="imagem-sobrevivente">
          <img src="/sobreviventesemfundo.png" alt="img-sobrevivente" />
        </div>
        <form onSubmit={enviarFormulario}>
          <h2>Cadastrar sobrevivente</h2>
          <div className="info-pessoal">
            <label htmlFor="nome">Nome</label>
            <input 
            type="text" name="nome" 
            id="nome" placeholder='Digite seu nome...'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />

            <label htmlFor="idade">Idade</label>
            <input 
            type="text" name="idade" 
            id="idade" placeholder='Digite sua idade...'
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            />

            <p>Sexo:</p>
            <select 
            name="sexo" id="sexo"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            >
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </div>

          <div className="local">
            <h3>Local</h3>
            <label htmlFor="">Latitude</label>
            <input 
            type="text" name="latitude" 
            id="latitude" placeholder='ex: -5.08921'
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            />

            <label htmlFor="">Longitude</label>
            <input 
            type="text" name="longitude" 
            id="longitude" placeholder='ex: -42.8016'
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
          
          <div className="inventario">
            <h3>Inventario</h3>

            <label htmlFor="agua">agua</label>
            <input 
            type="text" name="agua" 
            id="agua" placeholder='ex: 5'
            value={agua}
            onChange={(e) => setAgua(e.target.value)}
            />

            <label htmlFor="alimento">alimento</label>
            <input 
            type="text" name="alimento"
            id="alimento" placeholder='ex: 2'
            value={alimento}
            onChange={(e) => setAlimento(e.target.value)}
            />

            <label htmlFor="medicacao">medicacao</label>
            <input 
            type="text" name="medicacao" 
            id="medicacao" placeholder='ex: 1'
            value={medicacao}
            onChange={(e) => setMedicacao(e.target.value)}
            />

            <label htmlFor="municao">municao</label>
            <input 
            type="text" name="municao" 
            id="municao" placeholder='ex: 6'
            value={municao}
            onChange={(e) => setMunicao(e.target.value)}
            />
          </div>

          <button type="submit" className='btn'>CADASTRAR</button>

        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default NovoSobrevivente