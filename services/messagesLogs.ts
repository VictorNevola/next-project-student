export default function setMessageLog(urlWithStatus: string, message: string): { messageFormated: string, redirect: null | string } {

    const handlerMessage = {
        '/userpj/authenticate-401': { messageFormated: "Usuário ou senha incorretos", redirect: null },
        '/userpj/authenticate-200': { messageFormated: "Autenticado com Sucesso!", redirect: '/admin' },
        '/userpj/register-201': { messageFormated: "Registrado com sucesso!", redirect: '/signin' },
        '/userpj/register-409': { messageFormated: "Já existe um registro com esse CNPJ", redirect: null },
        'userAutenticated': { messageFormated: "Usuário Logado", redirect: '/admin' },
        default: { messageFormated: message, redirect: null }
    }

    return handlerMessage[urlWithStatus] || handlerMessage['default'];
}