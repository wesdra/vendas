import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Contatos = () => (
    <>
        <div className={styles.grid}>

            <a href="https://goo.gl/maps/KuhXE91U1Uv1CPo99" className={styles.card}>
                <h2><Image src="/icon-endazul.svg" alt="Endereço" height={20} width={20} /> Endereço &rarr;</h2>
                <p> Rua Pascoal Rizzo,43 - Parque Alexandra - 06714-250 Cotia / SP</p>
            </a>

            <a href="tel:551147025141" className={styles.card}>
                <h2><Image src="/icon-foneazul.svg" alt="Telefone" height={20} width={20} /> Telefone &rarr;</h2>
                <p>(11) 4702-5141 - Atendimento em horário comercial.</p>
            </a>

            <a href="https://wa.me/5511941611651" className={styles.card}>
                <h2><Image src="/icon-sacazul.svg" alt="SAC" height={20} width={20} /> SAC &rarr;</h2>
                <p>(11) 9.4161-1651 - Atendimento pelo WhatsApp.</p>
            </a>
        </div>
        <small>Para falar conosco mande um e-mail para <a href="mailto:ouvidoria@megaoutletsofa.com.br"  className={styles.link}>ouvidoria@megaoutletsofa.com.br</a></small>
    </>
)

export { Contatos }