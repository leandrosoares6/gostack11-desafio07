import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;

      message: {
        default: string;
        error: string;
        success: string;
      };
    };
  }
}
