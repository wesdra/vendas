import { useState } from 'react';

function Home (){
    return (
            <div>
                <h1>Home Page de teste</h1>
                <a href="/sobre">Sobre</a>
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