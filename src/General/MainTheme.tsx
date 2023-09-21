import {createTheme, ThemeProvider} from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import { CssBaseline } from '@mui/material';
import { ReactNode } from 'react';
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
 });

const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: 'Rubik'
    },
    palette: {
        mode: 'dark',
        primary: {
          main: "#FF7580"
        },
        secondary: {
          main: "#FCFF60"
        },
        success: {
          main: "#9DDB36"
        },
        error: {
          main: "#E5392A"
        },
        warning: {
          main: "#EF6C00"
        }
        // palette values for dark mode
        }
},

    );
  interface MainThemeProps {
    children: ReactNode;
  }
  
const MainTheme : React.FC<MainThemeProps> = (props) => {
  return (
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  </CacheProvider>
  );
};

export default MainTheme;