import { database } from "../services/firebase";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { VendedoresData, VendedoresDb } from "../VendedoresDb";
import Link from "next/link";

// interface Ivendedores {
//    // chave: string
//     nome: string
//     img: string
//     online: boolean
//     link: string
//     id: string

// }

export default function Vendedores() {
  const { addToast } = useToasts();

  const [vendedores, SetVendedores] = useState<VendedoresData[]>(VendedoresDb);

  //const [vendedores, setVendedores] = useState<Ivendedores[]>([])
  const mergeStyles = (styleArray: string[]) =>
    styleArray.map((style: string) => `${style}`).join(" ");

  // useEffect(() => {

  //     (async () => {
  //         const refVendedores = database.ref('vendedores')
  //         refVendedores.on('value', resultado => {

  //             const dados = Object.entries<Ivendedores>(resultado.val() ?? {}).map(([chave, valor]) => {
  //                 return {
  //                     "chave": chave,
  //                     "nome": valor.nome,
  //                     "img": valor.img,
  //                     "online": valor.online,
  //                     "link": valor.link,
  //                     "id": valor.id,
  //                 }
  //             })
  //             var novalista = dados.sort(function () {
  //                 return 0.6 - Math.random();
  //             });
  //             setVendedores(novalista)
  //         })

  //     })()
  // }, [])

  // { nome: 'Fernanda', img: '/fernanda.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/39TYFVO', id: '39TYFVO' },
  //     { nome: 'Gustavo', img: '/luizgustavo.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/37zzbPU', id: '37zzbPU' },
  //     { nome: 'Rosa', img: '/avatar1.svg', online: true, link: 'https://wa.me/5511913195773', id: '5511913195773' },
  //     //{ nome: 'Ednaldo', img: '/ednaldo.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/39WBASx', id: '39WBASx' },
  //     { nome: 'Taina', img: '/taina.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/2Y6DHkt', id: '2Y6DHkt' },
  //     { nome: 'Aline', img: '/aline.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/3vMpGVq', id: '3vMpGVq' },
  //    // { nome: 'Marta', img: '/marta.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/3BOTmCJ', id: '3BOTmCJ' },
  //    // { nome: 'Monise', img: '/monise.svg', online: false, link: 'https://vendas.megaoutletsofa.com.br/3onMfOk', id: '3onMfOk' },

  // const vendedores = [

  //     { nome: 'Fernanda', img: '/fernanda.svg', online: true, link: 'https://wa.me/message/5Z5K5EMRKBG4G1', id: '5Z5K5EMRKBG4G1' },
  //     { nome: 'Gustavo', img: '/luizgustavo.svg', online: true, link: 'https://wa.me/message/XKSJND5ULUMKK1?utm_source=Luiz+Gustavo', id: 'XKSJND5ULUMKK1' },
  //     { nome: 'Rosa', img: '/avatar1.svg', online: true, link: 'https://wa.me/5511913195773', id: '5511913195773' },
  //     //{ nome: 'Ednaldo', img: '/ednaldo.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/39WBASx', id: '39WBASx' },
  //     { nome: 'Taina', img: '/taina.svg', online: true, link: 'https://wa.me/5511986127633', id: '5511986127633' },
  //     { nome: 'Aline', img: '/aline.svg', online: true, link: 'https://wa.me/message/7OJBLF6XKNXBE1?utm_source=Aline', id: '7OJBLF6XKNXBE1' },
  //    // { nome: 'Marta', img: '/marta.svg', online: true, link: 'https://vendas.megaoutletsofa.com.br/3BOTmCJ', id: '3BOTmCJ' },
  //    // { nome: 'Monise', img: '/monise.svg', online: false, link: 'https://vendas.megaoutletsofa.com.br/3onMfOk', id: '3onMfOk' },

  // ];

  function redirect(id: string | undefined, time: number): void {
    setTimeout(function () {
      //window.location.assign("https://bit.ly/" + id);
      // window.location.href = "https://bit.ly/" + id;
      window.location.href = "/atendimento/" + id;
    }, time);
  }

  // function catraca(e: any) {
  //     e.preventDefault()

  //     api.post('/api/vendedor').then(response => {
  //         console.log(response.data);
  //         //console.log(response.data.urlwhatsapp);
  //         redirect(response.data.urlwhatsapp.replace('https://bit.ly/', ''));
  //     });

  // }

  function add(id: string | undefined): void {
    if (id) {
      localStorage.setItem("moid", id);
    }
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
    if (atual === null) idc = "online";

    return idc;
  }

  // function buscaPorId(id: string){
  //     var vend = equipe.find(item => item.antigo = id);
  //     console.log('vend',vend);
  //     return vend.id;
  // }

  function aoclicar(e: any) {
    e.preventDefault();
    const target = e.currentTarget as HTMLLinkElement;
    //console.log(target.dataset.id)
    //console.log(target.dataset.status)
    let status = target.dataset.status;
    let id = target.dataset.id;

    //e.preventDefault()
    // console.log(e.currentTarget.dataset.id)
    // console.log(e.currentTarget.dataset.status)
    // var status = (e.currentTarget.dataset.status);
    // var id = (e.currentTarget.dataset.id);

    if (status === "offline") {
      addToast("O Vendedor selecionado está offline.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    //se o ultimo atendimento estiver offline permite chamar outro
    let getid = get();
    const result = vendedores.find((item) => item.id === getid);
    if (result) {
      console.log(result);
      if (result.online) {
        console.log("online", result.id);
        addToast(
          `Você está em atendimento aberto com o colaborador  ${result.nome}!`,
          {
            appearance: "info",
            autoDismiss: true,
          }
        );
        add(result.id);
        redirect(result.id, 2000);
        return;
      } else {
        console.log("online", result.id);
        add(id);
        redirect(id, 1);
        return;
      }
    }

    if (status === "online") {
      add(id);
      redirect(id, 1);
      return;
    }

    if (status === "offline") {
      var atual = get();
      var redir = atual != null ? atual : id;
      redirect(redir, 1);
      return;
    }
  }
  if (!vendedores) return <div>Loading</div>;

  return (
    <div className={styles.atendimento}>
      {vendedores.map((data) => (
        <Link   key={data.id} href="/">
          <a
          
            // href={`#${data.link}`}
            rel={data.id}
            onClick={(e) => aoclicar(e)}
            data-id={data.id}
            data-status={`${!!data.online ? "online" : "offline"}`}
            className={`${
              !!data.online
                ? mergeStyles([styles.vendedores])
                : mergeStyles([styles.vendedores, styles.off])
            }`}
          >
            {/* // <a  key={data.id} href={`${!!data.online 
                            //     ? data.link
                            //     : '#'}`} 
                            //     className={`${!!data.online 
                            //         ? mergeStyles([styles.vendedores])
                            //         : mergeStyles([styles.vendedores, styles.off])}`}
                            //     > */}
            <div className={styles.iconcontainer}>
              <img className={styles.vendimg} src={data.img} alt={data.nome} />
              <div
                className={`${
                  !!data.online
                    ? mergeStyles([styles.statuscircle, styles.online])
                    : mergeStyles([styles.statuscircle, styles.offline])
                }`}
              ></div>
            </div>

            <span>{data.nome} </span>
          </a>
        </Link>
      ))}
    </div>
  );
}
