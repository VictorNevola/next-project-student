import styled from 'styled-components';

export const InfosHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    @media(max-width: 768px){
        display: block;
    }
`;

export const SearchDiv = styled.div`
    position: relative;
    max-width: 270px;
    width: 100%;
    border: .0546875em solid #ddd;
    box-shadow: 0 0.07em 0.125em 0 rgb(0 0 0 / 15%);
    background-color: #fff;
    
    @media(max-width: 768px){
        max-width: 100%;
        margin-bottom: 16px;
    }
`;

export const InputSearch = styled.input`
    height: 46px;
    border: none;
    padding: 0 16px;
    padding-right: 36px;
    background: transparent;
    width: 100%;
`

export const IconSearch = styled.span`
    display: block;
    position: absolute;
    pointer-events: none;
    top: 33%;
    right: 16px;

    svg {
        color: rgb(153, 153, 153);
    }
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 310px;
    width: 100%;

    @media(max-width: 768px){
        max-width: 100%;
    }
`;

export const Btn = styled.div`
    display: flex;
    align-items: center;
    background-color: rgba(65,137,230,.15);
    box-shadow: 0 0.07em 0.125em 0 rgb(0 0 0 / 15%);
    height: 46px;
    border: none;
    border-radius: 6px;
    transition: background-color .2s ease-in;

    @media(max-width: 768px){
        width: 44%;
        justify-content: center;
    }

    &:hover {
        background-color: rgba(65,137,230,.2);
    }

    & svg {
        margin-left: 12px;
        width: 18px;
        height: 18px;
    }

    & a {
        display: flex;
        align-items: center;
        color: #009ee3;
        font-weight: 600;
        width: 100%;
        height: 100%;
        padding: 0px 24px;
    }
`;

export const BtnToExport = styled.button`

    display: flex;
    align-items: center;
    color: #009ee3;
    font-weight: 600;
    height: 100%;
    padding: 0px 24px;
    background-color: rgba(65,137,230,.15);
    box-shadow: 0 0.07em 0.125em 0 rgb(0 0 0 / 15%);
    height: 46px;
    border: none;
    border-radius: 6px;
    transition: background-color .2s ease-in;
    cursor: pointer;
    
    @media(max-width: 768px){
        width: 44%;
        justify-content: center;
    }

    &:hover {
        background-color: rgba(65,137,230,.2);
    }

    & svg {
        margin-left: 12px;
        width: 18px;
        height: 18px;
    }


`;

export const Count = styled.small`
    display: block;
    font-size: 14px;
    font-weight: 600;
    line-height: 1em;
    color: #333;
    margin-bottom: 16px;
`;