import styled from 'styled-components';

export const mainContainer = styled.main`
    max-width: 768px;
    margin: 0 auto;
    padding: 2rem 0px;

    @media(max-width: 768px) {
        padding: 2rem 1rem;
    }
`

export const h1 = styled.h1`
    font-size: 24px;
    font-weight: 600;
    color: #333;
`;

export const form = styled.form`
    margin: 32px 0;
`;

export const formFields = styled.div`
    padding: 18px 18px 22px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    margin-bottom: 32px;
`;

export const formRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 700px){
        display: block
    }
`;

export const divInput = styled.div`
    display: block;
    width: 50%;

    @media(max-width: 700px){
        width: 100%;
    }
`;

export const titleInput = styled.span`
    display: block;
    font-size: 18px;
    color: #808080;
`;

export const infoSmall = styled.small`
    font-size: 12px;
`;

export const input = styled.div`
    margin-right: 35px;
    height: 72px;
    & input {
        border: none;
        background-color: transparent;
        border-bottom: 1px solid #0000001a;
        margin: 8px 0px;
        width: 100%;
        padding: 8px 0px;
        outline: none;
        transition: all .3s ease;
        outline: none;
        &:focus {
            border-bottom: 2px solid #009ee3;
        }
    }

`;

export const infoError = styled.span`
    display: block;
    font-size: 14px;
    line-height: 8px;
    color: #f04449;
    height: 14px;
    transition: all .3s ease;
`;

export const infoDropZone = styled.em `
    margin-bottom: 14px;

`;

export const previewLogo = styled.div `
    display: block;
    transition: all .24s ease-in-out;
    text-align: center;
    margin-top: 24px;

    & img {
        width: 150px
    }

`;

export const btnSubmit = styled.input `
    display: block;
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
    padding: 14px 32px;
    text-align: center;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: rgb(65 137 230 / 28%);
    box-shadow: 0 0.07em 0.125em 0 rgb(0 0 0 / 15%);
    height: 46px;
    color: #009ee3;
    font-weight: 600;
    border: none;
    padding: 0px 24px;
    border-radius: 6px;

`;

export const loaderContainer = styled.div`
    display: inline-block;
    border-radius: 4px;
    padding: 14px 32px;
    background-color: #4189e680;
    transition: all .4s ease;
`;

export const SpanLink = styled.span`
    display: block;
    font-weight: 600;
    color: #808080;
    margin-top: 14px;    
`;

export const Alink = styled.a`
    display: inline;
    margin-left: 5px;
    color: #009ee3;
    
`;