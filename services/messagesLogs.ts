export default async function setMessageLog(urlWithStatus: string, message: string): Promise<{ messageFormated: string, redirect: null | string }> {

    const handlerMessage = {
        '/userpj/authenticate-401': { messageFormated: "Usuário ou senha incorretos", redirect: null },
        '/userpj/authenticate-200': { messageFormated: "Autenticado com Sucesso!", redirect: '/admin' },
        default: { messageFormated: message, redirect: null }
    }

    return handlerMessage[urlWithStatus] || handlerMessage['default'];
}