import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Rodape = () => (
    <>
    <div className={styles.rede}>
    <span> <a href="https://instagram.com/megaoutlet_2" target={"_blank"} rel="noopener noreferrer">
        <Image src="/icon-instagramazul.svg" alt="Instagram" color="#EC268F" height={20} width={20} />

    </a></span>

    <span><a href="https://facebook.com/megaoutlesofa" target={"_blank"} rel="noopener noreferrer">
        <Image src="/icon-facebookazul.svg" alt="Instagram" height={20} width={20} />

    </a></span>

</div>
<div>
    <a
        href="https://vendas.megaoutletsofa.com.br"
        target="_blank"
        rel="noopener noreferrer"
    >
        desenvolvido por {' '} Wesdra Lima
        {/* <span>
            &nbsp;<img src="/logo-wesdra-lima.svg" className={styles.wr} alt="Desenvolvido por Wesdra Lima" />
        </span> */}
    </a>
</div>
</>
)

export { Rodape }