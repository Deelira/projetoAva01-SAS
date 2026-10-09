import { useState } from "react";
import { storage } from "../utils/storage.js";

function CadastrarCliente() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [usuario, setUser] = useState("");
    const [senha, setSenha] = useState("");

    function atualizarDados(event) {
        event.preventDefault();

        if (senha.length < 6) {
            alert("A senha precisa conter 6 ou mais caracteres!");
            return;
        };


        const atuais = storage.getClientes() ?? [];

        if (atuais.some((e) => e.email === email)) {
            alert("Este e-mail já está cadastrado!");
            return;
        };

        const novoCliente = {
            id: crypto.randomUUID(),
            nome,
            email,
            usuario,
            senha,
        };
        
        storage.setClientes([...atuais, novoCliente]);

        console.log(novoCliente);
        console.log("Cliente cadastrado com sucesso!");
        alert("Cliente cadastrado com sucesso!")

        setNome("");
        setEmail("");
        setUser("");
        setSenha("");
    };

    return (
        <div className="container-cliente">
            <h1>CADASTRO DE CLIENTE</h1>
            <form onSubmit={atualizarDados}>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="usuario">Usuário:</label>
                <input
                    type="text"
                    id="usuario"
                    placeholder="Digite seu nome de usuario"
                    value={usuario}
                    onChange={(e) => setUser(e.target.value)}
                    required
                />

                <label htmlFor="senha">Senha:</label>
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
    );
}

export default CadastrarCliente;

