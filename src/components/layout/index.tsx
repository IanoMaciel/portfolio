import { Container } from './styles';

// components
//import { MainHeader } from '../MainHeader';
import { Content } from '../Content';
import { Aside } from '../Aside';

export function Layout({ children }: Children) {
    return (
        <Container>
            <Aside />
            <Content>{children}</Content>
        </Container>
    );
}
