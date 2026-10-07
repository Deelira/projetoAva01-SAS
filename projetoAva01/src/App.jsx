import { useState, useEffect } from 'react'
import './App.css'
import CadastrarCliente from './components/cadastroCliente'
import CadastrarServico from './components/cadastroServico'
import AgendarServico from './components/agendarServico'
import ListarAgendamentos from './components/ListarAgendamentos'

function App() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [paginaAtiva, setPaginaAtiva] = useState('agendar');

  const [tema, setTema] = useState(() => {
    return localStorage.getItem('tema') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('tema', tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((t) => (t === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    setAgendamentos(JSON.parse(localStorage.getItem("agendamentos")) || []);
  }, []);

  useEffect(() => {
    if (paginaAtiva === 'agendamentos') {
      setAgendamentos(JSON.parse(localStorage.getItem("agendamentos")) || []);
    }
  }, [paginaAtiva]);

  const paginas = [

    { id: 'cliente', label: 'Cadastrar Cliente' },
    { id: 'servico', label: 'Cadastrar Serviço' },
    { id: 'agendar', label: 'Agendar Serviço' },
    { id: 'agendamentos', label: 'Agendamentos' },

  ];

  return (
    <>
      <header className='nav-bar'>
        <div className='logo'>
          <h2>agendly</h2>
        </div>

        <button
          type="button"
          className='toggle-tema'
          onClick={alternarTema}
          aria-label={tema === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          title={tema === 'dark' ? 'Modo claro' : 'Modo escuro'}
        >
          {tema === 'dark' ? '🌙' : '☀️'}
        </button>
      </header>

      <div className='saudacao'>
        <p>Seja bem vindo ao Agendly, o seu sistema de agendamentos.</p>
      </div>

      <nav className='menu'>
        {paginas.map((pagina) => (
          <button
            key={pagina.id}
            type="button"
            className={`menu-item ${paginaAtiva === pagina.id ? 'ativo' : ''}`}
            onClick={() => setPaginaAtiva(pagina.id)}
          >
            {pagina.label}
          </button>
        ))}
      </nav>

      <main className='conteudo-pagina'>

        {paginaAtiva === 'agendar' && (
          <AgendarServico
            agendamentos={agendamentos}
            setAgendamentos={setAgendamentos}
          />
        )}

        {paginaAtiva === 'agendamentos' && (
          <ListarAgendamentos
            agendamentos={agendamentos}
            setAgendamentos={setAgendamentos}
          />
        )}

        {paginaAtiva === 'cliente' && <CadastrarCliente />}

        {paginaAtiva === 'servico' && <CadastrarServico />}

      </main>

      <footer className='rodape'>
        <p>Desenvolvido por <strong>Alisson Lira</strong> &amp; <strong>Eduarda Cardoso</strong></p>
      </footer>
      
    </>
  )
}

export default App