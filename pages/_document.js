import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
    return (
      <Html className='page'>
        <Head />
        <body className='grid page_body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
