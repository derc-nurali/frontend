import { appWithTranslation } from 'next-i18next';
import type { AppContext, AppProps } from 'next/app';
import NextApp from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import React, { useEffect } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import 'swiper/swiper-bundle.css';
import { store } from '../src/common/store';
import { ThemeProvider } from '../src/common/theme/theme-provider';
import { LayoutProvider } from '../src/components/layout';
import { SiteUnderConstruction } from '../src/components/site-under-construction';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jsxStyles = document.querySelector('#jsx-server-side');
    if (jsxStyles && jsxStyles.parentElement) {
      jsxStyles.parentElement.removeChild(jsxStyles);
    }
  }, []);

  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <LayoutProvider>
          <>
            <NextNprogress
              color="#29D"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow
            />
            <SiteUnderConstruction>
              <Component {...pageProps} />
            </SiteUnderConstruction>
          </>
        </LayoutProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

App.getStaticProps = async (appContext: AppContext) => await NextApp.getInitialProps(appContext);

export default appWithTranslation(App);
