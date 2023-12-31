import { Container, ProjectTitle } from './styles';
import { Card } from '../../components/Card';
import { repository } from '../../data/repositorie';

export default function Projects() {
    return (
        <Container>
            <ProjectTitle>
                <h1>Projetos</h1>
                <span>Projetos desenvolvidos individualmente e em conjunto com outros devs</span>
            </ProjectTitle>

            {repository.map(data => (
                <Card
                    key={data.id}
                    title={data.title}
                    description={data.description}
                    tech={data.tech}
                    link={data.repositoryURL}
                    urlImage={data.imageURL}
                />
            ))}
        </Container>
    );
}
