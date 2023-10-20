import { createContext, useState, useContext, Children } from 'react';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ITheme {
    title: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary_50: string;
        tertiary_100: string;
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
    const [theme, setTheme] = useState<ITheme>(() => {
        const themeSaved = localStorage.getItem('@my-portfolio:theme');
        if (themeSaved) {
            return JSON.parse(themeSaved);
        } else {
            return dark;
        }
    });

    const toggleTheme = () => {
        if (theme.title === 'dark') {
            setTheme(light);
            localStorage.setItem('@my-portfolio:theme', JSON.stringify(light));
        } else {
            setTheme(dark);
            localStorage.setItem('@my-portfolio:theme', JSON.stringify(dark));
        }
    };
    return <ThemeContext.Provider value={{ toggleTheme, theme }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);
    return context;
}
