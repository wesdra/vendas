import { useState, useEffect } from 'react';
import api from '../services/api';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Home() {
    const [equipe, setEquipe] = useState([]);
    const [equipeoff, setEquipeoff] = useState([]);


    useEffect(() => {
        const lista = [


            { nome: 'Rogerio', img: '/img/rogerio.png', link: 'https://bit.ly/3AZ8mOM', id: '3AZ8mOM', antigo: '3jAKvyw' },
            { nome: 'Fernanda', img: '/img/fernanda.png', link: 'https://bit.ly/39TYFVO', id: '39TYFVO', antigo: '36N1mq8' },
            { nome: 'Ednaldo', img: '/img/ednaldo.png', link: 'https://bit.ly/39WBASx', id: '39WBASx', antigo: '3jbAWED' },
            { nome: 'Taina', img: '/img/taina.png', link: 'https://bit.ly/2Y6DHkt', id: '2Y6DHkt', antigo: '2UIs0yd' },
            { nome: 'Aline', img: '/img/aline.png', link: 'https://bit.ly/3vMpGVq', id: '3vMpGVq', antigo: '3vMpGVq' },
            { nome: 'Marta', img: '/img/marta.png', link: 'https://bit.ly/3BOTmCJ', id: '3BOTmCJ', antigo: '3BOTmCJ' }
        ];
        const listaoff = [
            { nome: 'Monise', img: '/img/monise.png', link: 'https://bit.ly/3onMfOk', id: '3onMfOk', antigo: '3295waJ' },
            { nome: 'Daniel', img: '/img/daniel.png', link: 'https://bit.ly/3kSrZ5n', id: '3kSrZ5n', antigo: '3dn8nA0' }
        ];
        var novalista = lista.sort(function () {
            return 0.6 - Math.random();
        });
        setEquipe(novalista);
        setEquipeoff(listaoff);
    }, []);
    // { nome: 'Vendedor Ednaldo', link: 'https://bit.ly/3jbAWED', id: '3jbAWED' },
    // { nome: 'Vendedor Wésdra', link: 'https://bit.ly/36nqtRk"', id: '36nqtRk' },
    // { nome: 'Vendedor João Ruth', link: 'https://bit.ly/3uqAvM0', id: '3uqAvM0' },
    // useEffect(() => {
    //     localStorage.setItem("moid", 0);
    // }, []);

    function redirect(id: string) {
        setTimeout(function () {
            //window.location.assign("https://bit.ly/" + id);
            window.location.href = "https://bit.ly/" + id;
        }, 10);
    }

    function catraca(e: any) {
        e.preventDefault()

        api.post('/api/vendedor').then(response => {
            console.log(response.data);
            //console.log(response.data.urlwhatsapp);
            redirect(response.data.urlwhatsapp.replace('https://bit.ly/', ''));
        });

    }


    function add(id: string) {
        localStorage.setItem("moid", id);
    }
    function get() {
        return localStorage.getItem("moid");
    }

    function limpar() {
        //e.preventDefault()
        localStorage.removeItem("moid");

        setTimeout(function () {
            //window.location.assign("/");
            window.location.href = "/";
        }, 10);
    }

    function idc(id: string) {
        var atual = localStorage.getItem("moid");
        var idc = atual === id ? "online" : "offline";
        if (atual === null)
            idc = "online";

        return idc
    }

    // function buscaPorId(id: string){
    //     var vend = equipe.find(item => item.antigo = id);
    //     console.log('vend',vend);
    //     return vend.id;
    // }


    function aoclicar(e: any) {
        e.preventDefault()
        const target = e.currentTarget as HTMLLinkElement;
        //console.log(target.dataset.id)
        //console.log(target.dataset.status)
        var status = (target.dataset.status);
        var id = (target.dataset.id);

        //e.preventDefault()
        // console.log(e.currentTarget.dataset.id)
        // console.log(e.currentTarget.dataset.status)
        // var status = (e.currentTarget.dataset.status);
        // var id = (e.currentTarget.dataset.id);


        //se o ultimo atendimento estiver offline permite chamar outro
        const result = equipeoff.find(item => item.id === get());
        if (result) {
            //console.log("result");
            //console.log(result);
            add(id);
            redirect(id);
        }


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
                <div id="logo"><Image className="logo" src="/mo.png" alt="Vercel Logo"  width={100} height={60}  /></div>
                {/* {src: 'foo.ogg', type: 'video/ogg'} */}
                {/* <h1 className={styles.title}>
                    Nosso atendimento é pelo Whatsapp
                </h1> */}

                {/* <Link href="/sobre"><a>Sobre</a></Link> */}

                <p className="titulo">Nosso atendimento é pelo Whatsapp</p>
                <div className="sub">
                    <div className="online-indicator">
                        <span className="blink blinkonline"></span>
                    </div>

                    <h2 className="online-text text-verde">Equipe Online</h2>
                </div>
                {/* 
                {equipe.map(data => (
                    <div key={data.id} className="styles sc-bdfBwQ snEmw">
                        <div data-testid="StyledContainer" className="sc-bdfBwQ sc-ctaXAZ gQMCNA gsOFqj">
                            <a href={`#${data.link}`} rel={data.id} onClick={(e) => aoclicar(e)} data-id={data.id} data-status={`${idc(data.id)}`} 

                                className={`sc-pFZIQ sc-tYoTV fxPOXp exGbzQ ${idc(data.id)}`}>
                                    
                                <p className="sc-hKgILt cdcUDS"> {data.nome} <div className="circular--portrait">
                                <img src="/img/fernanda.png" />
                   
                                </div></p>
                            </a>
                        </div>
                    </div>
                ))}
               <p className="titilo">s</p>
                <div className="styles sc-bdfBwQ snEmw">
                    <div data-testid="StyledContainer" className="sc-bdfBwQ sc-ctaXAZ gQMCNA gsOFqj">
                        <a href="#" rel="2Y6DHkt" data-id="2Y6DHkt" data-status="offline" className="sc-pFZIQ sc-tYoTV fxPOXp exGbzQ offline">
                            <p className="sc-hKgILt cdcUDS">Vendedor Daniel * Férias</p>
                        </a>
                    </div>
                </div>               

                <div className="styles sc-bdfBwQ snEmw">
                    <div data-testid="StyledContainer" className="sc-bdfBwQ sc-ctaXAZ gQMCNA gsOFqj">
                        <a href="#" rel="2Y6DHkt" data-id="2Y6DHkt" data-status="offline" className="sc-pFZIQ sc-tYoTV fxPOXp exGbzQ offline">
                        <p className="sc-hKgILt cdcUDS">Vendedora Monise * Licença Maternidade</p>
                        </a>
                    </div>
                </div> */}




                <div className="row">
                    {equipe.map(data => (

                        <div key={data.id} className="column">
                            <a href={`#${data.link}`} rel={data.id} onClick={(e) => aoclicar(e)} data-id={data.id} data-status={`${idc(data.id)}`}
                                className={`sc-pFZIQ sc-tYoTV fxPOXp exGbzQ ${idc(data.id)}`}>
                                <Image src={data.img} alt={data.nome} layout="intrinsic"  width={262} height={465}  className={'image'}/></a>
                            <div className="online-indicator dentro">
                                <span className="blink blinkonline"></span>
                            </div>

                        </div>

                    ))}

                </div>


                <div className="sub">
                    <div className="offline-indicator">
                        <span className="blink blinkoffline"></span>
                    </div>

                    <h2 className="online-text text-vermelho">Equipe Offline</h2>
                </div>
                <div className="row">
                    {equipeoff.map(data => (

                        <div key={data.id} className="column">


                            <Image src={data.img} alt={data.nome}  layout="intrinsic" width={262} height={465}  className={'image'}/>
                            <div className="offline-indicator dentro">
                                <span className="blink blinkoffline"></span>
                            </div>

                        </div>

                    ))}

                </div>





                {/* <a href="#" onClick={(e) => catraca(e)} >catraca</a> */}
                <a className="limpar" href="#" onClick={() => limpar()} >º</a>

                {/* 
         
                <a href="#" onClick={() => limpar()} >SAC</a>
                        <a href="#" onClick={() => limpar()} >OUVIDORIA</a> */}

                {/* <nav className="navMenu">
                    <a href="#" onClick={() => limpar()} >SAC</a>
                    <a href="mailto:ouvidoria@megaoutletsofa.com.br">OUVIDORIA</a>
                    <div className="dot"></div>
                </nav> */}


            </main>

        </div>
    )
}



export default Home;