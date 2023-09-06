import { Container } from './styles';
import { Card } from '../../components/Card';

export default function Projects() {
    return (
        <Container>
            <h1>Projetos</h1>

            <Card
                title="Projeto X"
                description="Sistema web que monitora as entradas e saídas de dinheiro do usuário, fornecendo
                    um dashboard para melhor visualização dos dados. O objetivo deste é simular uma
                    carteira real, permitindo que o usuário visualize facilmente seus ganhos e
                    saídas."
                techStack="Node.js | React | TypeScript"
                link="#"
                urlImage="https://picsum.photos/200/300/?blur=2"
            />
        </Container>
    );
}
