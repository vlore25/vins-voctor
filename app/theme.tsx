import { createTheme, MantineColorsTuple } from '@mantine/core';
import "@fontsource-variable/montserrat"; 
import "@fontsource/protest-strike";

const brandBordeux: MantineColorsTuple = [
  "#fbf0ef",
  "#efdedc",
  "#e2b8b5",
  "#d6908a",
  "#cc6f66",
  "#c65a4f",
  "#c44f43",
  "#ad4035",
  "#9b382e",
  "#782821"
];

const myDarkGray = '#424242ff';

export const theme = createTheme({
  colors: {
    brandBordeux,
  },

  primaryColor: 'brandBordeux',
  black: myDarkGray,
  fontFamily: 'Montserrat Variable',

  fontSizes: {
    xs: '0.75rem',
    s: '0.875rem',  
    md: '1rem',      
    l: '1.125rem',
    xl: '1.25rem'
  },

  headings: {
    fontFamily: 'Protest Strike',
    sizes: {
      h6: {
        fontSize: '1rem',    
        lineHeight: '1.4',
      },
      h5: {
        fontSize: '1.25rem',  
        lineHeight: '1.4',
      },
      h4: {
        fontSize: '1.563rem',  
        lineHeight: '1.35',
      },
      h3: {
        fontSize: '1.953rem', 
        lineHeight: '1.3',
      },
      h2: {
        fontSize: '2.441rem', 
        lineHeight: '1.25',
      },
      h1: {
        fontSize: '3.052rem',
        lineHeight: '1.2',
      },
    },
  },
});
