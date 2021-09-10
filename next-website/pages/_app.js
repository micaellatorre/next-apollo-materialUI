import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import theme from 'src/theme';
/*
import AuthProvider from 'components/AuthProvider';
*/

const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    /* <AuthProvider> */
      <>
      <Head>
        <title>{process.env.MAIN_TITLE}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      </>
    /* </AuthProvider> */
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
