import { TableContent, Thead, TableTr, TableTh, TableTd, BtnEdit, BtnDelete, TableTdActions } from './styles';

export const TableRow = () => {

    return (
        <TableTr>
            <TableTd data-label="ID">3412</TableTd>
            <TableTd data-label="Produto">Coca Cola 2 litros</TableTd>
            <TableTd data-label="Preço">R$ 8,00</TableTd>
            <TableTd data-label="Modificado em">04/01/2016</TableTd>
            <TableTdActions >
                <BtnEdit>Editar</BtnEdit>
                <BtnDelete>Excluir</BtnDelete>
            </TableTdActions>
        </TableTr>
    )
};

export default function Table({children}) {
    return (
        <TableContent >
            <Thead>
                <TableTr>
                    <TableTh scope="col">ID</TableTh>
                    <TableTh scope="col">Produto</TableTh>
                    <TableTh scope="col">Preço</TableTh>
                    <TableTh scope="col">Modificado em</TableTh>
                    <TableTh scope="col"></TableTh>
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