import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Contatos } from '../components/contatos'
import { Rodape } from '../components/rodape'
import dynamic from 'next/dynamic'
import { GoogleAnalytics } from '../components/googleanalytics'
import Pixel from '../components/pixel/facebook'

const DynamicVendedores = dynamic(
    () => import('../components/vendedores'),
    { loading: () => <span >carregando...</span> }
)

const Home: NextPage = () => {




    // const [valor, setValor] = useState('')

    // function gravarVendedores(event: FormEvent) {
    //     event.preventDefault()

    //    const ref = database.ref('cupons')
    //     const cupomcurent = [{
    //         "DataCadastro": "2022\/3\/29",
    //         "cupom": "WES123",
    //         "email": "wesdralima@gmail.com",
    //         "id": "2255",
    //         "municipio": "COTIA",
    //         "nome": "Wesdra",
    //         "regatado":false,
    //         "telefone": "5511940413848",
    //         "acesso": 0
    //       },
    //       {
    //         "DataCadastro": "2022\/3\/29",
    //         "cupom": "FER13213",
    //         "email": "Fernanda@gmail.com",
    //         "id": "2256",
    //         "municipio": "COTIA",
    //         "nome": "Fernanda",
    //         "regatado":false,
    //         "telefone": "5511992505764",
    //         "acesso": 0
    //       },
    //       {
    //         "DataCadastro": "2022\/3\/29",
    //         "cupom": "TA364654",
    //         "email": "talita@gmail.com",
    //         "id": "2257",
    //         "municipio": "COTIA",
    //         "nome": "Talita",
    //         "regatado":false,
    //         "telefone": "5511992057241",
    //         "acesso": 0
    //       },
    //     ]

    //     { cupomcurent.map(cupons => (ref.push(cupons))) }


    // const ref = database.ref('vendedores')
    // const vendedores = [

    //     { nome: 'Fernanda', img: '/fernanda.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/39TYFVO', id: '39TYFVO' },
    //     { nome: 'Gustavo', img: '/fernanda.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/37zzbPU', id: '37zzbPU' },
    //    // { nome: 'Ednaldo', img: '/ednaldo.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/39WBASx', id: '39WBASx' },
    //     { nome: 'Taina', img: '/taina.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/2Y6DHkt', id: '2Y6DHkt' },
    //     { nome: 'Aline', img: '/aline.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/3vMpGVq', id: '3vMpGVq' },
    //    // { nome: 'Marta', img: '/marta.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/3BOTmCJ', id: '3BOTmCJ' },
    //    // { nome: 'Monise', img: '/monise.svg', online: false, link: 'https://vendas.megaoutletsofa.com.br/3onMfOk', id: '3onMfOk' },

    // ];

    // { vendedores.map(vendedor => (ref.push(vendedor))) }


    //     setValor('')
    // }

    // function atualizar(){
    //     const ref = database.ref('cupons')

    //     const dados = {
    //         "id":"9052",
    //         "telefone":"5511947272293",
    //         "nome":"Eelisabeth",
    //         "email":null,
    //         "municipio":"SAO PAULO",
    //         "DataCadastro":"2020\/9\/17",
    //         "cupom":"23381174",
    //         "regatado":"false",
    //         "dtregatado":null
    //         }

    //         ref.child('chave').update(dados)


    // }


    return (
        <div className={styles.container}>
            <Head>
                <title>Mega Outlet - Vendas</title>
                <meta name="description" content="Mega Outlet - Vendas" />
                <meta property="og:title" content="Mega Outlet" />
                <meta property="og:description" content="Mega Outlet - Loja de móveis: sofás, mesas, cadeiras, polronas, colchões, sofá cama, mesa de cabeceiras..." />
                <meta property="og:url" content="https://vendas.megaoutletsofa.com.br/" />
                <meta property="og:image" content="https://vendas.megaoutletsofa.com.br/loja.png" />
                <meta property="og:type" content="website" />
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;1,400&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
                <Pixel scriptfbq="fbq('track', 'PaginaVendedores');" />
            </Head>

            <main className={styles.main}>
                <GoogleAnalytics />

                {/* <form onSubmit={gravarVendedores}>
                    <input type="text" name={valor} onChange={(event => setValor(event.target.value))} />
                    <button type='submit'> enviar</button>
                </form> */}
<img src="/logo.svg" alt="mega Outlet" className={styles.logo} />
                {/* <img src="/outubrorosa.png" alt="mega Outlet" className={styles.logo} /> */}
                {/* <img src="/novembroazulcancer.png" alt="mega Outlet" width={400} /> */}
                {/* <h1 className={styles.title}>seja bem-vindo!</h1> */}
                <br />
                <small  >Fale com nossos consultores de venda pelo WhatsApp</small> <br />


                <DynamicVendedores />



                <Contatos />
            </main>
            <footer className={styles.footer}>
                <Rodape />
            </footer>
        </div>
    )
}

export default Home
