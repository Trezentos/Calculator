import React,{useContext} from 'react'
import '../styleGlobalButton.css'
import {NumberContext} from '../NumberProvider'


export default props =>{
    const { calculate } = useContext(NumberContext)

    return(
         <button onClick= { ()=> calculate() } >{props.symbol}</button>
    )

}