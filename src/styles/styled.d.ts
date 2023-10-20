import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            tertiary_50: string;
            tertiary_100: string;
            gray: string;
            button: string;
        },
    }
}
