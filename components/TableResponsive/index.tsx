import { TableContent, Thead, TableTr, TableTh } from './styles';
import { PropsTable, PropsTableRow } from "./types";


export const TableRow = ({ children }: PropsTableRow) => {

    return (
        <TableTr>
            {
                children
            }
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