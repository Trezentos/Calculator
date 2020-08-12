import React,{useContext} from 'react'
import '../styleGlobalButton.css'
import {NumberContext} from '../NumberProvider'


export default props =>{
    const { calcular } = useContext(NumberContext)

    return(
         <button onClick= { ()=> calcular() } >{props.symbol}</button>
    )

}