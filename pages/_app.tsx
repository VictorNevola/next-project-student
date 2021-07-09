import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from '@/styles/global';
import Head from 'next/head'
import { AuthProvider } from '@/contexts/auth'; 
import { GoogleFonts } from "next-google-fonts";
import ProgressBarTop from '@/components/topBarProgress';
import PopUpMessages from "@/components/popUpMessages";


export default function App ({ Component, pageProps }) {
  return (
    <>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" />
        <Head>
          <title>Imeals Painel Administrativo</title>
        </Head>
        <GlobalStyles />
        <AuthProvider> 
          <ProgressBarTop />
          <PopUpMessages />
          <Component {...pageProps} />
        </AuthProvider>
    </>
  )
}
