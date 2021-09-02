import { useState, useEffect } from 'react';
import api from '../services/api';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Home() {
    const [equipe, setEquipe] = useState([]);
    //const  [ equipe, setEquipe ] = useState([]);


    useEffect(() => {
        const lista = [
            { nome: 'Vendedora Monise', link: 'https://bit.ly/3295waJ', id: '3295waJ' },
            { nome: 'Vendedor Ednaldo', link: 'https://bit.ly/3jbAWED', id: '3jbAWED' },
            { nome: 'Vendedor Wésdra', link: 'https://bit.ly/36nqtRk"', id: '36nqtRk' },
            { nome: 'Vendedor Daniel', link: 'https://bit.ly/3dn8nA0', id: '3dn8nA0' },
            { nome: 'Vendedor Reginaldo', link: 'https://bit.ly/3jAKvyw', id: '3jAKvyw' },
            { nome: 'Vendedor Fernanda', link: 'https://bit.ly/36N1mq8', id: '36N1mq8' },
            { nome: 'Vendedor João Ruth', link: 'https://bit.ly/3rdGYbR', id: '3rdGYbR' },
            { nome: 'Vendedora Taina', link: 'https://bit.ly/2UIs0yd', id: '2UIs0yd' }
        ];
        var novalista = lista.sort(function () {
            return 0.6 - Math.random();
        });
        setEquipe(novalista);
    }, []);
    
    //
    // useEffect(() => {
    //     localStorage.setItem("movend", 0);
    // }, []);

    function redirect(id: string) {
        setTimeout(function () {
            //window.location.assign("https://bit.ly/" + id);
            window.location.href = "https://bit.ly/" + id;
        }, 500);
    }

    function catraca(e:any) {
        e.preventDefault()

        api.post('/api/vendedor').then(response => {
            console.log(response.data);
            //console.log(response.data.urlwhatsapp);
            redirect(response.data.urlwhatsapp.replace('https://bit.ly/',''));
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
        var atual = localStorage.getItem("movend");
        var idc = atual === id ? "online" : "offline";
        if (atual === null)
            idc = "online";
        return idc
    }

    function aoclicar(e:any) {
        e.preventDefault()
        const target = e.currentTarget as HTMLLinkElement;
        console.log(target.dataset.id)
        console.log(target.dataset.status)
        var status = (target.dataset.status);
        var id = (target.dataset.id);

        //e.preventDefault()
        // console.log(e.currentTarget.dataset.id)
        // console.log(e.currentTarget.dataset.status)
        // var status = (e.currentTarget.dataset.status);
        // var id = (e.currentTarget.dataset.id);

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
                <Image src="/mo.png" alt="Vercel Logo" width={100} height={100} />

     {/* {src: 'foo.ogg', type: 'video/ogg'} */}
                {/* <h1 className={styles.title}>
                    Nosso atendimento é pelo Whatsapp
                </h1> */}

                {/* <Link href="/sobre"><a>Sobre</a></Link> */}

                <p className="titilo">Nosso atendimento é pelo Whatsapp</p>


                {equipe.map(data => (
                    <div key={data.id} className="styles sc-bdfBwQ snEmw">
                        <div data-testid="StyledContainer" className="sc-bdfBwQ sc-ctaXAZ gQMCNA gsOFqj">
                            <a href={`#${data.link}`} rel={data.id} onClick={(e) => aoclicar(e)} data-id={data.id} data-status={`${idc(data.id)}`} 

                                className={`sc-pFZIQ sc-tYoTV fxPOXp exGbzQ ${idc(data.id)}`}>
                                <p className="sc-hKgILt cdcUDS">{data.nome}</p>
                            </a>
                        </div>
                    </div>
                ))}
                <a href="#" onClick={() => limpar()} >º</a>

                {/* <a href="#" onClick={(e) => catraca(e)} >catraca</a> */}
            </main>
            
        </div>
    )
}



export default Home;