const KEY_CLIENTES = "clientes";
const KEY_SERVICOS = "servicos";
const KEY_AGENDAMENTOS = 'agendamentos';

export const storage = {
    getClientes: () => JSON.parse(localStorage.getItem(KEY_CLIENTES)) || [],
    setClientes: (lista) =>
        localStorage.setItem(KEY_CLIENTES, JSON.stringify(lista)),

    getServicos: () => JSON.parse(localStorage.getItem(KEY_SERVICOS)) || [],
    setServicos: (lista) =>
        localStorage.setItem(KEY_SERVICOS, JSON.stringify(lista)),
    getAgendamentos: () => JSON.parse(localStorage.getItem(KEY_AGENDAMENTOS)) || [],
    setAgendamentos: (lista) =>
        localStorage.setItem(KEY_AGENDAMENTOS, JSON.stringify(lista)),
};