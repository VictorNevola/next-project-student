import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/auth";

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const { isLoading, signed } = useAuth();
        const [verified, setVerified] = useState(false);

        useEffect(() => {

            if(!isLoading && !signed) router.replace('/signin');

            if(!isLoading && signed) {
                setVerified(signed);
            }

        }, [isLoading, signed]);

        if(verified){
            return <WrappedComponent {...props} />;
        }else {
            return <h1>Carregando...</h1>;
        }

    };
}

export default withAuth;