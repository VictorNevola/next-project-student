import styled from 'styled-components';
import { MenuAsideMobile } from './types';

export const AsideMenu = styled.aside`
    position: relative;
    border-right: 1px solid rgba(0,0,0,.1);
    background: #eee;
    min-width: 256px;
    transition: all .3s ease;

    @media(max-width: 768px){
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        min-width: auto;
        width: 100%;
        border-right: none;
        z-index: ${({ isActive }:MenuAsideMobile) => isActive ? "1" : "0" };
        opacity: ${({ isActive }:MenuAsideMobile) => isActive ? "1" : "0" };
        transform: ${({ isActive }:MenuAsideMobile) => isActive ? "translateX(0px)" : "translateX(-280px)" };
        pointer-events: ${({ isActive }:MenuAsideMobile) => isActive ? "auto" : "none" };
    }
`;

export const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    align-items: center;
    padding: 1rem;
    background-color: #008ad6;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 32%);
    height: 54px;
`;

export const Avatar = styled.div`
    margin-right: 6px;
    svg {
        height: 32px;
        width: 32px;
    }
`;

export const Name = styled.h3`
    font-size: 16px;
    line-height: 1.3333333333;
    font-weight: 400;
    color: #fff;
`;

export const List = styled.ul`
    height: calc(100vh - 54px);
    overflow-x: hidden;
    overflow-y: auto;
`;

export const BtnOpenMenu = styled.button`
    display: none;

    svg {
        height: 26px;
        width: 26px;
    }

    @media(max-width: 768px){
        display: flex;
        align-items: center;
        position: absolute;
        z-index: 1;
        height: 54px;
        padding-left: 1em;
        background: transparent;
        border: none;
    }
`

export const BtnCloseMenu = styled.button`
    display: none;


    svg {
        height: 22px;
        width: 22px;
    }

    @media(max-width: 768px){
        display: flex;
        align-items: center;
        z-index: 1;
        height: 54px;
        padding-right: 1em;
        background: transparent;
        border: none;
    }
`
