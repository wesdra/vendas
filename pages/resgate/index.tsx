import type { NextPage } from 'next'
import Head from 'next/head'
import { FormEvent, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { Rodape } from '../../components/rodape'
import { database } from '../../services/firebase'
import styles from '../../styles/Cupons.module.css'


// const DynamicVendedores = dynamic(
//   () => import('../components/Vendedores'),
//   { loading: () => <span >carregando...</span> }
// )

interface Icupom {
    chave: string
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

const Resgate: NextPage = () => {

    const { addToast } = useToasts()
    const [cupom, setCupom] = useState<Icupom[]>()


 

     const [valor, setValor] = useState('')

    function BuscarCupom(event: FormEvent) {
        event.preventDefault()

        if (!valor) {
            addToast("Informe o cupom", {
                appearance: 'error',
                autoDismiss: true,
            })
        }else{

            //filtrar cupons pelo campo aceesso que seja maior que zero
            const refCupons = database.ref('cupons').orderByChild("cupom").equalTo(valor)
            //const refCupons = database.ref('cupons').orderByChild("cupom").equalTo("WES123")
            
            refCupons.on('value', resultado => {

                const dados = Object.entries<Icupom>(resultado.val() ?? {}).map(([chave, valor]) => {
                    return {
                        "chave": chave,
                        "nome": valor.nome,
                        "DataCadastro": valor.DataCadastro,
                        "cupom": valor.cupom,
                        "email": valor.email,
                        "id": valor.id,
                        "municipio": valor.municipio,
                        "regatado": valor.regatado,
                        "telefone": valor.telefone,
                        "acesso": valor.acesso,
                    }
                })

                setCupom(dados)
            })
        }


        //setValor('')
    }

    function atualizar(cupom:Icupom){
        const ref = database.ref('cupons')

        const dados = {
            "id": cupom.id,
            "telefone":cupom.telefone,
            "nome":cupom.nome,
            "email":cupom.email,
            "municipio":cupom.municipio,
            "DataCadastro":cupom.DataCadastro,
            "cupom":cupom.cupom,
            "regatado":true,
            "dtregatado": new Date()
            }

            ref.child(cupom.chave).update(dados)


            addToast(`Cupom ${cupom.cupom} resgatado com sucesso`, {
                appearance: 'success',
                autoDismiss: true,
            })

    }



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

            <h1 className={styles.title}>Resgatar Cupom</h1>
                <p>Informe o cupom que deseja resgatar.</p>
                <p> Buscar por: {valor}</p>
               <p>
                 <form onSubmit={BuscarCupom}>
                     <label>Cupom:</label>
                    <input type="text" name={valor} onChange={(event => setValor(event.target.value))} />
                    <button type='submit'> buscar</button>
                </form>
                </p>

                <table className={styles.table}>
                    <thead>
                    <tr>
                            <th  className={styles.th}>Nome</th>
                            <th  className={styles.th}>Cupom</th>
                            <th  className={styles.th}>Regate</th>
                            {/* <th  className={styles.th}>Data</th> */}
                            <th  className={styles.th}>Acesso</th>
                        </tr>
                    </thead>
                    <tbody>
                {cupom?.map(data => (

                        <tr key={data.id}  className={styles.tr}>
                            <td  className={styles.td}>{data.nome} 
                            <button type='button' onClick={()=>{
                                atualizar(data)
                            }}>resgatar</button>
                            </td>
                            <td  className={styles.td}>{data.cupom} </td>
                            <td  className={styles.td}>{data.regatado === 'false' ? 'Não' : 'Sim'}</td>
                            {/* <td  className={styles.td}>{data.telefone} </td> */}
                            <td  className={styles.td}>{data.acesso} </td>
                        </tr>

                ))}
                </tbody>
                </table>
            </main>
            <footer className={styles.footer}>
                <Rodape />
            </footer>
        </div>
    )
}

export default Resgate




// static AsyncQueryMainFloorMap(mapID){
//   const GOOGLE_MAPS_STATIC_CLASS = GoogleMaps;

//   this._userID = "Aliansce";
//   this._mapID = mapID;

//   this._mapFloorROOT = this.FirebaseInstance.ref('users/' + this._userID + '/MAPS/' + this._mapID).child('FLOORS');
//   this._mapFloorROOT.once('child_added').then((mapFloorSnapshot) => {
//       this._floorROOT =  this.FirebaseInstance.ref('users/' + this._userID + '/MAPS/' + this._mapID + '/FLOORS/').child('' + mapFloorSnapshot.key + '/');
//       this._floorROOT.orderByChild('floorType').equalTo('main').once('child_added').then((e) => {
//           console.log(e.key)
//       });

      
//   }) .catch((error) => {
//       console.warn("error: " + error);
//       // TODO
//   });

// };