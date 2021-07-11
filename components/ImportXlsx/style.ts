import styled from 'styled-components';
import { StyleDropZone } from './types';

export const SectionDropZone = styled.section`

`;

export const DropZone = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${(props: StyleDropZone) => {
        if(props.isDragActive) return "#009ee3";
        if (props.isDragAccept) return "#00e676";
        if (props.isDragReject) return "#ff377f";
        return 'rgb(176 174 174)';
    }};
    border-style: dashed;
    background-color: rgb(250, 250, 250);
    color: rgb(189, 189, 189);
    font-weight: 600;
    outline: none;
    transition: border 0.24s ease-in-out 0s;
    cursor: pointer;

    & em {
        margin-top: 8px;
    }
`

export const ListFiles = styled.ul`
    margin-top: 12px;
    margin-bottom: 16px;
`

export const LIFile = styled.li`
    font-weight: 600;
    font-size: 14px;
    color: #757474;
    margin-bottom: 6px;

    & span {
        display: block;
    }

    & strong {
        font-weight: 600;
        color: #333;
    }

    & a {
        display: block;
        font-size: 14px;
        font-weight: 600;
        color: #009ee3;
        margin-top: 14px;
    }
`;

export const BtnRegister = styled.button`
    border: none;
    max-width: 11rem;
    width: 100%; 
    background: #4ce03d;
    box-shadow: 0 0.07em 0.125em 0 rgb(0 0 0 / 15%);
    transition: all .3s ease;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    border-radius: 4px;
    padding: 6px 0px;
    color: rgb(255,255,255);
`;