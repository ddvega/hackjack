import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#009900', // navbar background color
      title: '#000000', // navbar title color
    },
    background: {
      default: '#fff',
      paper: '#fff',
      greyMedium: '#d9d9d9',
      greyLight: '#f0f0f0',
    },
    secondary: {
      main: '#f50004',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});
