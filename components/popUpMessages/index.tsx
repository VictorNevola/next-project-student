import { useState, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import setMessageLog from "@/services/messagesLogs";
import api from '@/services/api';

export default function PopUpMessages() {
    const [status, setStatus] = useState<boolean | number>(false);
    const [messageFormated, setMessageFormated] = useState<string>("");
    const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
    const router = useRouter();

    api.interceptors.response.use(
        async function (config) {
            const { messageFormated, redirect } = await setMessageLog(`${config.config.url}-${config.status}`, config.data.messageError);
            setMessageFormated(messageFormated);
            setRedirectUrl(redirect);
            setStatus(config.status);

            return config;
        }, function (error) {
            return Promise.reject(error);
        }
    );

    const redirect = useCallback(() => redirectUrl && router.push(redirectUrl), [redirectUrl]);

    return (
        <>
            <ToastContainer position={"top-center"}>
                {
                    status && status < 400 &&
                    toast.success(messageFormated,{
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