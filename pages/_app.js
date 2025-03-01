import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Layout from '../components/Layout';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};


// import '../styles/globals.css'
// import Layout from '../components/Layout'
// import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import Container from '@material-ui/core/Container'
// import { grey } from '@material-ui/core/colors';
// import 'fontsource-roboto';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: grey[300]
//     }
//   }
// })

// function MyApp({ Component, pageProps }) {
//   return <ThemeProvider theme={theme}>
//     <Container maxWidth='lg'>
//       <div className='App'>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </div>
//     </Container>
//   </ThemeProvider>
// }

// export default MyApp
