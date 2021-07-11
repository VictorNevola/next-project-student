import { TableContent, Thead, TableTr, TableTh, TableTd, BtnViewMore, TableTdActions } from './styles';
import Image from 'next/image';
import Link from 'next/link';
import { PropsTable, PropsTableRow } from "./types";

const myLoaderImagem = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const setElementToRender = (label, index, values) => {

    switch (label) {
        case "Imagem":
            return (
                <TableTd data-label={label} key={index}>
                    <Image
                        loader={myLoaderImagem}
                        src={values[index]}
                        alt={values["name"]}
                        width={60}
                        height={60}
                    />
                </TableTd>
            )
        case "Modificado Em":
            return (
                <TableTd data-label={label} key={index}> 
                    {
                        new Date(values[index]).toLocaleString()
                    }
                </TableTd>
            )
        default:
            return <TableTd data-label={label} key={index}> {values[index]} </TableTd>
    }
}

export const TableRow = ({ labels, values }: PropsTableRow) => {
    return (
        <TableTr>
            {
                labels.map((label, index) => {
                    return (
                        setElementToRender(label, index, values)
                    )
                })
            }

            <TableTdActions> 
                <Link href="/">
                    <BtnViewMore> 
                        + Detalhes
                    </BtnViewMore> 
                </Link>
            </TableTdActions>

        </TableTr>
    )
};

export default function Table({ children, headers }: PropsTable) {
    return (
        <TableContent >
            <Thead>
                <TableTr>
                    {
                        headers.map((name, index) => {
                            return (
                                <TableTh scope="col" key={index}>{name}</TableTh>
                            )
                        })
                    }
                </TableTr>
            </Thead>

            <tbody>
                {
                    children
                }
            </tbody>
        </TableContent>
    )
}