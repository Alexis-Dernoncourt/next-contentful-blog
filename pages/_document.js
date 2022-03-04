import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

  render() {
    return (
      <Html lang='fr-FR'>
        <Head>
          {<>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
            <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
          </>}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
