import styled from 'styled-components';

export const InfoSmall = styled.small`
    display: block;
    font-size: 14px;
    font-weight: 600;
    line-height: 1em;
    color: #333;
    margin-bottom: 6px;
`;

export const InfosHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    @media(max-width: 768px){
        display: block;
    }
`;

export const InfoDetails = styled.em`
    display: block;
    font-size: 14px;
    color: gray;
    font-weight: 600;
    font-style: normal;
    margin-bottom: 7px;
`;

export const LinkExemple = styled.a`
    display: block;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 600;
    color: #0085ff;
`;

export const Close = styled.button`
    position: absolute;
    background: transparent;
    top: 7px;
    right: 8px;
    border: none;
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
