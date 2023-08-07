import { Container, ContactContent, Contact, LinkContact } from './styles';
import {
    AiOutlineInstagram,
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineMail,
} from 'react-icons/ai';

export default function About() {
    return (
        <Container>
            <h1>Olá, meu nome é Iano Maciel :)</h1>
            <span>Engenheiro de Software | Desenvolvedor de Software</span>

            <p>
                Sou formado em Engenharia de Software pelo Instituto de Ciências Exatas e Tecnologia
                da Universidade Federal do Amazonas (ICET/UFAM). Tenho um forte interesse em
                desenvolver software tanto para a web como para dispositivos móveis. Minha
                experiência abrange diversas habilidades, como JavaScript moderno, NodeJs,
                TypeScript, React, React Native, criação de Rest APIs e o uso de Git e GitHub. Estou
                entusiasmado em aplicar meus conhecimentos e contribuir em projetos inovadores
                nesses campos.
            </p>

            <p>
                Em 2022, tive a oportunidade de atuar como bolsista no Projeto Super, uma iniciativa
                de Pesquisa, Desenvolvimento e Inovação (PD&I) em colaboração entre a UFAM e a
                Samsung. Nesse projeto, dediquei-me à área da Engenharia de Software, com foco na
                Gerência de Configuração de Software. Atualmente, atuo como desenvolvedor de
                software da empresa 7FACILE, onde trabalho com as linguagens de programação Java e
                PHP.
            </p>

            <p>
                Minha paixão pelo desenvolvimento de software está presente desde a concepção da
                ideia até a entrega do produto final. Me preocupo com todo o escopo do projeto,
                desde a modelagem de dados e arquitetura de sistema até o trabalho de
                desenvolvimento back-end e front-end.
            </p>

            <ContactContent>
                <h1>Contato</h1>

                <p>Se você deseja entrar em contato comigo, pode me encontrar em:</p>

                <Contact>
                    <LinkContact href="https://www.linkedin.com/in/iano-maciel-52a7401ba/">
                        <AiOutlineLinkedin />
                        iano-maciel-52a7401ba
                    </LinkContact>
                    <LinkContact href="https://github.com/IanoMaciel">
                        <AiOutlineGithub />
                        IanoMaciel
                    </LinkContact>
                    <LinkContact href="https://www.instagram.com/ianooo_/">
                        <AiOutlineInstagram />
                        ianooo_
                    </LinkContact>
                    <LinkContact href="#">
                        <AiOutlineMail />
                        ianomaciel685@icloud.com
                    </LinkContact>
                </Contact>
            </ContactContent>
        </Container>
    );
}
