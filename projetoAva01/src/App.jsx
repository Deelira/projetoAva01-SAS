import { useState, useEffect } from 'react' 
import './App.css'
import CadastrarCliente from './components/cadastroCliente'
import CadastrarServico from './components/cadastroServico'
import AgendarServico from './components/agendarServico'
import ListarAgendamentos from './components/ListarAgendamentos'

function App() {

  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    setAgendamentos(JSON.parse(localStorage.getItem("agendamentos")) || []);
  }, []);

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
      <AgendarServico agendamentos={agendamentos} setAgendamentos={setAgendamentos} />
      
      <div className='agendamentos'>
        <ListarAgendamentos agendamentos={agendamentos} />
      </div>

    </>
  )
}

export default App