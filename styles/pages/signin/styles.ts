import styled from 'styled-components';

export const mainContainer = styled.main`
    max-width: 768px;
    margin: 0 auto;
    padding: 2rem 0px;

    @media(max-width: 768px) {
        padding: 2rem 1rem;
    }
`;

export const FormContainer = styled.section`
    max-width: 26.5rem;
    width: 100%;
    height: auto;
    padding: 18px 18px 22px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    margin: 0 auto;
`;

export const Form = styled.form`
    width: 100%;
`;

export const Title = styled.h1`
    color: rgba(0,0,0,.8);
    font-weight: 600;
    letter-spacing: .0125rem;
    overflow-wrap: break-word;
    font-size: 22px;
    text-align: center;
    line-height: 1.25;
    margin-bottom: 2rem;
`;

export const divInput = styled.div`
    display: block;
    width: 100%;
`

export const titleInput = styled.span`
    display: block;
    font-size: 18px;
    color: #515050;
`

export const infoSmall = styled.small`
    font-size: 12px;
`

export const input = styled.div`
    height: 72px;
    & input {
        border: none;
        background-color: transparent;
        border-bottom: 1px solid #0000001a;
        margin: 8px 0px;
        width: 100%;
        padding: 8px 0px;
        transition: all .4s ease;
        outline: none;
        &:focus {
            border-bottom: 2px solid #009ee3;
        }
    }
`
export const infoError = styled.span`
    display: block;
    font-size: 14px;
    line-height: 8px;
    color: #f04449;
    height: 14px;
`

export const loaderContainer = styled.div`
    display: inline-block;
    border-radius: 4px;
    padding: 14px 32px;
    background-color: #4189e680;
    transition: all .4s ease;
    width: 100%;
    text-align: center;

    & > div {
        margin: 0 auto;
    }
`

export const btnSubmit = styled.input`
    display: block;
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    padding: 14px 32px;
    text-align: center;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: #4189e642;
    box-shadow: 0 0.07em 0.125em 0 rgb(0 0 0 / 15%);
    color: #009ee3;
    width: 100%;
`;

export const infoLinksBottom = styled.div`
    color: #515050a1;
    line-height: 1.25;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: .0125rem;
    margin-top: 1.4rem;
`;

export const linkBottom = styled.a`
    display: block;
    color: #515050a1;
    margin-top: 16px;
    font-weight: 500;
    letter-spacing: .0125rem;
    overflow-wrap: break-word;
    font-size: 16px;
    text-align: center;
    line-height: 1.25;
    transition: all .3s ease;
    color: #009ee3;
    &:hover {
        color: #000000cc;
        font-weight: 600;
    }
`

export const ErrorAuth = styled.div`
    margin-bottom: 12px;

    & span {
        font-weight: 600;
    }
`