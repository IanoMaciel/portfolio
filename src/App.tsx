import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
//import dark from './styles/themes/dark';
//import light from './styles/themes/light';

import { useTheme } from './hooks/themes';

import Routes from './routes';

const App: React.FC = () => {
    const { theme } = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    );
};

export default App;
