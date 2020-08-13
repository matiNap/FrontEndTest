import { SimpleTheme } from 'react-native-simple';
import { Dimensions } from 'react-native';

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

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

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
  width: WIDTH,
  height: HEIGHT,
};

export default theme;
type ThemeType = typeof theme;

export { ThemeType, metrics };
