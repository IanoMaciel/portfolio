import * as S from './styles';
import { SiGithub } from "react-icons/si";

interface ICardRequest {
    development: string;
    title: string;
    description: string;
    link: string;
    urlImage: string;
}

export function Card({ development, title, description, link, urlImage }: ICardRequest) {
    return (
        <S.Container>
            <S.Title>
                <h2>{development}</h2>
                <h1>{title}</h1>
                <p>{description}</p>
            </S.Title>

            <S.Image>
                <img src={urlImage} />
            </S.Image>



            <S.Link href={link} target="_blanck">
                <SiGithub />Repositório
            </S.Link>
        </S.Container>
    );
}
