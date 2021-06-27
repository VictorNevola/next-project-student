import { createContext, useState, useEffect, useContext } from 'react';
import { setCookie, captureCookie } from '@/resources/cookies';
import { api } from '@/services/api';
import { DataPayloadAutenticateUSer, User, AuthContextData } from './types';


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storagedUser = captureCookie("IMEALS_USER");
        const storagedToken = captureCookie("IMEALS__AUTH");

        if (storagedToken && storagedUser) {
            setUser(JSON.parse(storagedUser));
            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }

        setIsLoading(false);

    }, []);

    async function Login(userData: DataPayloadAutenticateUSer) {
        const isAuthenticate = await api.post('/userpj/authenticate', userData);

        if (isAuthenticate && isAuthenticate.status !== 401) {
            setCookie("IMEALS__AUTH", isAuthenticate.data.token.value, isAuthenticate.data.token.expireTime);
            setCookie("IMEALS_USER", JSON.stringify(isAuthenticate.data.user), isAuthenticate.data.token.expireTime);
        }

        return isAuthenticate;
    };

    function Logout() {
        setUser(null);
        setCookie("IMEALS_USER", '', '-99999999');
        setCookie("IMEALS_AUTH", '', '-99999999');
    }

    return (
        <AuthContext.Provider
            value={{
                signed: Boolean(user),
                user,
                Login,
                Logout,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}