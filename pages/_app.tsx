import '@/styles/globals.css'
import type { AppProps } from 'next/app'
//Hacemos el importe de la fuente
import { Montserrat } from "next/font/google"
import Head from 'next/head';
import { Navbar } from '@/components/Navbar';

//Cargamos la fuente con la variable --font-mont para definir el nombre de la variable CSS
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    //Usamos la variable montserrat.variable para usar la variable CSS en nuestro documento HTML
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*amos la variable montserrat.variable para usar la variable CSS en nuestro documento HTML
      Luego usamos bg-light que es uno de los colores definidos en el tailwind.config.ts*/}
      <main className={"${montserrat.variable} font-mont bg-light w-full min-h-screen"}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
