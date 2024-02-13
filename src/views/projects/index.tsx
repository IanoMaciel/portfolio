import { Container, ProjectTitle, Content } from './styles';
import { Card } from '../../components/Card';
import { repository } from '../../data/repositorie';

export default function Projects() {
    return (
        <Container>
            <ProjectTitle>
                <h1>Projetos</h1>
                <span>Projetos desenvolvidos individualmente e em conjunto com outros desenvolvedores.</span>
            </ProjectTitle>
            <Content>
                {
                    repository.map(item => (
                        <Card
                            development={item.development}
                            title={item.title}
                            description={item.description}
                            urlImage={item.imageURL}
                            link={item.repositoryURL}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}
