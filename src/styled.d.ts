// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    headerColor:string;
    headerBgBtn:string;
    headerBtnColor:string;
    headerBtnHover:string;
    headerBtnBorder:string;
    Box1bgColor:string;
    headerBtnColorHover:string;
    titleColor:string;

    textColor: string;
    contentColor: string;
    bgColor: string;
    accentColor: string;
    mainTitleColor: string;
  }
}