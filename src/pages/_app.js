/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css';
import '@/styles/index.css';
import '@/styles/registro.css';
import { useEffect } from "react";



export default function App({ Component, pageProps }) {

  return (

    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>

      


      <Component {...pageProps} />
    </>
  );

}


