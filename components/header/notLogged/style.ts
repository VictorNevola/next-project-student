import styled from 'styled-components';

export const Header = styled.header`
    display: block;
    background-color: #008ad6;
    padding: 6px 0px;
    box-shadow: 0 2px 4px 0 rgb(155 169 187 / 30%);
`;

export const Wrapper = styled.section`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const logoTitle = styled.a`
    font-weight: bold;
    font-size: 28px;
    line-height: 48px;
    color: #ffffff;
`

export const iconHelp = styled.a `
    display: flex;
    align-items: center;
    color: #ffffff
`