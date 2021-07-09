import { useState, useCallback, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { useAuth } from '@/contexts/auth';
import setMessageLog from "@/services/messagesLogs";
import api from '@/services/api';

export default function PopUpMessages() {
    const router = useRouter();
    const { signed } = useAuth();

    const [status, setStatus] = useState<boolean | number>(false);
    const [messageFormated, setMessageFormated] = useState<string>("");
    const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

    api.interceptors.response.use(
        async function (config) {
            const { messageFormated, redirect } = setMessageLog(`${config.config.url}-${config.status}`, config.data.messageError);
            setStates(messageFormated, redirect, config.status);
            return config;
        }, function (error) {
            return Promise.reject(error);
        }
    );

    const setStates = useCallback((message, redirect, status) => {
        setMessageFormated(message);
        setRedirectUrl(redirect);
        setStatus(status);
    }, []);

    const redirect = useCallback(() => {
        if(redirectUrl) {
            router.push(redirectUrl);
        }

        return setStates("", null, false);

    }, [redirectUrl]);

    useEffect(() => {

        if (router.pathname === "/signin" || router.pathname === "/" && signed) {
            const { messageFormated, redirect } = setMessageLog('userAutenticated', 'Usuário Logado');
            return setStates(messageFormated, redirect, 200);
        }

    }, [signed]);

    return (
        <>
            <ToastContainer position={"top-center"}>
                {
                    status && status < 400 &&
                    toast.success(messageFormated, {
                        autoClose: 5000,
                        toastId: "success-popUp",
                        onClose: redirect
                    })
                }

                {
                    status && status > 400 &&
                    toast.error(messageFormated, {
                        autoClose: 5000,
                        toastId: "error-popUp",
                        onClose: redirect
                    })
                }
            </ToastContainer>

        </>
    )

}