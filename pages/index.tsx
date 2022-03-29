import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Contatos } from '../components/contatos'
import { Rodape } from '../components/rodape'
import dynamic from 'next/dynamic'
import { FormEvent, useState } from 'react'
import { database } from '../services/firebase'

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
        //     { nome: 'Ednaldo', img: '/ednaldo.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/39WBASx', id: '39WBASx' },
        //     { nome: 'Taina', img: '/taina.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/2Y6DHkt', id: '2Y6DHkt' },
        //     { nome: 'Aline', img: '/aline.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/3vMpGVq', id: '3vMpGVq' },
        //     { nome: 'Marta', img: '/marta.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/3BOTmCJ', id: '3BOTmCJ' },
        //     { nome: 'Monise', img: '/monise.svg', online: false, link: 'https://vendas.megaoutletsofa.com.br/3onMfOk', id: '3onMfOk' },

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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;1,400&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>


                {/* <form onSubmit={gravarVendedores}>
                    <input type="text" name={valor} onChange={(event => setValor(event.target.value))} />
                    <button type='submit'> enviar</button>
                </form> */}

                <img src="/megaoutlet.svg" alt="mega Outlet" className={styles.logo} />
                <h1 className={styles.title}>seja bem-vindo!</h1>
                <br />
                <small  >Fale con nossos consultores de venda pelo WhatsApp</small> <br />


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
