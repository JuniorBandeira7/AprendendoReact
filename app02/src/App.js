import React from 'react';//importa a biblioteca do react
import Header from './componentes/Header'/*importa o header do arquivo header da pasta componentes*/
import Corpo from './componentes/corpo'/*o nome deve ser o mesmo aqui e no return*/
import Dados from './componentes/Dados'

export default function App(){

  const canal='testec'

    return(
    <>
      <Header/>{/*importa o header do arquivo header da pasta componentes*/}
      <Corpo/>{/*perceba que aqui é um section, porém escreve-se o nome do import, com letra maiuscula.*/}
      <Dados canal={canal} 
      youtube='testey' 
      curso='testecc'/>{/*Atribudos que vao ser enviados por props*/}

    </>
  )
}
