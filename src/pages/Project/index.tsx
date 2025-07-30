import * as S from './styles';

export default function Project() {
  return (
    <S.Container id="projects">
      <S.Header>
        <S.Title>Projetos</S.Title>
      </S.Header>
      <S.Card href="#">
        <S.Project>
          <S.TitleProjeto>Projeto fulano de tal</S.TitleProjeto>
          <S.DescriptionProjeto>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</S.DescriptionProjeto>
        </S.Project>
        <S.Skill>Laravel</S.Skill>
        <S.Skill>React</S.Skill>
      </S.Card>
    </S.Container>
  );
}