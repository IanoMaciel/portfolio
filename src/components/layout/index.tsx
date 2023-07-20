import { Container } from './styles';

import { MainHeader } from '../MainHeader';
import { Content } from '../Content';
import { Aside } from '../Aside';

export function Layout() {
    return (
        <Container>
            <MainHeader />
            <Aside />
            <Content />
        </Container>
    );
}
