import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  breakpoints:{
    values: {
      xs: 0,
      sm: 500,
      md: 800,
      lg: 1200,
      xl: 1500,
    },
  },
palette: {
   primary: {
      main: '#556cd6',
   },
   secondary: {
     main: '#19857b',
   },
   error: {
   main: red.A400,
   },
  },
  overrides:{
    MuiFormControl:{
        width:"80%"
    },
    notchedOutline:{
        borderColor: 'rgba(238, 194, 194, 0.23)!important',
        color: 'aliceblue',
    },
  },
  
});
export default theme;