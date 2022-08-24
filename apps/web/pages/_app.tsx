import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../hoc/layout/Layout';
import '../styles/app.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WASDstore</title>
      </Head>
      <main className="app">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default CustomApp;
