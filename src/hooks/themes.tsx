import { createContext, useState, useContext, Children } from 'react';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ITheme {
    title: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        gray: string;
        button: string;
    };
}

interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export function ThemeProvider({ children }: Children) {
    const [theme, setTheme] = useState<ITheme>(dark);

    const toggleTheme = () => {
        if (theme.title === 'dark') setTheme(light);
        else setTheme(dark);
    };
    return <ThemeContext.Provider value={{ toggleTheme, theme }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);
    return context;
}
