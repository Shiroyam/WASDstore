import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../hoc/layout/Layout';
import { Provider } from 'react-redux';
import { storeSetup } from '../redux/index';
const store = storeSetup();

import '../styles/app.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WASDstore</title>
      </Head>
      <main className="app">
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </main>
    </>
  );
}

export default CustomApp;
