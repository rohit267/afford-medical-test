import '../styles/globals.css'
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
    </Head>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
