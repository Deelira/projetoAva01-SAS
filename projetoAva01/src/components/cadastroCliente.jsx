import { useState } from "react";

function CadastrarCliente() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [usuario, setUser] = useState("");
    const [senha, setSenha] = useState("");


    function atualizarDados(event) {
        event.preventDefault();

        if (senha.length < 6) {
            alert("A senha precisa conter 6 ou mais caracteres!")
            return
        }

        const novoCliente = {
            nome,
            email,
            usuario,
            senha
        }

        console.log(novoCliente);
        console.log("Cliente cadastrado com sucesso!")

        setNome("");
        setEmail("");
        setUser("");
        setSenha("");
    }

    return <div className="container-cliente">
        <h1>CADASTRO DE CLIENTE</h1>
        <form onSubmit={atualizarDados}>
            <label htmlFor="nome"></label>
            <input
                type="text"
                id="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />

            <label htmlFor="email"></label>
            <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />

            <label htmlFor="usuario"></label>
            <input
                type="text"
                id="usuario" placeholder="Digite seu nome de usuario"
                value={usuario}
                onChange={(e) => setUser(e.target.value)}
                required
            />

            <label htmlFor="senha"></label>
            <input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                autoComplete="current-password"
                required
            />
            <button type="submit">Cadastrar Cliente</button>
        </form>
    </div>
}

export default CadastrarCliente;

