import { Container, Contact, ContactLink, LinkContact, ContactImage } from './styles';
import {
    AiOutlineInstagram,
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineMail,
} from 'react-icons/ai';

export default function About() {
    return (
        <Container>
            <h1>Olá, meu nome é Iano Maciel</h1>
            <span>Engenheiro de Software | Desenvolvedor de Software | Pesquisador</span>

            <p>
                Olá! Sou um Engenheiro de Software formado pelo{' '}
                <a
                    href="https://icet.ufam.edu.br/ensino/graduacao/engenharia-de-software/"
                    target="_blank"
                >
                    Instituto de Ciências Exatas e Tecnologia (ICET)
                </a>{' '}
                da Universidade Federal do Amazonas (UFAM). Possuo um profundo interesse em
                desenvolver software tanto para a web quanto para dispositivos móveis. Minha
                trajetória abrange uma ampla gama de habilidades, incluindo Java, Spring Boot,
                Amazon Web Services, JavaScript moderno, TypeScript, Node.js, React, React Native, a
                criação de APIs REST e ferramentas de controle de versão e automação. Estou
                entusiasmado em aplicar meu conhecimento e fazer contribuições valiosas para
                projetos inovadores.
            </p>

            <p>
                Em 2022, tive a oportunidade de ser bolsista no{' '}
                <a href="https://super.ufam.edu.br/" target="_blank">
                    Projeto Super
                </a>
                . Este projeto é uma iniciativa conjunta entre a UFAM e a Samsung, com ênfase nas
                áreas de Pesquisa, Desenvolvimento e Inovação (PD&I). Durante esse período,
                concentrei meus esforços em conduzir estudos no campo da Engenharia de Software, com
                foco especial na Gerência de Configuração de Software.
            </p>

            <p>
                Atualmente, ocupo a posição de desenvolvedor de software na empresa{' '}
                <a href="http://7facile.com.br/" target="_blank">
                    7FACILE
                </a>
                , que possui especialização na criação de softwares de gestão empresarial desde
                2016. Embora eu esteja envolvido no ciclo de desenvolvimento de software, minha
                principal responsabilidade consiste em conceber novas funcionalidades e conduzir a
                manutenção do software.
            </p>

            <p>
                Minha paixão pelo desenvolvimento de software permeia todo o ciclo de vida do
                projeto, desde a concepção da ideia até a entrega do produto final. Estou
                profundamente comprometido com todos os aspectos do projeto, desde a criação do
                modelo de dados e a arquitetura do sistema até o desenvolvimento tanto do backend
                quanto do frontend.
            </p>

            <h1>Contato</h1>

            <Contact>
                <div>
                    <p>Se você deseja entrar em contato comigo, pode me encontrar em:</p>
                    <ContactLink>
                        <LinkContact
                            href="https://www.linkedin.com/in/iano-maciel-52a7401ba/"
                            target="_blank"
                        >
                            <AiOutlineLinkedin />
                            iano-maciel-52a7401ba
                        </LinkContact>
                        <LinkContact href="https://github.com/IanoMaciel" target="_blank">
                            <AiOutlineGithub />
                            IanoMaciel
                        </LinkContact>
                        <LinkContact href="https://www.instagram.com/ianooo_/" target="_blank">
                            <AiOutlineInstagram />
                            ianooo_
                        </LinkContact>
                        <LinkContact href="#">
                            <AiOutlineMail />
                            ianomaciel685@icloud.com
                        </LinkContact>
                    </ContactLink>
                </div>

                <ContactImage src={require('../../assets/profilePhoto.png')} alt="Profile Photo" />
            </Contact>
        </Container>
    );
}
