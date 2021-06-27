import { useState } from 'react';
import Link from 'next/link';

function Home (){
    return (
            <div>
                <h1>Home Page de teste</h1>
                <Link href="/sobre"><a>Sobre</a></Link>
                
                <div className="titilo">ínicio</div>
                <Contador />
           </div>
        )
}

function Contador (){
    const [contador, setContador] = useState(1);

    function adicionarContatdor(){
        setContador(contador + 1);
    }
    return (
        <div>
            <p>{contador}</p>
            <button onClick={adicionarContatdor}>Adicionar</button>
        </div>
    )
}


export default Home;