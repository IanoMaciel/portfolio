import { Container, Information, ImageProject } from './styles';

interface ICardRequest {
    title: string;
    description: string;
    tech: string;
    link: string;
    urlImage: string;
}

export function Card({ title, description, tech, link, urlImage }: ICardRequest) {
    return (
        <Container>
            <Information>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{tech}</p>
                <a href={link} target="_blank">
                    Acesse o repositório aqui
                </a>
            </Information>

            <ImageProject>
                <img src={urlImage} alt="image" />
            </ImageProject>
        </Container>
    );
}
