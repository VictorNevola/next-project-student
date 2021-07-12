import { InfosHeader, SearchDiv, InputSearch, IconSearch, Buttons, Btn, BtnToExport, Count } from "@/styles/pages/products/styles";
import { useCallback, useState } from "react";
import { AiOutlinePlus, AiOutlineExport } from 'react-icons/ai';
import InfiniteScroll from "react-infinite-scroll-component";
import Link from 'next/link';
import Image from 'next/image';
import cookies from 'next-cookies';

import Layout from '@/components/Layout';
import Table, { TableRow } from "@/components/TableResponsive";

import api from '@/services/api';
import { PropsPageProducts } from "@/types/products";

const Products = ({ productsInital, totalProducts }: PropsPageProducts) => {

    const [productsToRender, setProducts] = useState(productsInital);
    const [pageListProduct, setPageListProduct]  = useState(1);
    const [hasmore, setHasMore] = useState(totalProducts > productsToRender.length);
    const labelsForTable = ["ID", "Imagem", "Produto", "Modificado Em", "Rank"];

    const fetchMoreProducts = useCallback( async ()=> {
        const pagePagination = pageListProduct + 1;
        const { data: { products, totalProducts } } = await api.get(`/products/list/${pagePagination}`);
        const listProductsAtt = [...productsToRender, ...products];
    
        setProducts(listProductsAtt);
        setHasMore(totalProducts > productsToRender.length);
        setPageListProduct(pagePagination); 

    }, [pageListProduct]);

    const loaderImage = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

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
                    Registrados: {totalProducts}
                </Count>
                
                <InfiniteScroll
                        dataLength={productsToRender.length}
                        next={fetchMoreProducts}
                        hasMore={hasmore}
                        height={600}
                        loader={<h4>Carregando...</h4>}
                    >   
                        <Table headers={labelsForTable}> 
                            <>
                                {productsToRender.map((product, index) => {
                                    const { idClient, urlImage, name, modifiedAt, uniqueID } = product;

                                    return (
                                        <TableRow key={index}> 
                                            <>
                                                <td data-label="ID"> {idClient} </td>
                                                <td data-label="Imagem">
                                                    {
                                                        <Image
                                                            loader={loaderImage}
                                                            src={urlImage}
                                                            alt={name}
                                                            width={60}
                                                            height={60}
                                                        />
                                                    }
                                                </td>
                                                <td data-label="Produto"> {name} </td>
                                                <td data-label="Modificado Em">{ new Date(modifiedAt).toLocaleString()} </td>
                                                <td data-label="Rank"> {1} </td>
                                                <td id="actions">
                                                    <Link href={`/products/${uniqueID}`}>
                                                        <a>
                                                            + detalhes
                                                        </a> 
                                                    </Link>
                                                </td>
                                            </>
                                        </TableRow>
                                    );
                                })}
                            </>
                        </Table>

                </InfiniteScroll>
            </>
        </Layout>
    )

}

Products.getInitialProps = async (ctx) => {
    const authTokem = cookies(ctx).IMEALS__AUTH || '';
    const { data: { products, totalProducts } } = await api.get('/products/list/1', { headers: { Authorization: `Bearer ${authTokem}` } });

    return {
        productsInital: products || [],
        totalProducts
    };

};

export default Products;