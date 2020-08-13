import { SimpleTheme } from 'react-native-simple';

const theme: SimpleTheme = {
  palette: {
    accent: '#0098f7',
    primary: '#f7f7f7',
    secondary: '#f2f2f2',
    text: {
      primary: '#2f2f2f',
      secondary: '#f2f2f2',
    },
  },
  typography: {
    primaryFont: 'Rubik_500Medium',
  },
};

const metrics = {
  margin: {
    small: 5,
    normal: 10,
    medium: 15,
    big: 20,
  },
  padding: {
    small: 5,
    normal: 10,
    medium: 15,
    big: 20,
  },
};

export default theme;
type ThemeType = typeof theme;

export { ThemeType, metrics };
