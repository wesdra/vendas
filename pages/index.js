import { useState } from 'react';


function Home (){
    return (
            <div>
                <h1>Home Page de teste</h1>
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