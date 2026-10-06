import React from "react";


function ListarAgendamentos({ agendamentos }) {

    if (agendamentos.length === 0) {
        return null;
    }

    return (
        <div className="lista-agendamentos">
            <h1>Agendamentos</h1>
            <ul>
                {agendamentos.map((a) => (
                    <li key={a.id}>
                        <strong>{a.cliente.nome}</strong> —{" "}
                        {a.servico.nome} em {a.dataServico?.split("-").reverse().join("/") || "Data não informada"} às{" "}
                        {a.horaServico}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarAgendamentos;