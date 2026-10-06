import React from "react";

function ListarAgendamentos({ agendamentos, setAgendamentos }) {

    function atualizarStatus(id, novoStatus) {
        const listaAtualizada = agendamentos.map((agendamento) => {
            if (agendamento.id === id) {
                return { ...agendamento, status: novoStatus };
            }
            return agendamento;
        });
        
        setAgendamentos(listaAtualizada);
        localStorage.setItem("agendamentos", JSON.stringify(listaAtualizada));
    }


    function excluirAgendamento(id) {
        if (window.confirm("Tem certeza que deseja excluir este agendamento?")) {
            const listaAtualizada = agendamentos.filter((agendamento) => agendamento.id !== id);
            setAgendamentos(listaAtualizada);
            localStorage.setItem("agendamentos", JSON.stringify(listaAtualizada));
        }
    }

    return (
        <div className="lista-agendamentos">
            <h1>Agendamentos</h1>

            {agendamentos.length === 0 ? (
                <li>Não existem agendamentos cadastrados.</li>
            ) : (
                <ul>
                    {agendamentos.map((a) => (
                        <li key={a.id}>
                            <div className="info-agendamento">
                                <strong>{a.cliente.nome}</strong> —{" "}
                                {a.servico.nome} em{" "}
                                {a.dataServico?.split("-").reverse().join("/") || "Data não informada"}{" "}
                                às {a.horaServico}
                                <span className="status-badge">
                                    {" "}| Status: {a.status || "solicitado"}
                                </span>
                            </div>

                            <div className="acoes-agendamento">
                                {(a.status === "solicitado" || !a.status) && (
                                    <>
                                        <button className="btn-confirmar" onClick={() => atualizarStatus(a.id, "confirmado")}>
                                            Confirmar
                                        </button>
                                        <button className="btn-cancelar" onClick={() => atualizarStatus(a.id, "cancelado")}>
                                            Cancelar
                                        </button>
                                    </>
                                )}

                                {a.status === "confirmado" && (
                                    <button className="btn-cancelar" onClick={() => atualizarStatus(a.id, "cancelado")}>
                                        Cancelar
                                    </button>
                                )}

                                {a.status === "cancelado" && (
                                    <button className="btn-excluir" onClick={() => excluirAgendamento(a.id)}>
                                        Excluir
                                    </button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListarAgendamentos;