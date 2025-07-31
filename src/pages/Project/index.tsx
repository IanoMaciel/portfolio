import * as S from './styles';
import Card from '../../components/Card';
import { projectsData } from '../../data/projectData';

export default function Project() {
  return (
    <S.Container id="projects">
      <S.Header>
        <S.Title>Projetos</S.Title>
      </S.Header>
      {projectsData.map((project, index) => (
        <Card
          key={index}
          type={project.type}
          year={project.year}
          title={project.title}
          description={project.description}
          skills={project.skills}
          repositoryLink={project.repositoryLink}
        />
      ))}

    </S.Container>
  );
}