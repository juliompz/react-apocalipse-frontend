import { useParams } from 'react-router-dom'; 
import Navbar from '../components/navbar';
import blogfetch from '../axios/conifg';
import { useEffect, useState } from 'react';

function DetalharSobrevivente() {

    const { id } = useParams()
    const [sobreviventeData, setSobreviventeData] = useState(null)
    
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')


    useEffect(()=> {
        blogfetch.get(`/sobrevivente/${id}/`)
        .then(response => {
            setSobreviventeData(response.data);
            
        })
        .catch(error => console.log(error))
    }, [id]);
  
    const alterarLocal = (e) => {
        
        
        const data = {latitude, longitude}

        blogfetch.patch(`/sobrevivente/${id}/`, data)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

  return (
    <div className='detalhar-sobrevivente'>
        <Navbar/>
        {sobreviventeData && (
            <div className="formulario">
            <div className="imagem-sobrevivente">
                <img src="/sobreviventesemfundo.png" alt="img-sobrevivente" />
            </div>
            
            <div className="personagem">
                <div className="info">
                    <h2>Nome: {sobreviventeData.nome}</h2>
                    <p>Idade: {sobreviventeData.idade}</p>
                    {sobreviventeData.sexo === 'M' ?(
                        <p>Sexo: Masculino</p>
                    ): (
                        <p>Sexo: Feminino</p>
                    )}
                    
                </div>

                <div className="local">
                    <h2>Local</h2>
                    <p>Latitude:{sobreviventeData.latitude}</p>
                    <p>Longitude:{sobreviventeData.longitude}</p>
                </div>
                <div className="inventario">
                    <h2>Inventario</h2>
                    <p>Água: {sobreviventeData.inventario.agua}</p>
                    <p>Alimento: {sobreviventeData.inventario.alimento}</p>  
                    <p>Medicação: {sobreviventeData.inventario.medicacao}</p>
                    <p>Munição: {sobreviventeData.inventario.municao}</p>

                </div>
                {sobreviventeData.infectado === true ?(
                    <div></div>
                ):(
                    <div className="alterar-local">
                        <form onClick={alterarLocal}>
                            <h3>Alterar local</h3>
                            <p>Latitude:</p>
                            <input value={latitude} type="text" name="latitude" id="latitude" onChange={(e)=> setLatitude(e.target.value)}/>
                            <p>Longitude:</p>
                            <input value={longitude} type="text" name="longitude" id="longitude" onChange={(e)=> setLongitude(e.target.value)}/>

                            <button type="submit" className='botao-alterar'>Alterar</button>
                        </form>
                    </div>  
                )}
                
                
            </div>
    
        </div>

        )}
        
    </div>

    
  )
}

export default DetalharSobrevivente;