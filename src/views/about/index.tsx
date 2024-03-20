import {
    Container,
    AboutMe,
} from './styles';


import AboutMeCard from '../../components/AboutMeCard';
import ContactMe from '../../components/ContactMe';

export default function About() {
    return (
        <Container>
            <AboutMe>
                <h1>Iano Maciel</h1>
                <span>Engenheiro de Software | Desenvolvedor de Software | Mestrando em Engenharia de Software</span>
            </AboutMe>
            <AboutMeCard />
            <ContactMe/>
        </Container>
    );
}
