import { useState } from "react";
import { storage } from "../utils/storage.js";

function CadastrarServico() {
    const [categorias] = useState(["Outros Serviços"]);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [categoria, setCategoria] = useState("");

    function atualizarDados(event) {
        event.preventDefault();

        const atuais = storage.getServicos() ?? [];

        if (atuais.some((e) => e.nome?.trim().toLowerCase() === nome.trim().toLowerCase())) {
            alert("Este serviço já está cadastrado!");
            return;
        }

         const novoServico = {
            id: crypto.randomUUID(),
            nome,
            descricao,
            preco: Number(preco),
            categoria,
        };

        storage.setServicos([...atuais, novoServico]);

        console.log(novoServico);
        console.log("Serviço cadastrado com sucesso!");
        alert("Serviço cadastrado com sucesso!");

        setNome("");
        setDescricao("");
        setPreco("");
        setCategoria("");
    }

    return (
        <div className="cadastro-servico">
            <h1>CADASTRO DE SERVIÇO</h1>
            <form onSubmit={atualizarDados}>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    placeholder="Nome do serviço"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <label htmlFor="descricao">Descrição:</label>
                <input
                    type="text"
                    id="descricao"
                    placeholder="Descreva o serviço"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />

                <label htmlFor="preco">Valor</label>
                <input
                    type="number"
                    id="preco"
                    placeholder="Digite o valor do serviço"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    required
                />

                <label htmlFor="categoria">Categoria:</label>
                <select
                    id="categoria"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    required
                >
                    <option value="">Selecione uma categoria</option>
                    {categorias.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
                <button type="submit">Cadastrar Serviço</button>
            </form>
        </div>
    );
}

export default CadastrarServico;