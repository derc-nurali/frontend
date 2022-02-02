import { ServerStyleSheets } from '@mui/styles';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
const YANDEX_METRICA = process.env.NEXT_PUBLIC_YANDEX_METRICA;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="/favicon/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="/favicon/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="/favicon/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/favicon/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="/favicon/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="/favicon/apple-touch-icon-152x152.png"
          />
          <link rel="icon" type="image/png" href="/favicon/favicon-196x196.png" sizes="196x196" />
          <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/favicon/favicon-128.png" sizes="128x128" />
          <meta name="application-name" content="DIGITAL ECONOMY RESEARCH CENTER" />
          <meta name="msapplication-TileColor" content="#2C87A4" />
          <meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />
          <link rel="manifest" href="/manifest.json" />

          {/* TODO: fix eslint warning with css */}
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link href="/assets/fonts/stylesheet.css" rel="stylesheet" />
          <script async src="/scripts/check-browser.js" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {!!GOOGLE_ANALYTICS && (
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`} />
          )}
          {!!GOOGLE_ANALYTICS && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          )}

          {/* Yandex.Metrika counter */}
          {!!YANDEX_METRICA && (
            <script
              id="hello"
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(${YANDEX_METRICA}, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });
          `,
              }}
            />
          )}

          {/* START WWW.UZ TOP-RATING */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            <!--
            top_js="1.0";top_r="id=46128&r="+escape(document.referrer)+"&pg="+escape(window.location.href);document.cookie="smart_top=1; path=/"; top_r+="&c="+(document.cookie?"Y":"N")
            //-->
            `,
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            <!--
            top_js="1.1";top_r+="&j="+(navigator.javaEnabled()?"Y":"N")
            //-->
          `,
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            <!--
            top_js="1.2";top_r+="&wh="+screen.width+'x'+screen.height+"&px="+
            (((navigator.appName.substring(0,3)=="Mic"))?screen.colorDepth:screen.pixelDepth)
            //-->
          `,
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            <!--
            top_js="1.3";
            //-->
          `,
            }}
          />
          {/* FINISH WWW.UZ TOP-RATING */}
        </Head>
        <body>
          <Main />
          <NextScript />

          {!YANDEX_METRICA && (
            <noscript>
              <div>
                <img
                  src={`https://mc.yandex.ru/watch/${YANDEX_METRICA}`}
                  style={{ position: 'absolute', left: -9999 }}
                  alt=""
                />
              </div>
            </noscript>
          )}

          <noscript>
            <img
              height={0}
              src="https://cnt0.www.uz/counter/collect?id=46128&pg=http%3A//uzinfocom.uz&col=340F6E&t=ffffff&p=BD6F6F"
              width={0}
              alt=""
            />
          </noscript>
        </body>
      </Html>
    );
  }
}
