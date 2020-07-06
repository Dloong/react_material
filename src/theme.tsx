import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { zhCN, idID } from '@material-ui/core/locale';
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFD100',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#D8D8D8',
    }
  },
  overrides: {
    MuiInput: {
      input: {
        marginLeft: 4,
        marginRight: 4,
        padding: 12
      },
      underline: {
        '&:before': {
          borderBottom: '1px solid #D8D8D8'
        }
      }
    },
    MuiFormControl: {
      root: {
        backgroundColor: '#fff'
      }
    }
  },
}, process.env.REACT_APP_LANG=== "en"? zhCN : idID );

export default theme;