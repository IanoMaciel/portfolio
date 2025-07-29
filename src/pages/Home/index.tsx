import { CodeIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, PaperPlaneTiltIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import * as S from "./styles";

export default function Home() {
    return (
        <S.Container id="home">
            <S.Information>
                <S.Title>Desenvolvedor de Software</S.Title>
                <S.Subtitle>Olá! Meu nome é Iano Maciel. Seja bem-vindo ao meu portfólio.</S.Subtitle>
                <S.Social>
                    <S.LinkSocial href="#"><LinkedinLogoIcon size={24} weight="fill" /></S.LinkSocial>
                    <S.LinkSocial href="#"><GithubLogoIcon size={24} weight="fill" /></S.LinkSocial>
                    <S.LinkSocial href="#"><InstagramLogoIcon size={24} weight="fill" /></S.LinkSocial>
                    <S.LinkSocial href="#"><WhatsappLogoIcon size={24} weight="fill" /></S.LinkSocial>
                </S.Social>
                <S.Action>
                    <S.LinkContact href="#contact">
                        <PaperPlaneTiltIcon size={24} />
                        Entre em contato
                    </S.LinkContact>
                    <S.LinkProject href="#project">
                        <CodeIcon size={24} />
                        Ver projetos
                    </S.LinkProject>
                </S.Action>
            </S.Information>
            <S.Profile>
                <h1>aaaa</h1>
            </S.Profile>
        </S.Container>
    );
}