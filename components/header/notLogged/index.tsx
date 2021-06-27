import React from 'react';
import * as S from './style';
import { IoIosHelpCircleOutline } from 'react-icons/io';

export default function NotLoggedHeader() {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Container>
          <S.logoTitle> Imeals </S.logoTitle>
          <S.iconHelp> <IoIosHelpCircleOutline size={28}/> </S.iconHelp>
        </S.Container>
      </S.Wrapper>
    </S.Header>
  )
}