
import styled from 'styled-components';

export const Header = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 32%);
    background: #008ad6;
    width: 100%;
    padding-right: 3em;
    padding-left: 3em;
    height: 54px;

    @media(max-width: 768px){
        justify-content: center;
        padding-right: 1em;
        padding-left: 1em;
    }
`;

export const PageTitle = styled.h3`
    font-size: 18px;
    line-height: 1.3333333333;
    font-weight: 500;

    @media(max-width: 768px){
        margin-left: auto;
    }
`

export const Notification = styled.div`
    position: relative;

    @media(max-width: 768px){
        margin-left: auto;
    }
`;

export const btnOpenNotification = styled.button`
    background: transparent;
    border: none;

    svg {
        height: 26px;
        width: 26px;
        color: white;
    }
`;