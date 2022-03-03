
import React from 'react';//importa a biblioteca do react
import Foto1 from './componentes/imgs/9-tsar-1d8eb84e.jpg'


export default function App(){
  const nome='Julio'
  const nasc='05/12/98'
  return(
    <>
      <p>{nome}</p>{/*{} é usado para escrever javascript dentro desse espaço */}
      <p>{nasc}</p>
      <img src={Foto1}/>
      <img src='/img/10-526cd06f.jpg'/>{/*como essa imagem está em public, que é o local onde encontr-se o index.html, pode apontar o src diretamente para a imagem */}
    </>
  )
}

 