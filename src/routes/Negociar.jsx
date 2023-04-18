import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import blogfetch from '../axios/conifg'

const Negociar = () => {

  const navigate = useNavigate()

  const [sobreviventes, setSobreviventes] = useState([])
  const [sobreviventeSelecionado1, setSobreviventeSelecionado1] = useState('')
  const [sobreviventeSelecionado2, setSobreviventeSelecionado2] = useState('')


  const [agua, setAgua] = useState('');
  const [alimento, setAlimento] = useState('');
  const [medicacao, setMedicacao] = useState('');
  const [municao, setMunicao] = useState('');

  const [agua2, setAgua2] = useState('');
  const [alimento2, setAlimento2] = useState('');
  const [medicacao2, setMedicacao2] = useState('');
  const [municao2, setMunicao2] = useState('');


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

  const efetuarTroca = (event) => {
    event.preventDefault()
    const data = {
      sobrevivente1_id:sobreviventeSelecionado1,
      sobrevivente2_id:parseInt(sobreviventeSelecionado2) ,
      sobrevivente1_itens: {
        agua: agua,
        alimento: alimento,
        medicacao: medicacao,
        municao: municao
      },
      sobrevivente2_itens: {
        agua: agua2,
        alimento: alimento2,
        medicacao: medicacao2,
        municao: municao2
      }
    }
   
    blogfetch.post('/negociar/', data)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

  }


  return (
    <div className='container-negociar'>
      <Navbar/>
      <div className="negociar">
        <form onSubmit={efetuarTroca}>
          <div className="sobrevivente1">
            <h2>Sobrevivente 1</h2>
            <select name="sobrevivente" id="sobrevivente" 
            value={sobreviventeSelecionado1} onChange={(e) => (setSobreviventeSelecionado1(parseInt(e.target.value)))}>
              {sobreviventes.filter((sobrevivente) => sobrevivente.infectado === false).map(sobrevivente => 
              <option key={sobrevivente.id} value={sobrevivente.id}>{sobrevivente.nome}</option>)}
            </select>
            <h3>Item:</h3>
            <div className="itens">
              <label htmlFor="agua">Agua: </label>
             <input
             min={0} 
             type="number" name="agua" 
             id="agua" value={agua}
             onChange={(e) => (setAgua(e.target.value))}
             />

             <label htmlFor="alimento">Alimento: </label>
             <input 
             min={0} 
             type="number" name="alimento" 
             id="alimento" 
             value={alimento}
             onChange={(e) => (setAlimento(e.target.value))}
             />

             <label htmlFor="medicacao">Medicação: </label>
             <input 
             min={0} 
             type="number" name="medicacao" 
             id="medicacao" 
             value={medicacao}
             onChange={(e) => (setMedicacao(e.target.value))}
             />

             <label htmlFor="municao">Munição: </label>
             <input 
             min={0} 
             type="number" name="municao" 
             id="municao" 
             value={municao}
             onChange={(e) => (setMunicao(e.target.value))}
             />
            </div>

          </div>


          <div className="sobrevivente2">
            <h2>Sobrevivente 2</h2>
            <select name="sobrevivente" id="sobrevivente" 
            value={sobreviventeSelecionado2} onChange={(e) => (setSobreviventeSelecionado2(parseInt(e.target.value)))}>
              {sobreviventes.filter((sobrevivente) => sobrevivente.infectado === false).map(sobrevivente => 
              <option key={sobrevivente.id} value={sobrevivente.id}>{sobrevivente.nome}</option>)}
            </select>
            <h3>Item:</h3>
            <div className="itens">
              <label htmlFor="agua">Agua: </label>
              <input 
              type="number" name="agua" 
              id="agua" 
              value={agua2}
              onChange={(e) => (setAgua2(e.target.value))}
              />

              <label htmlFor="alimento">Alimento: </label>
              <input 
              type="number" name="alimento" 
              id="alimento" 
              value={alimento2}
              onChange={(e) => (setAlimento2(e.target.value))}
              />

              <label htmlFor="medicacao">Medicação: </label>
              <input 
              type="number" name="medicacao" 
              id="medicacao" 
              value={medicacao2}
              onChange={(e) => (setMedicacao2(e.target.value))}
              />

              <label htmlFor="municao">Munição: </label>
              <input 
              type="number" name="municao" 
              id="municao" 
              value={municao2}
              onChange={(e) => (setMunicao2(e.target.value))}
              />
            </div>
          </div>


          <input type="submit" value="Efetuar troca" className='btn-negociar'/>
        </form>

      </div>
      <Footer/>
    </div>
  )
}

export default Negociar