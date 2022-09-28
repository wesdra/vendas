import { GetServerSideProps } from "next";
import Head from "next/head";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import React from "react";
import Pixel from "../../components/pixel/facebook/pixel-1";
import { VendedoresData, VendedoresDb } from "../../VendedoresDb";

//export default function Categorias({ slug }: string) {
export default function Atendimento() {

  const router = useRouter();
  const slug = router.query.slug || [];
  const lazyRoot = React.useRef(null);
  
  const [vendedores, SetVendedores] = useState<VendedoresData[]>(VendedoresDb)
  
  
  function redirect(id: string | undefined, time: number): void {




    setTimeout(function () {
      //window.location.assign("https://bit.ly/" + id);
  
      //console.log(slug)
      const result = vendedores.find(item => item.id === id);
     // console.log(result)
      if (result) {
        window.location.href = "" + result.link;
      }else{
        window.location.href = "https://wa.me/message/XKSJND5ULUMKK1?utm_source=Luiz+Gustavo"
      }
     // window.location.href = "https://bit.ly/" + id;
      
    }, time);
  }

  useEffect(() => {
    //if (slug === "39TYFVO"){
    //    redirect(slug.toString(), 5000);
    //}else{


      redirect(slug.toString(), 500);
    //}
  }, [slug]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Equipe Móveis - Atendimento</title>
        <meta name="description" content="Equipe Móveis - Atendimento" />
        <meta property="og:title" content="Equipe Móveis" />
        <meta property="og:description" content="Equipe Móveis - Loja de móveis: sofás, mesas, cadeiras, polronas, colchões, sofá cama, mesa de cabeceiras..." />
        <meta property="og:url" content="https://falecom.equipemoveis.com.br/" />
        <meta property="og:image" content="https://falecom.equipemoveis.com.br/loja.png" />
        <meta property="og:type" content="website" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;1,400&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <Pixel scriptfbq="fbq('track', 'PaginaAtendimento');" />
      </Head>
      <main className={styles.main}>
        {/* <div className={styles.fullcontent}>{slug}</div> */}
        <Image
          src="/logo.svg"
          alt="EquipE Móveis"
          lazyRoot={lazyRoot}
          width="250"
          height="118"
          className={styles.logo}
        />
        <div className={styles.loader}>Loading...</div>
      </main>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const slug = query.slug || [];

//   if (!slug) {
//     router.push("/", undefined, { shallow: true });
//   }

//   return {
//     props: {
//       slug,
//     },
//   };
// };
