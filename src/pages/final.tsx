import { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import api from '../services/api';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Home() {
  const  [ BtnLoading, setBtnLoading ] = useState(false);
  const mainVideo = "/edicaofinal.mp4";
  
  const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
  };

  function redirect(id: string) {
    setTimeout(function () {
      //window.location.assign("https://bit.ly/" + id);
      window.location.href = "https://bit.ly/" + id;
    }, 100);
  }

  function catraca(e: any) {
    e.preventDefault()
    setBtnLoading(true);
    api.post('/api/vendedor').then(response => {
      console.log(response.data);
      let id = response.data.urlwhatsapp.replace('https://bit.ly/', '');
      //redirect(id);
      let status = idc(id);
      if (status === "online") {
        add(id);
        redirect(id);
      }
  
      if (status === "offline") {
        let atual = get();
        let redir = atual != null ? atual : id;
        redirect(redir);
      }
      setBtnLoading(false);
    });
  }


  function add(id: string) {
    localStorage.setItem("movend", id);
  }
  function get() {
    return localStorage.getItem("movend");
  }

  function limpar() {
    //e.preventDefault()
    localStorage.removeItem("movend");

    setTimeout(function () {
      //window.location.assign("/");
      window.location.href = "/";
    }, 500);
  }

  function idc(id: string) {
    var atual = get();
    var idc = atual === id ? "online" : "offline";
    if (atual === null)
      idc = "online";
    return idc
  }

  function aoclicar(e: any) {
    e.preventDefault()
    const target = e.currentTarget as HTMLLinkElement;
    // console.log(target.dataset.id)
    // console.log(target.dataset.status)
    var status = (target.dataset.status);
    var id = (target.dataset.id);
    if (status === "online") {
      add(id);
      redirect(id);
    }

    if (status === "offline") {
      var atual = get();
      var redir = atual != null ? atual : id;
      redirect(redir);
    }
  }
  const filemp4 =  './edicaofinal_x264.mp4?v=' + Math.floor((Math.random() * 100) + 1);
  const filewebm =  './edicaofinal_VP8.webm?v=' + Math.floor((Math.random() * 100) + 5);
  const fileogg =  './edicaofinal_libtheora.ogv?v=' + Math.floor((Math.random() * 100) + 6);

  return (
    <div className={styles.container}>
      <Head>
        <title>Mega Outlet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <meta property="og:locale" content="pt_BR">
          <meta property="og:url" content="https://megaoutletsofa.com.br/">
          <meta property="og:title" content="MEGA OUTLET - Atendimento">
          <meta property="og:site_name" content="MEGA OUTLET">
          <meta property="og:description" content="Página para atendimento on-line.">
          <meta property="og:image" content="https://megaoutletsofa.com.br/imagem.jpg">
          <meta property="og:image:type" content="image/jpeg">
          <meta property="og:image:width" content="800">
          <meta property="og:image:height" content="600">
          <meta property="og:type" content="website">
          <meta name="theme-color" content="#343a40"></meta> */}
      </Head>

      <main className={styles.main}>
        {/* <Image src="/mo.png" alt="Vercel Logo" width={100} height={100} /> */}

        {/* url={`/edicaofinal_x264.mp4?v=` + Math.floor((Math.random() * 100) + 1)} */}

        <ReactPlayer
          width="100%"
          playing
          loop
          url="https://www.youtube.com/watch?v=dNAwUUUaiqQ&showinfo=0&enablejsapi=1&origin=https://vendas.megaoutletsofa.com.br/"
         
        />
        {/* {src: 'foo.ogg', type: 'video/ogg'} */}
        {/* <h1 className={styles.title}>
              Nosso atendimento é pelo Whatsapp
          </h1> */}

        {/* <Link href="/sobre"><a>Sobre</a></Link> */}

        {/* <p className="titilo">Nosso atendimento é pelo Whatsapp</p> */}



        <div className="styles sc-bdfBwQ snEmw">
          <div data-testid="StyledContainer" className="sc-bdfBwQ sc-ctaXAZ gQMCNA gsOFqj">
            <a href={`#`} onClick={(e) => catraca(e)}

              className={`sc-pFZIQ sc-tYoTV fxPOXp exGbzQ online`}>
              <p className="sc-hKgILt cdcUDS">  {BtnLoading ? "Aguarde..." : "Iniciar atendimento"} </p>
            
            </a>
          </div>
        </div>

        <a href="#" onClick={() => limpar()} >º</a>

        {/* <a href="#" onClick={(e) => catraca(e)} >catraca</a> */}
      </main>

    </div>
  )
}




export default Home;