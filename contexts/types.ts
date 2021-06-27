import { AxiosResponse } from 'axios';

export interface DataPayloadAutenticateUSer {
    userEmailOrCnpj: string,
    password: string
}

export interface User {
    cnpj: string,
    companyName: string,
    email: string,
    name: string,
    phone: string,
}

export interface IautenticateUser {
    user: any
}

export interface AuthContextData {
    signed: boolean;
    user: User | null;
    isLoading: boolean;
    Login(user: object): Promise<AxiosResponse<IautenticateUser>>;
    Logout(): void;
}