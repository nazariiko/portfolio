// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    backgroundLighter: string;
    backgroundDarker: string;
    primary: string;
    primaryLighter: string;
    primaryDarker: string;
    secondary: string;
    text: string;
  }
}
