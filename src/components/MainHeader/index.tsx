import * as S from './styles';

export function MainHeader() {
  return (
    <S.Container>
      <S.Image src="https://www.logo.wine/a/logo/Laravel/Laravel-Logo.wine.svg" alt="Laravel Logo" style={{ width: '100px', height: 'auto' }} />

      <S.Nav>
        <S.Link href="#home">Início</S.Link>
        <S.Link href="#aboutme">Sobre Mim</S.Link>
        <S.Link href="#projects">Projetos</S.Link>
        <S.Link href="#projects">Contato</S.Link>
      </S.Nav>

      <S.ButtonChangeLanguage>EN</S.ButtonChangeLanguage>
    </S.Container>
  );
}