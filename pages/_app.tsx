import GlobalStyles from '@/styles/global';
import Head from 'next/head'
import { AuthProvider } from '@/contexts/auth'; 
import { GoogleFonts } from "next-google-fonts";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App ({ Component, pageProps }) {
  return (
    <>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" />
        <Head>
          <title>Imeals Painel Administrativo</title>
        </Head>
        <GlobalStyles />
        <ToastContainer position={"top-center"} />
        <AuthProvider> 
          <Component {...pageProps} />
        </AuthProvider>
    </>
  )
}
