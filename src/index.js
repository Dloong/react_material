import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import * as serviceWorker from './serviceWorker';
import "./utils/i18n"
ReactDOM.render(
  <ThemeProvider theme={theme}>
  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
  <CssBaseline />
  <Suspense fallback={null}> <App /></Suspense>

</ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
