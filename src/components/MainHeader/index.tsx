import { useState } from 'react';

import { Container, Welcome, ToogleStyle } from './styles';
import { Toggle } from '../Toggle';

import { useTheme } from '../../hooks/themes';

export function MainHeader() {
    const { toggleTheme, theme } = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => (theme.title === 'dark' ? true : false));
    function handleChangeTheme() {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }
    return (
        <Container>
            <Welcome>Bem vindo ao meu portfólio</Welcome>
            <ToogleStyle>
                <Toggle checked={darkTheme} onChange={handleChangeTheme} />
            </ToogleStyle>
        </Container>
    );
}
