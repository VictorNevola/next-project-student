import styled from 'styled-components'

export const TableContent = styled.table`
    box-shadow: 0 8px 16px 0 rgb(0 0 0 / 10%);
    background-color: #ffff;
    border-collapse: collapse;
    border-radius: 4px;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
`;

export const Thead = styled.thead`
    @media(max-width: 1150px) {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
`

export const Caption = styled.caption`
    font-size: 1.5em;
    margin: .5em 0 .75em;

    @media(max-width: 1150px) {
        font-size: 1.3em;
    }
`
export const TableTr = styled.tr`
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding: .35em;

    @media(max-width: 1150px) {
        border-bottom: 3px solid #ddd;
        display: block;
    }
`
export const TableTh = styled.th`
    padding: .625em;
    text-align: center;
    font-size: .85em;
    color: #333;
    letter-spacing: .1em;
    text-transform: uppercase;
`
export const TableTd = styled.td`
    padding: .625em;
    text-align: center;

    @media(max-width: 1150px) {
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: .8em;
        text-align: right;

        &::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }

        &:last-child {
            border-bottom: 0;
            text-align: center;
        }
    }
`

export const TableTdActions = styled.td`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .625em;
    text-align: center;

    & button {
        display: block;
        border: none;
        font-weight: 600;
        padding: 8px;
        border-radius: 4px;
        max-width: 4.375rem;
        width: 100%;
        margin: 0 12px;

        @media(max-width: 1150px) {
            max-width: 44%;
        }
    }

`

export const BtnEdit = styled.button`
    background-color: rgba(65,137,230,.15);
    color: #009ee3;
`;

export const BtnDelete = styled.button`
    background-color: #ec0000b0;
    color: #333;
`;
