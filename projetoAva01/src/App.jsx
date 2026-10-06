import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import CadastrarCliente from './components/cadastroCliente'
import CadastrarServico from './components/cadastroServico'
import AgendarServico from './components/agendarServico'

function App() {


  return (
    <>

      <section className='nav-bar'>
        <div className='logo'>
          <h2>agendly</h2>
      </div>

      </section>
      
      <div className='saudacao'>
        <p>Seja bem vindo ao Agendly, o seu sistema de agendamentos.</p>
      </div>

      <CadastrarCliente />
      <CadastrarServico />
      <AgendarServico />


    </>
  )
}

export default App