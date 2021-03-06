import * as S from "@/styles/pages/signin/styles";
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import ReactLoading from 'react-loading';
import Link from 'next/link';


import { useAuth } from '@/contexts/auth';

import NotLoggedHeader from '@/components/header/notLogged';

import cnpjValidation from '@/resources/validatorCnpj';
import emailValidator from '@/resources/validatorEmail';
import encrypts from "@/resources/cryptr";

type Inputs = {
    password: string,
    emailOrCnpj: string,
};

export default function SignIn() {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [errorUser, setErrorUser] = useState(false);
    const [loaderActive, setLoaderActive] = useState(false);
    const { Login } = useAuth();

    const onSubmit: SubmitHandler<Inputs> = async data => {

        const isCnpj = cnpjValidation(data.emailOrCnpj);
        const isEmail = emailValidator(data.emailOrCnpj);

        if (isCnpj || isEmail) {
            setLoaderActive(true);

            const payload = {
                userEmailOrCnpj: data.emailOrCnpj,
                password: await encrypts(data.password)
            };

            const isAuthenticated = await Login(payload);

            if (isAuthenticated && isAuthenticated.status === 200) return setLoaderActive(false);

            setLoaderActive(false);
            setErrorUser(false);
        }

        return setErrorUser(true);

    };

    return (
        <>
            <NotLoggedHeader />
            <S.mainContainer>
                <S.FormContainer>
                    <S.Form onSubmit={handleSubmit(onSubmit)}>
                        <S.Title>
                            Olá! Para continuar na sua conta, insira seus dados abaixo
                        </S.Title>

                        <S.divInput>
                            <S.input>
                                <input name="emailOrCnpj" placeholder="EMAIL OU CNPJ" {...register("emailOrCnpj", { required: true })} />

                                {errors.emailOrCnpj?.type == "required" && <S.infoError>Obrigatório</S.infoError>}
                                {errorUser && <S.infoError>E-mail ou Cnpj inválido</S.infoError>}
                            </S.input>
                        </S.divInput>

                        <S.divInput>
                            <S.input>
                                <input name="password" type="password" placeholder="SENHA" {...register("password", { required: true })} />

                                {errors.password?.type == "required" && <S.infoError>Obrigatório</S.infoError>}
                            </S.input>
                        </S.divInput>

                        {
                            loaderActive ?
                                <S.loaderContainer>
                                    <ReactLoading type="spokes" height="32px" width="32px" />
                                </S.loaderContainer>
                                :
                                <S.btnSubmit type="submit" value='Continuar' />
                        }

                        <S.infoLinksBottom>

                            <Link href="/signup">
                                <S.linkBottom>
                                    Criar conta
                                </S.linkBottom>
                            </Link>


                            <Link href="/forgetPassword">
                                <S.linkBottom>
                                    Não sei minha senha
                                </S.linkBottom>
                            </Link>

                        </S.infoLinksBottom>

                    </S.Form>
                </S.FormContainer>
            </S.mainContainer>
        </>
    );
}