import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    overflow-x: hidden;
`;

export const Content = styled.section`
    width: calc(100% - 256px);

    @media(max-width: 768px){
        width: 100%
    }
`;

export const Page = styled.section`
    padding: 26px 0px;
    padding-right: 3em;
    padding-left: 3em;
    width: 100%;
    height: calc(100vh - 54px);
    overflow-y: auto;

    @media(max-width: 768px){
        padding-right: 1em;
        padding-left: 1em;
    }
`;
