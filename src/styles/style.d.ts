import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      black: string;
      white: string;

      success: string;
      warning: string;
      error: string;
    }
  }
}