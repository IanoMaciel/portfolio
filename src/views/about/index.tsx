import {
    Container,
    Contact,
    ContactLink,
    LinkContact,
    AboutMe,
    Networks,
} from './styles';
import {
    AiOutlineInstagram,
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineMail,
} from 'react-icons/ai';


import AboutMeCard from '../../components/AboutMeCard';

export default function About() {
    return (
        <Container>
            <AboutMe>
                <h1>Iano Maciel</h1>
                <span>Engenheiro de Software | Desenvolvedor de Software | Pesquisador</span>
            </AboutMe>

            <AboutMeCard/>

            <Contact>
                <h1>Contato</h1>
                <span>Se você deseja entrar em contato comigo, pode me encontrar em:</span>
            </Contact>

            <Networks>
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
                    <LinkContact href="mailto:ianomaciel685@icloud.com? subject=sbject text">
                        <AiOutlineMail />
                        ianomaciel685@icloud.com
                    </LinkContact>
                </ContactLink>
            </Networks>
        </Container>
    );
}
