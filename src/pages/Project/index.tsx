import Card from '../../components/Card';
import * as S from './styles';

export default function Project() {
  return (
    <S.Container id="projects">
      <S.Header>
        <S.Title>Projetos</S.Title>
      </S.Header>
      <Card />
    </S.Container>
  );
}