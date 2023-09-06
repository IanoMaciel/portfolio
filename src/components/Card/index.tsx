import { Container, Information } from './styles';

interface ICardRequest {
    title: string;
    description: string;
    techStack: string;
    link: string;
    urlImage: string;
}

export function Card({ title, description, techStack, link, urlImage }: ICardRequest) {
    return (
        <Container>
            <Information>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{techStack}</p>
                <a href={link}>Acesse o repositório aqui</a>
            </Information>
            <img src={urlImage} alt="image" />
        </Container>
    );
}
