import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../routes/Home'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/' className='navbar-item'>Home</Link>
        <Link to='/novo-sobrevivente' className='navbar-item'>Novo sobrevivente</Link>
        <Link to='/denunciar-sobrevivente' className='navbar-item'>Denunciar sobrevivente</Link>
        <Link to='/negociar' className='navbar-item'>Negociar item</Link>
    </div>  
  )
}

export default Navbar