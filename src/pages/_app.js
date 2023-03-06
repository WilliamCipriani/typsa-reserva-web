/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import HeaderPage from '../components/header/header';
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/calendar.css';


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
        <link 
          src="https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"
          integrity="sha512-MY2jfK3DBnVzdS2V8MXo5lRtr0mNRroUI9hoLVv2/yL3vrJTam3VzASuKQ96fLEpyYIT4a8o7YgtUs5lPjiLVQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link 
        rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" 
        />
      </Head>
      
      <HeaderPage />
      <Component {...pageProps} />
    </>
  );

}


