import { Container, Welcome, ToogleStyle } from './styles';

import { Toogle } from '../Toogle';

export function MainHeader() {
    return (
        <Container>
            <Welcome>Bem vindo ao meu portfólio</Welcome>
            <ToogleStyle>
                <Toogle />
            </ToogleStyle>
        </Container>
    );
}
