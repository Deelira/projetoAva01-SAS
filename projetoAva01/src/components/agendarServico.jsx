import { useEffect, useState } from "react";
import { storage } from "../utils/storage.js";

function AgendarServico() {
    const [clientes, setClientes] = useState([]);
    const [servicos, setServicos] = useState([]);

    const [clienteId, setClienteId] = useState("");
    const [servicoId, setServicoId] = useState("");
    const [horaServico, setHora] = useState("");
    const [dataServico, setData] = useState("");

    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(() => {
        setClientes(storage.getClientes());
        setServicos(storage.getServicos());
        setAgendamentos(
            JSON.parse(localStorage.getItem("agendamentos")) || []
        );
    }, []);

    function agendar(event) {
        event.preventDefault();

        const cliente = clientes.find((c) => c.id === clienteId);
        const servico = servicos.find((s) => s.id === servicoId);

        if (!cliente || !servico) {
            alert("Selecione um cliente e um serviço válidos!");
            return;
        }

        const novoAgendamento = {
            id: crypto.randomUUID().slice(0, 6),
            cliente: { id: cliente.id, nome: cliente.nome },
            servico: {
                id: servico.id,
                nome: servico.nome,
                preco: servico.preco,
            },
            dataServico,
            horaServico,
            criadoEm: new Date().toISOString(),
        };

        const listaAtualizada = [...agendamentos, novoAgendamento];
        setAgendamentos(listaAtualizada);
        localStorage.setItem(
            "agendamentos",
            JSON.stringify(listaAtualizada)
        );

        console.log(novoAgendamento);
        console.log("Agendamento feito com sucesso!");

        setClienteId("");
        setServicoId("");
        setData("");
        setHora("");
    }

    return (
        <div className="agendamentos">
            <h1>Agendar Serviço</h1>

            {clientes.length === 0 || servicos.length === 0 ? (
                <p>
                    É preciso ter pelo menos um cliente e um serviço
                    cadastrados para agendar.
                </p>
            ) : (
                <form onSubmit={agendar}>
                    <label htmlFor="cliente">Cliente</label>
                    <select
                        id="cliente"
                        value={clienteId}
                        onChange={(e) => setClienteId(e.target.value)}
                        required
                    >
                        <option value="">Selecione um cliente</option>
                        {clientes.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.nome} ({c.email})
                            </option>
                        ))}
                    </select>

                    <label htmlFor="servico">Serviço</label>
                    <select
                        id="servico"
                        value={servicoId}
                        onChange={(e) => setServicoId(e.target.value)}
                        required
                    >
                        <option value="">Selecione um serviço</option>
                        {servicos.map((s) => (
                            <option key={s.id} value={s.id}>
                                {s.nome} — R$ {s.preco.toFixed(2)}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="data">Data</label>
                    <input
                        type="date"
                        id="data"
                        value={dataServico}
                        onChange={(e) => setData(e.target.value)}
                        required
                    />

                    <label htmlFor="hora">Hora</label>
                    <input
                        type="time"
                        id="hora"
                        value={horaServico}
                        onChange={(e) => setHora(e.target.value)}
                        required
                    />

                    <button type="submit">Agendar</button>
                </form>
            )}

            {agendamentos.length > 0 && (
                <>
                    <h2>Agendamentos</h2>
                    <ul>
                        {agendamentos.map((a) => (
                            <li key={a.id}>
                                <strong>{a.cliente.nome}</strong> —{" "}
                                {a.servico.nome} em {a.dataServico} às{" "}
                                {a.horaServico}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default AgendarServico;