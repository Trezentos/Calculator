import React,{useContext} from 'react'
import {NumberContext} from '../NumberProvider'

import '../styleGlobalButton.css'
//Roubando o estilo do botão padrão

export default e =>{
    const { clearValues } = useContext(NumberContext)

    return (

        <button onClick={ () => clearValues() } >C</button>

    )

}