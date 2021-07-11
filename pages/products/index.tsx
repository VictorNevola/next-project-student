import { InfosHeader, SearchDiv, InputSearch, IconSearch, Buttons, Btn, BtnToExport, Count } from "@/styles/pages/products/styles";
import { AiOutlinePlus, AiOutlineExport } from 'react-icons/ai';
import Link from 'next/link';
import Cookies from 'cookies';

import Layout from '@/components/Layout';
import Table from "@/components/TableResponsive";

import api from '@/services/api';
import { PropsPageProducts } from "@/types/products";

const Products = ({ productsInital }: PropsPageProducts) => {


    return (
        <Layout titlePage="Produtos">
            <>
                <InfosHeader>
                    <SearchDiv>
                        <InputSearch placeholder="Buscar..." type="text" />
                        <IconSearch>
                            <svg width="16" height="16"><path d="M16 15.017l-4.88-4.878a6.219 6.219 0 0 0 1.368-3.895C12.488 2.802 9.688 0 6.244 0A6.251 6.251 0 0 0 0 6.245a6.25 6.25 0 0 0 6.244 6.245 6.216 6.216 0 0 0 3.895-1.368L15.017 16l.982-.983zM1.39 6.245c0-2.677 2.177-4.856 4.854-4.856S11.1 3.567 11.1 6.244a4.863 4.863 0 0 1-4.856 4.857 4.862 4.862 0 0 1-4.855-4.857z" fill="#999"></path></svg>
                        </IconSearch>
                    </SearchDiv>

                    <Buttons>

                        <Btn>
                            <Link href="/products/import">
                                <a>
                                    Importar <AiOutlinePlus />
                                </a>
                            </Link>
                        </Btn>

                        <BtnToExport> Exportar <AiOutlineExport /></BtnToExport>
                    </Buttons>
                </InfosHeader>

                <Count>
                    Registrados: {productsInital.length}
                </Count>

                <Table />
            </>
        </Layout>
    )

}

Products.getInitialProps = async ({ req, res }) => {
    const cookies = new Cookies(req, res);
    const authTokem = cookies.get("IMEALS__AUTH");

    const { data } = await api.get('/products/list/1', { headers: { Authorization: `Bearer ${authTokem}` } });

    return {
        productsInital: data
    };
};

export default Products;