import firebase from 'firebase'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect, useMemo, useState } from 'react'
import { Contatos } from '../components/contatos'
import { GoogleAnalytics } from '../components/googleanalytics'
import { Rodape } from '../components/rodape'
import Vendedores from '../components/vendedores'
import { database } from '../services/firebase'
import styles from '../styles/Cupons.module.css'


// const DynamicVendedores = dynamic(
//   () => import('../components/Vendedores'),
//   { loading: () => <span >carregando...</span> }
// )

interface Icupom {
  DataCadastro: string
  cupom: string
  email: string
  id: string
  municipio: string
  nome: string
  regatado: string
  telefone: string
  acesso: number
}

const Cupons: NextPage = () => {
  const { query } = useRouter()

  const router = useRouter();
  const data = router.query.id;

  const [cupom, setCupom] = useState<Icupom>()
  const [telefone, setTelefone] = useState<string>((query['id'] || '').toString())

  const id = (query.id || '').toString()

  useEffect(() => {
    if (!router.isReady) return;


    (async () => {

      const dbcupom = database.ref('cupons')

      dbcupom.orderByChild("telefone").equalTo((data || '').toString()).on("child_added", (snap) => {

        let qtdeacessp = (snap.val().acesso || 0)
        const cupomcurent = {
          "DataCadastro": snap.val().DataCadastro,
          "cupom": snap.val().cupom,
          "email": snap.val().email,
          "id": snap.val().id,
          "municipio": snap.val().municipio,
          "nome": snap.val().nome,
          "regatado": snap.val().regatado,
          "telefone": snap.val().telefone,
          "acesso": qtdeacessp + 1
        }
        dbcupom.child((snap.key || '').toString()).update(cupomcurent)

        // database.ref('cupons').on("child_changed", snap => {
        //   console.log(snap.val()); // will return updated user object
        // });


        setCupom(cupomcurent)

        //console.log(snap.val());
      });
    })()


  }, [router.isReady])







  return (
    <div className={styles.container}>
      <Head>
        <title>Mega Outlet - Cupom de desconto</title>
        <meta name="description" content="Mega Outlet - Cupom de desconto" />
        <meta property="og:title" content="Mega Outlet" />
        <meta property="og:description" content="Mega Outlet - Loja de móveis: sofás, mesas, cadeiras, polronas, colchões, sofá cama, mesa de cabeceiras..." />
        <meta property="og:url" content="https://vendas.megaoutletsofa.com.br/" />
        <meta property="og:image" content="https://vendas.megaoutletsofa.com.br/loja.png" />
        <meta property="og:type" content="website" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;1,400&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <GoogleAnalytics />
        <img src="/megaoutlet.svg" alt="Mega Outlet" className={styles.logo} />


        <h1 className={styles.title}>{cupom?.nome}, parabéns!</h1>


        <h2><span className={styles.desconto} >Você ganhou 40% de desconto,</span><br />
          seu cupom é: <span className={styles.cupom} >{cupom?.cupom}</span> </h2>


        <h5>Atenção: você pode parcelar em até três vezes, e utilizar seu cupom até dia 30/04/2022.</h5>

        <small  >Fale con nossos consultores de venda pelo WhatsApp</small> <br />

        <Vendedores />
        <img src="/loja.png" width={300} alt="Loja Mega Outlet" />
        <Contatos />
      </main>
      <footer className={styles.footer}>
        <Rodape />
      </footer>
    </div>
  )
}

export default Cupons

