// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { delBasePath } from 'next/dist/shared/lib/router/router'
import { useEffect, useState } from 'react'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}


//const db = firebase.database();
//https://www.youtube.com/watch?v=P-XNZdKQUR0
//Cadastrando ------------------------------------------
// const gamesRef = db.ref("games")
// const newGameRef = gamesRef.push()
// newGameRef.set({
//   player1,
//   player2,
//   tur:"player1",
//   first:"player1"
//   board:[ "","", ""]
// })
// router.push(`/games/${newsGamesRef.rey}`)
//Resgatando ------------------------------------------
// const [game, setGame ] = useState<Igame | null>(null)
// useEffect(()=>{

//   const ref = db.ref(`games/${id}`)
//   ref.on("value", (snapshot) => {
//     console.log(snapshot.val())
//   })
//   return () => ref.off()

// },[id])

// if(!game) return <div>Loading</div>

// return(
//   <main>
//     <pre>{JSON.stringify(game, null, 2)}</pre>
//     <div>
//       {game.board.map(row, rowindex) => (
//         <div rey={`row-${rowindex}`}>
//         {rowindex}
//           {row.map((col, colindex)=> (
//             <div rey={`row-${rowindex}-${colindex}`}>   {col}</div>
          
//             ))}
//         </div>}
//       )
//     </div>
//   </main>
// )
//atualizar ------------------------------------------
//db.ref(`games/${id}`).set(objcopy)
