import styled from 'styled-components';
import { MenuDropDown } from '../types';

export const Item = styled.li`
    position: relative;
    transition: all .3s ease;    
    padding: 16px 1rem;

    svg {
        display: block;
        height: 24px;
        width: 24px;
        margin: 0 16px 0 0;

        path {
            transition: all .3s ease;
        }
    };

    a {
        display: flex;
        align-items: center;
        width: 100%;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.2em;
        color: #333;
        transition: all .3s ease;


        &:hover {
            color: #009ee3;
        }
    }
`;

export const HR = styled.hr`
    height: .0625em;
    border: 0;
    background-color: rgba(0,0,0,.1);
`;

export const DropDownIcon = styled.span`
    
    position: absolute;
    right: 12px;
    width: 1em;
    margin: .25em;

    &:before {
        content: "";
        position: absolute;
        width: .5em;
        height: .0625em;
        background: rgba(0,0,0,.45);
        transform: ${({ isActive }: MenuDropDown) => isActive ? "rotate(45deg)" : "rotate(-45deg)"};
        margin-left: .375em;
        transition: transform .26s ease-out;
    }

    &:after{
        content: "";
        position: absolute;
        width: .5em;
        height: .0625em;
        background: rgba(0,0,0,.45);
        transform: ${({ isActive }: MenuDropDown) => isActive ? "rotate(-45deg)" : "rotate(45deg)"};
        transition: transform .26s ease-out,-webkit-transform .26s ease-out;
    }

`;

export const ListDropDown = styled.ul`
    transition: all .3s ease-in;
    max-height: ${({ isActive }: MenuDropDown) => isActive ? "10000rem" : "0px"};
    opacity: ${({ isActive }: MenuDropDown) => isActive ? "1" : "0"};
    overflow: hidden;
`;

export const ItemDropdown = styled.li`
    transition: all .3s ease;
    padding-top: 14px;

    a {
        padding-left: 2.6rem;
    }
`;

export const OpenDropdown = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 1em;
    color: #333;
    transition: all .3s ease;
    cursor: pointer;
`;

export const ALink = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 1em;
    color: #333;
    transition: all .3s ease;
    svg {   
        display: block;
        height: 24px;
        width: 24px;
        margin: 0 16px 0 0;

        path {
            transition: all .3s ease;
        }
    };

    &.is-active {        
        color: #009ee3;

        svg {
            path {
                fill: #009ee3;
                fill-opacity: 1;
            }
        }
    }
`;