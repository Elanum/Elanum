import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import '@pages/globals.css';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'de_DE',
          url: 'https://www.elanum.ie/',
          site_name: 'Elanum',
          description: 'Offizielle Website von Elanum',
          title: 'Elanum',
        }}
        twitter={{
          handle: '@ElanumOfficial',
          site: '@ElanumOfficial',
          cardType: 'summary_large_image',
        }}
        titleTemplate="%s | Elanum"
        defaultTitle="Elanum"
        description="Offizielle Website von Elanum"
      />
      <header>
        <Navbar />
      </header>
      <main className="flex-grow container">
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
