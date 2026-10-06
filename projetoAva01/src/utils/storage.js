const KEY_CLIENTES = "clientes";
const KEY_SERVICOS = "servicos";

export const storage = {
    getClientes: () => JSON.parse(localStorage.getItem(KEY_CLIENTES)) || [],
    setClientes: (lista) =>
        localStorage.setItem(KEY_CLIENTES, JSON.stringify(lista)),

    getServicos: () => JSON.parse(localStorage.getItem(KEY_SERVICOS)) || [],
    setServicos: (lista) =>
        localStorage.setItem(KEY_SERVICOS, JSON.stringify(lista)),
};