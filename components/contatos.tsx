import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Contatos = () => (
    <div className={styles.grid}>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2><Image src="/icon-end.svg" alt="Endereço" height={20} width={20} /> Endereço &rarr;</h2>
                        <p> Rua Pascoal Rizzo,43 - Parque Alexandra - 06714-250 Cotia / SP</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2><Image src="/icon-fone.svg" alt="Telefone" height={20} width={20} /> Telefone &rarr;</h2>
                        <p>(11) 4702-5141 - Atendimento em horário comercial.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2><Image src="/icon-sac.svg" alt="SAC" height={20} width={20} /> SAC &rarr;</h2>
                        <p>(11) 9.4161-1651 - Atendimento pelo WhatsApp.</p>
                    </a>
                </div>
)

export { Contatos }