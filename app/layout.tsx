import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


export const metadata: Metadata = {
  title: {
    default:
      "Ventu Plaza | Centros comerciales abiertos en Costa Rica",
    template:
      "%s | Ventu Plaza",
  },

  description:
    "Ventu Plaza desarrolla centros comerciales abiertos en Costa Rica con tiendas, restaurantes y espacios para la comunidad.",

  keywords:[
    "Ventu Plaza",
    "centros comerciales Costa Rica",
    "plazas comerciales Costa Rica",
    "Liberia",
    "Desamparados",
    "San Sebastián",
  ],

  openGraph:{
    title:"Ventu Plaza Costa Rica",
    description:
      "Tiendas, gastronomía y experiencias comerciales.",
    url:"https://ventuplaza.com",
    siteName:"Ventu Plaza",
    locale:"es_CR",
    type:"website",
  },

  robots:{
    index:true,
    follow:true,
  },
};


export default function RootLayout({
 children
}:{
 children:ReactNode
}){

return(
<html lang="es">

<body>

<Navbar/>

<main>
{children}
</main>

<Footer/>

</body>

</html>
)

}