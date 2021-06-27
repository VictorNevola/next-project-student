import * as S from '@/styles/pages/signup/styles';
import { useState, useRef, useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import InputMask from 'react-input-mask';
import ReactLoading from 'react-loading';
import Link from 'next/link';

import { api } from '@/services/api';

import NotLoggedHeader from '@/components/header/notLogged';
import cnpjValidation from '@/resources/validatorCnpj';
import encrypts from '@/resources/cryptr';

type Inputs = {
    [x: string]: string,
};

export default function SignUp() {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [cnpjInvalid, setCnpjInvalid] = useState(false);
    const [loaderActive, setLoaderActive] = useState(false);

    const onSubmit = async (data) => {
        setLoaderActive(true);
        const cnpjIsValid = cnpjValidation(data.cnpj);

        if (cnpjIsValid) {
            setCnpjInvalid(false);
            data.password = await encrypts(data.password);
            const userCreated = await api.post('/userpj/register', data);

            if (userCreated && userCreated.status === 201)
                toast.success("Registrado com sucesso!", {
                    autoClose: 5000,
                    toastId: "userSignUP",
                    onClose: () => window.location.pathname = "/signin"
                });

            if (userCreated && userCreated.status === 409) toast.error("Já existe um registro com esse CNPJ", { autoClose: 5000, toastId: "userSignUP", });

            return setLoaderActive(false);
        };

        return setCnpjInvalid(true);

    }

    return (
        <>
            <NotLoggedHeader />
            <S.mainContainer>
                <S.h1>Insira os dados da sua Empresa</S.h1>

                <S.form onSubmit={handleSubmit(onSubmit)}>
                    <S.formFields>

                        <S.formRow>
                            <S.divInput>
                                <S.titleInput> CNPJ  </S.titleInput>
                                <S.input>
                                    <InputMask
                                        {...register("cnpj", { required: true, maxLength: 18, min: 18, pattern: /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/ })}
                                        alwaysShowMask={false}
                                        placeholder="00.00.000/0000.00"
                                        mask="99.999.999/9999-99"
                                        maskChar={null}
                                        name="cnpj"
                                    />
                                    {errors.cnpj?.type == "required" && <S.infoError>Obrigatório</S.infoError>}
                                    {errors.cnpj?.type == "pattern" || cnpjInvalid && <S.infoError>Inválido</S.infoError>}
                                </S.input>
                            </S.divInput>

                            <S.divInput>
                                <S.titleInput> Razão Social  </S.titleInput>
                                <S.input>
                                    <InputMask
                                        {...register("companyName", { required: true })}
                                        alwaysShowMask={false}
                                        mask=""
                                        maskChar={null}
                                        name="companyName"
                                        placeholder="Imeals - LTDA"
                                    />
                                    {errors.companyName?.type == "required" && <S.infoError>Obrigatório</S.infoError>}
                                </S.input>
                            </S.divInput>
                        </S.formRow>

                        <S.formRow>

                            <S.divInput>
                                <S.titleInput> Telefone  </S.titleInput>

                                <S.input>
                                    <InputMask
                                        {...register("phone", { required: true, maxLength: 18, min: 18, pattern: /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/ })}
                                        alwaysShowMask={false}
                                        placeholder="(00) 00000-0000"
                                        mask="(99) 99999-9999"
                                        maskChar={null}
                                        name="phone"
                                        type="phone"
                                    />
                                    {errors.phone?.type == "required" && <S.infoError>Obrigatório</S.infoError>}
                                    {errors.phone?.type == "pattern" && <S.infoError>Inválido</S.infoError>}
                                </S.input>

                            </S.divInput>

                            <S.divInput>
                                <S.titleInput> Email Principal  </S.titleInput>

                                <S.input>
                                    <InputMask
                                        {...register("email", { required: true, pattern: /^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/ })}
                                        mask=""
                                        maskChar={null}
                                        name="email"
                                        type="email"
                                        placeholder="imeals@exemplo.com"
                                    />
                                    {errors.email?.type == "required" && <S.infoError>Obrigatório</S.infoError>}
                                    {errors.email?.type == "pattern" && <S.infoError>Inválido</S.infoError>}
                                </S.input>

                            </S.divInput>

                        </S.formRow>

                        <S.formRow>

                            <S.divInput>
                                <S.titleInput> Nome Responsavel</S.titleInput>

                                <S.input>
                                    <InputMask
                                        {...register("name", { required: true })}
                                        mask=""
                                        maskChar={null}
                                        name="name"
                                        type="text"
                                    />
                                    {errors.name?.type == "required" && <S.infoError>Obrigatório</S.infoError>}
                                </S.input>

                            </S.divInput>

                            <S.divInput>
                                <S.titleInput> Nova Senha  </S.titleInput>

                                <S.input>
                                    <InputMask
                                        {...register("password", { required: true })}
                                        mask=""
                                        maskChar={null}
                                        name="password"
                                        type="password"
                                    />
                                    {errors.password?.type == "required" && <S.infoError>Obrigatório</S.infoError>}
                                </S.input>

                            </S.divInput>

                        </S.formRow>

                    </S.formFields>

                    {
                        loaderActive ?
                            <S.loaderContainer>
                                <ReactLoading type="spokes" height="32px" width="32px" />
                            </S.loaderContainer>
                            :
                            <S.btnSubmit type="submit" value='Cadastrar' />
                    }

                    <S.SpanLink>
                        Já possui cadastro ?

                        <Link href="/signin">
                            <S.Alink>
                                Acessar minha conta
                            </S.Alink>
                        </Link>
                    </S.SpanLink>

                </S.form>

            </S.mainContainer>

        </>
    )
}